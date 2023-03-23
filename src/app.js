const express = require('express');
const cors = require('cors')
const redis = require('./v1/databases/init.redis')
const {
  sendOTPConfirmEmail,
  sendTokenResetPassword,
  sendMailToRegisterSeller,
  sendMailOrderSuccess,
  sendMailActiveAccount
} = require('./v1/utils/templateEmail')
const {
  deleteFiles,
  moveDelete
} = require('./v1/services/uploadFile.server')
const rimraf = require('rimraf')
const KEY = require('./v1/lang/key.socket')
const app = express();


const { sendMail, sendOtp } = require('./v1/services/sendMail');

//init dbs 
//require('./v1/databases/init.mongodb')
redis.subscribe(
  "send_mail",
  "send_token",
  "send_email_reset_password",
  "send_otp_register_mobile",
  "delete_file_list",
  "order_success",
  "send_noti_order",
  "send_noti_delivery",
  "move_image",
   (err, count) =>{
    if (err) {
        console.error("Failed to subscribe: %s", err.message);
      } else {
        console.log(
          `Subscribed successfully! This client is currently subscribed to ${count} channels.`
        );
      }
})

redis.on('message',async (channel, data) => {
  console.log(`Received data from ${channel}`);
  if(channel === "move_image"){
    const payload = JSON.parse(data);
    const {filePath, userId} = payload
    moveDelete({filePath, userId})
    return
  }
  if(channel === "send_mail") {
      const payload = JSON.parse(data)
      console.log(payload)
      if(payload.type === "register_seller"){
        sendMail({
          sendTo: payload.email,
          text:"Email to register seller account",
          subject:'Access the link to register seller account',
          html: sendMailToRegisterSeller(payload.verifyToken, payload.name)   
        })
        return
      }
      if(payload.type === 'register_user'){
        sendMail({
          sendTo: payload.email,
          text:"Email to active your account",
          subject:'Access the link to active your account',
          html: sendMailActiveAccount({token: payload.verifyToken, name: payload.name})   
        })
      }
    return
  }
  if(channel === "send_email_reset_password") {
      const payload = JSON.parse(data)
      sendOtp(payload.email,payload.name, payload.token, "The Link Reset Password", sendTokenResetPassword)
      return
  }
  if(channel === "send_otp_register_mobile") {
    const payload = JSON.parse(data)
    sendOtp(payload.email,payload.name ,payload.otp, "The OTP code active your account", sendOTPConfirmEmail)
    return
  }
  if(channel === "delete_file_list"){
    const payload = JSON.parse(data)
    console.log(payload)
    deleteFiles(payload.fileList)
    return
  }
  if(channel === "order_success"){
    const payload = JSON.parse(data)
    sendMail({
      sendTo: payload.email,
      text:"Email to announce you order",
      subject:'Please check your order',
      html: sendMailOrderSuccess({
        name: payload.name,
        orderId: payload.orderId,
        totalPaid: payload.totalPaid,
        totalShippingCost: payload.totalShippingCost
      })   
    })
    console.log(payload)
  }
  if(channel === "send_noti_order"){
    const payload = JSON.parse(data)
    console.log(payload)
    global.users[payload.user]?.forEach((socketId) => {
      global._io.sockets.to(socketId).emit(KEY.send_noti_confirm_order, {
        title: payload.title,
        content: payload.content,
        type: payload.type
      })
    })
  }
  if(channel === "send_noti_delivery"){
    const payload = JSON.parse(data)
    console.log(payload)
    global.users[payload.user]?.forEach((socketId) => {
      global._io.sockets.to(socketId).emit(KEY.send_noti_confirm_shipping, {
        title: payload.title,
        content: payload.content,
        type: payload.type
      })
    })
  }
})

// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static('src/public/images'))
app.use("/proof", express.static('src/public/proof'))
app.use('/temp', express.static('src/public/temp'))
app.use(cors())
//router
app.use(require('./v1/routes/index.router'))

// Error Handling Middleware called

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});


// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

module.exports = app;