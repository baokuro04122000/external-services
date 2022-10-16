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

      const getUrl = await drive.files.get({
        fileId,
        fields: 'webViewLink, webContentLink'
      })

      return getUrl

    } catch (error) {
      console.log(error)
    }
  },
  uploadSingleFile: (file) => {
    return new Promise(async (resolve, reject) => {
      try {
        const fileMetadata = {
          name: file.originalname+"_"+shortid.generate(),
          parents: [PARENT_DRIVE], // Change it according to your desired parent folder id
        };
  
        const media = {
          mimeType: file.minetype,
          body:fs.createReadStream(file.path)
        }
  
        const createFile = await drive.files.create({
          requestBody: fileMetadata,
          media: media
        })
        const fileId = createFile.data.id
        await that.setFilePublic(fileId)
        const link = `https://drive.google.com/uc?id=${fileId}`
        fs.unlink(file.path, function (err) {
          if (err) throw err;
          return resolve({
            fileLink:link,
            fileId,
            status:"done"
          })
        });
      } catch (error) {
        console.log(error)
        reject({
          status: 400,
          "errors":{
            message: error
          }
        })
      }
    })    
  },
  uploadFileList: (fileList) => {
    return new Promise(async (resolve, reject) => {
      const list =  fileList.map(async (file) => {
          try {
            const link = await that.uploadSingleFile(file)
            return link
          } catch (error) {
            console.log(error)
            return reject({
              status:500,
              "errors":{
                message:"Internal Server Error"
              }
            })
          }
        })
        Promise.all(list).then((listLink)=>{
          return resolve(listLink)
        })
      })      
  },
  deleteFiles:async (fileList) => {
    if(fileList.length === 1){
      try {
        const deleteFile = await drive.files.delete({
          fileId:fileList[0]
        })
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