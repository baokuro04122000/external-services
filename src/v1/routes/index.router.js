const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller')
const { verifyAccessToken } = require('../services/jwt.service')
const {uploadSingle, uploadMultiple} = require('../middlewares/multer.middleware');

router.get('/checkstatus',async (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.post('/api/upload/image',verifyAccessToken, uploadSingle,
    uploadController.uploadFile)

router.post('/api/upload/proof', uploadMultiple, uploadController.uploadProofSeller)
router.post('/api/delete/image', uploadController.delete)
router.post('/api/delete/image/list', uploadController.deleteListImage)
router.post('/api/delete/proof/list', uploadController.deleteFileListProof)
router.post('/api/test', uploadController.moveFile)
module.exports = router;