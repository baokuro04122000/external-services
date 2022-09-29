const express = require('express');
const router = express.Router();

const jwt = require('../services/jwt.service')

router.get('/checkstatus',async (req, res, next) => {
    try {
        const token = await jwt.signRefreshToken("dinhbao")
        console.log("token:::",token) 

        await jwt.verifyRefreshToken('dinhbao', token)
    } catch (error) {
        console.log(error)
    }

    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

module.exports = router;