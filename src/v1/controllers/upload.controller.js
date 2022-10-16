const {uploadSingleFile, uploadFileList} = require('../services/uploadFile.server')

var that = module.exports = {
  uploadFile:async (req, res) => {
    console.log("jdhaskd",req.file)
    try {
      const image =await uploadSingleFile(req.file)
      res.json(image)
    } catch (error) {
      res.status(error.status).json(error)  
    }
  },
  uploadProofSeller:async (req, res) => {
    console.log("multiple",req.files)
    try {
      const fileList = await uploadFileList(req.files)
      res.json(fileList)
    } catch (error) {
      res.status(error).json(error)
    }
  }
}