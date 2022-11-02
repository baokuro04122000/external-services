const {setFilePublic, uploadFileList} = require('../services/uploadFile.server')

var that = module.exports = {
  uploadFile:async (req, res) => {
    const link = `https://drive.google.com/uc?id=${req.file.fileId}`
    try {
      await setFilePublic(req.file.fileId)
      console.log(link)
      res.json({
        fileLink: link,
        fileId: req.file.fileId,
        status: "done"
      })
    } catch (error) {
      console.log(error)
      res.status(400).json(error)  
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