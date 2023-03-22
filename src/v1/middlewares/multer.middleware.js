const multer = require("multer")
const path = require("path")
const Message = require("../lang/en")
const shortid = require('shortid')
const fs = require('fs')

var that = module.exports = {
  uploadSingle: multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        console.log(req.payload)
        const path = `src/public/temp/${req.payload.userId}`;
        fs.mkdirSync(path, { recursive: true })
        cb(null, path)
      },
      filename: (req, file, cb) => {
        cb(null,Date.now()+"-"+ shortid()+ path.extname(file.originalname))
      },
    }),
    limits: {
      fileSize: Number(process.env.IMAGE_MAX_SIZE || 524288), // default 5Mb
    },
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname)
      let math = ['.png', '.jpg','.gif','.jpeg']
      if(math.indexOf(ext) === -1) {
        return cb(new Error(Message.format_file_invalid))
      }
      cb(null, true)
    },
  }).single("file")

  ,uploadMultiple: multer({
    storage: multer.diskStorage({
      destination: function (req, file, callback) {
        const path = `src/public/temp/${req.payload.userId}`;
        fs.mkdirSync(path, { recursive: true })
        callback(null, path);
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
      let math = ['.png', '.jpg', '.jpeg', '.dox','.pdf'] 
      if(math.indexOf(ext) === -1) {
        return callback(new Error(Message.format_file_and_image_invalid))
      }
      callback(null, true)
    }
  }).array("proof",3)
}