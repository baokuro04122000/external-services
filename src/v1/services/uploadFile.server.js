const {google} = require('googleapis')
const fs = require('fs')
const path = require('path')
const shortid = require('shortid')

const CLIENT_ID = process.env.CLIENT_ID_DRIVE
const CLIENT_SECRET = process.env.CLIENT_SECRET_DRIVE
const REDIRECT_URI = process.env.REDIRECT_URI_DRIVE
const REFRESH_TOKEN = process.env.REFRESH_TOKEN_DRIVE
const PARENT_DRIVE = process.env.PARENT_FOLDER_DRIVE
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
})

var that = module.exports = {
  setFilePublic:async (fileId) => {
    try {
      await drive.permissions.create({
        fileId,
        requestBody: {
          role: 'reader',
          type: 'anyone'
        }
      })
      return true
    } catch (error) {
      return Promise.reject({
        status:400,
        "errors":{
          message:error
        }
      })
    }
  },
  deleteFiles:async (fileList) => {
    if(fileList.length === 1){
      try {
        const deleteFile = await drive.files.delete({
          fileId:fileList[0]
        })
        console.log('deleting success')
        return 
      } catch (error) {
        console.log(error)
      }
    }
    fileList.map(async (id) => {
      try {
        await drive.files.delete({
          fileId:id
        })
        return
      } catch (error) {
        console.log(error)
        return
      }
    })
  }
}