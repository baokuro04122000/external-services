const express = require('express');
const app = express();
const redis = require('./v1/databases/init.redis')
const jwt = require('./v1/services/jwt.service')
const { sendMail } = require('./v1/services/sendMail')
//init dbs 
//require('./v1/databases/init.mongodb')
redis.subscribe("send_mail", (err, count) =>{
    if (err) {
        console.error("Failed to subscribe: %s", err.message);
      } else {
        console.log(
          `Subscribed successfully! This client is currently subscribed to ${count} channels.`
        );
      }
})

redis.on('message',async (channel, user) => {
  console.log(`Received data from ${channel}`);
  if(channel === "send_mail") {
    try {
      const data = JSON.parse(user)
      sendMail(data.email, data.verifyToken)
      return 
    } catch (error) {
      console.log(error)
    }
  }
})

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