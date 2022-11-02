const Multer = require("multer")
const path = require("path")
const Message = require("../lang/en")
const shortid = require('shortid')
const GoogleDriveStorage = require('multer-google-drive')
const {google} = require('googleapis')
const CLIENT_ID = process.env.CLIENT_ID_DRIVE
const CLIENT_SECRET = process.env.CLIENT_SECRET_DRIVE
const REDIRECT_URI = process.env.REDIRECT_URI_DRIVE
const REFRESH_TOKEN = process.env.REFRESH_TOKEN_DRIVE
const PARENT_DRIVE = process.env.PARENT_FOLDER_DRIVE
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
})

var that = module.exports = {
  uploadSingle: Multer({
    storage:  GoogleDriveStorage({
      drive: drive,
      parents: PARENT_DRIVE,
      limits: {
        fileSize: Number(process.env.IMAGE_MAX_SIZE),
      },
      fileFilter: (req, file, callback) => {
        let ext = path.extname(file.originalname)
        let math = ['.png', '.jpg','.gif','.jpeg']
        if(math.indexOf(ext) === -1) {
          return callback(new Error(Message.format_file_invalid))
        }
        callback(null, true)
      },
      fileName: function (req, file, cb) {
        let filename = file.originalname+"-"+shortid.generate();
        cb(null, filename);
      },
      
    })
  }).single("file")

  ,uploadMultiple: Multer({
    storage: Multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, `${__dirname}/audio-files`);
      },
      filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
      },
    }),
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
    fileFilter:(req, file, callback) => {
      let ext = path.extname(file.originalname)
      let math = ['.png', '.jpg', '.gif', '.jpeg', '.dox','.pdf'] 
      if(math.indexOf(ext) === -1) {
        return callback(new Error(Message.format_file_and_image_invalid))
      }
      callback(null, true)
    }
  }).array("proof",3)
}