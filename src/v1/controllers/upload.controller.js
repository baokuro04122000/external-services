const {
  deleteFile,
  deleteFileListImage,
  deleteFileListProof,
  moveDelete
} = require('../services/uploadFile.server')

var that = module.exports = {
  uploadFile:async (req, res) => {
    console.log(req.file)
    return res.status(201).json({
      status: 'done',
      uid: req.file.filename,
      url: process.env.SERVER_HOST_TEMP +req.payload.userId+'/'+ req.file.filename
    })
  },
  uploadProofSeller:async (req, res) => {
    if(!req.files){
      return res.status(404).json('Do not receive any file')
    }
    console.log(req.files)
    return res.status(200).json({
      status: 'done',
      uid: req.files[0].filename,
      url: process.env.SERVER_HOST_TEMP + req.payload.userId + '/'+ req.files[0].filename
    })
  },
  delete: (req, res) => {
    const {image, type} = req.body
    return res.status(200).json(deleteFile({file: image.split('/').at(-1), typeFolder: type}))
  },
  deleteListImage:async (req, res) => {
    const {files} = req.body
    try {
      const payload = await deleteFileListImage(files)
      return res.status(payload.status).json(payload)
    } catch (error) {
      return res.status(error.payload).json(error)
    }
  },
  deleteFileListProof: async (req, res) => {
    const {files} = req.body
    try {
      const payload = await deleteFileListProof(files);
      return res.status(payload.status).json(payload)
    } catch (error) {
      return res.status(error.payload).json(error)
    }
  },
  moveFile: async (req, res) => {
    const {path, type} = req.body
    try {
      const payload = await moveDelete({filePath: path, userId: req.payload.userId, type})
      return res.status(200).json(payload)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }
}