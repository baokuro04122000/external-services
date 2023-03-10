const { rimraf } = require('rimraf');
const fs = require('fs')

var that = module.exports = {
  deleteFile:async ({file, typeFolder}) => {
    if(typeFolder === 'images'){
      const path = `src/public/images/`;
      fs.mkdirSync(path, { recursive: true })
      rimraf(path+file).then((success) => {
        console.log(success)
        return success
      }).catch((err) => {
        console.log(err)
        return err
      })
    }
    if(typeFolder === 'proof'){
      const path = `src/public/proof/`;
      fs.mkdirSync(path, { recursive: true })
      rimraf(path+file).then((success) => {
        console.log(success)
        return success
      }).catch((err) => {
        console.log(err)
        return err
      })
    }
  },
  deleteFileListImage: async (filelist) => {
    return new Promise((resolve, reject) => {
      const path = `src/public/images/`;
      fs.mkdirSync(path, { recursive: true })
      try {
        Promise.all(filelist.map(image => {
          return rimraf(path+image.split('/').at(-1))
        })).then((result) => {
          return resolve({
            status: 200,
            data: result
          })
        }).catch(err => {
          return reject({
            status: 500,
            message: "INTERNAL SERVER ERROR"
          })
        })
      } catch (error) {
        return reject({
          status: 500,
          message: "INTERNAL SERVER ERROR"
        })
      }
    })
  },
  deleteFileListProof: async (filelist) => {
    return new Promise((resolve, reject) => {
      const path = `src/public/proof/`;
      fs.mkdirSync(path, { recursive: true })
      try {
        Promise.all(filelist.map(image => {
          return rimraf(path+image.split('/').at(-1))
        })).then((result) => {
          return resolve({
            status: 200,
            data: result
          })
        }).catch(err => {
          return reject({
            status: 500,
            message: "INTERNAL SERVER ERROR"
          })
        })
      } catch (error) {
        return reject({
          status: 500,
          message: "INTERNAL SERVER ERROR"
        })
      }
    })
  }
}