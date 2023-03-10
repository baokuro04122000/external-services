const {
  deleteFile,
  deleteFileListImage,
  deleteFileListProof
} = require('../services/uploadFile.server')

var that = module.exports = {
  uploadFile:async (req, res) => {
    return res.status(201).json({image: process.env.SERVER_HOST_IMAGE + req.file.filename})
  },
  uploadProofSeller:async (req, res) => {
    return 'hello world'
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
  }
}