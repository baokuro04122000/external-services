const {
  deleteFile,
  deleteFileListImage,
  deleteFileListProof,
  moveDelete
} = require('../services/uploadFile.server')

var that = module.exports = {
  uploadFile:async (req, res) => {
    return res.status(201).json({
      status: 'done',
      uid: req.file.filename,
      url: process.env.SERVER_HOST_TEMP +req.payload.userId+'/'+ req.file.filename
    })
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
  },
  moveFile: async (req, res) => {
    const {to, tmp, userId} = req.body
    moveDelete({to:'src/public/images'+to, temp: './src/public/temp'+tmp, userId: userId})
    return res.json('hello world')
  }
}