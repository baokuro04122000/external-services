const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller')
const {uploadSingle, uploadMultiple} = require('../middlewares/multer.middleware');

router.get('/checkstatus',async (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.post('/api/upload-image',uploadSingle,
 uploadController.uploadFile)

router.post('/api/upload-proof-seller', uploadMultiple, uploadController.uploadProofSeller)
module.exports = router;