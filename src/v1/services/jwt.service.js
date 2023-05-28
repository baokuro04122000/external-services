const JWT = require('jsonwebtoken')
const createError = require('http-errors')
const redis = require('../databases/init.redis')
require('dotenv').config()

const signAccessToken = async (user, secret, ex) => {
  return new Promise( (resolve, reject) => {
    const payload = user
    const options = {
      expiresIn: ex || '1d'
    }
    JWT.sign(payload, secret, options, (err, token) => {
      if(err) return reject(err)
      return resolve(token)
    })
  })
}

const verifyAccessToken = (req, res, next) => {
  
  const token = req.headers['authorization'];
  const { login } = req.query
  const secret = login==='true' ? process.env.ACCESS_TOKEN_SECRET : process.env.IMAGE_TOKEN_SECRET;
  //start verify token
  JWT.verify(token.trim(), secret, (err, payload) => {
    if(err){
      console.log(err)
      if(err.name === "JsonWebTokenError"){
        return next(createError.Unauthorized())
      }
      return next(createError.Unauthorized(err.message))
    }
    req.payload = payload
    console.log('check:::')
    next()
  })
}


const signRefreshToken = async (userId) => {
  return new Promise( (resolve, reject) => {
    const payload = {
      userId
    }
    const secret = process.env.REFRESH_TOKEN_SECRET
    const options = {
      expiresIn:'10m'
    }
    JWT.sign(payload, secret, options, (err, token) => {
      if(err) return reject(err)
      redis.set(token,payload.userId.toString(),'EX',60).then((data)=>{
        console.log("data:::",data)
      })
      console.log("token:::", token)  
      return resolve(token)
    })
  })
}

const verifyRefreshToken = async  (userId,refreshToken) => {
  return new Promise(async (resolve, reject) => {
    const checkRedis = await redis.get(refreshToken)
    if(!(userId === checkRedis))  return reject('token is expired, pls login again')
    JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
      if(err){
        return reject(err)
      }
      return resolve(payload)
    })
  })
}

module.exports = {
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken,
}