const { google } = require('googleapis')
const nodemailer = require('nodemailer')
require('dotenv').config()
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

module.exports = {
  sendMail : async (sendTo, token) => {
    try {
      const acessToken = await oAuth2Client.getAccessToken()
      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
          type: 'OAUTH2',
          user:'baotrue123@gmail.com',
          clientId:CLIENT_ID,
          clientSecret:CLIENT_SECRET,
          refreshToken:REFRESH_TOKEN,
          accessToken:acessToken
        }
      });

      let info = await transporter.sendMail({
        from: '"Fred Foo 👻"<baotrue123@gmail.com>', // sender address
        to: sendTo, // list of receivers
        subject: "Please active your account", // Subject line
        text: "Hello I'm BN ecommer", // plain text body
        html: `<a href='${process.env.LINK_ACTIVE_ACCOUNT}?token=${token}'>Click here to active account</a>`, // html body
      });

      console.log(info)
    } catch (error) {
      console.error(error)
    }
  },
  sendOtp:async (sendTo, otp) => {
    try {
      const acessToken = await oAuth2Client.getAccessToken()
      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
          type: 'OAUTH2',
          user:'baotrue123@gmail.com',
          clientId:CLIENT_ID,
          clientSecret:CLIENT_SECRET,
          refreshToken:REFRESH_TOKEN,
          accessToken:acessToken
        }
      });

      let info = await transporter.sendMail({
        from: '"BTN Ecommerce 👻"<baotrue123@gmail.com>', // sender address
        to: sendTo, // list of receivers
        subject: "Please enter the otp code to reset password", // Subject line
        text: "Your OTP code", // plain text body
        html: `<h1>${otp}</h1>`, // html body
      });

      console.log(info)
    } catch (error) {
      console.error(error)
    }
  }

}