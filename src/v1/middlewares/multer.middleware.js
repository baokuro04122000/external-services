const Multer = require("multer")
const path = require("path")
const Message = require("../lang/en")
var that = module.exports = {
  uploadSingle: Multer({
    storage: Multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, `${__dirname}/audio-files`);
      },
      filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
      },
    }), 
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
    }
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