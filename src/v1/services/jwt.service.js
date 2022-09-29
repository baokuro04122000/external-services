const JWT = require('jsonwebtoken')
const createError = require('http-errors')
const redis = require('../databases/init.redis')

const signAccessToken = async (user) => {
  return new Promise( (resolve, reject) => {
    const payload = user
    const secret = process.env.ACCESS_TOKEN_SECRET
    const options = {
      expiresIn: '1d'
    }
    JWT.sign(payload, secret, options, (err, token) => {
      if(err) return reject(err)
      return resolve(token)
    })
  })
}

const verifyAccessToken = (req, res, next) => {
  
  const token = "token"
  //start verify token
  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if(err){
      if(err.name === "JsonWebTokenError"){
        return next(createError.Unauthorized())
      }
      return next(createError.Unauthorized(err.message))
    }
    req.payload = payload
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
  verifyRefreshToken
}