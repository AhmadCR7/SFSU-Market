import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import multer from 'multer'
import { s3 } from '../../utils/aws'
import multerS3 from 'multer-s3'
import { v4 } from 'uuid'

// const uploadS3 = multer({
//   storage: multerS3({
//     s3: s3,
//     acl: 'public-read',
//     bucket: '648-group3-bucket',
//     metadata: (req, file, callBack) => {
//       callBack(null, { fieldName: file.fieldname })
//     },
//     key: (req, file, callBack) => {
//       const fullPath = 'listings/' + file.originalname
//       callBack(null, fullPath)
//     },
//   }),
//   limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
// }).array('photos', 3)

export const uploadImages = async (req: Request, res: Response) => {
  // typeorm connection
  const connection = getConnection()

  const params = [],
    imageData = []

  // make sure required body data is present
  if (!req.body || !req.body.images) {
    res.status(400)
    return res.send({
      images: [],
      errors: [{ title: 'upload images', message: 'incorrect parameters given' }],
    })
  }

  // create params for each img upload
  req.body.images.forEach((img) => {
    const dataBuffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ''), 'base64')
    params.push({
      Bucket: '648-group3-bucket',
      Key: v4(),
      Body: dataBuffer,
      ACL: 'public-read',
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg',
    })
  })

  const uploadPromises = []

  req.body.images.forEach(async (i, index) => {
    try {
      const uploadPromise = s3.upload(params[index]).promise()
      uploadPromises.push(uploadPromise)
      // imageData.push({
      //   url: Location,
      //   name: Key,
      // })
    } catch (e) {
      res.status(500)
      return res.send({
        images: [],
        errors: [{ title: 'upload images', message: 'error uploading images' }],
      })
    }
  })

  Promise.all(uploadPromises).then((promiseData) => {
    promiseData.forEach((d) => {
      imageData.push({
        url: d.Location,
        name: d.Key,
      })
    })
    res.send({
      images: imageData,
      errors: [],
    })
  })
}
