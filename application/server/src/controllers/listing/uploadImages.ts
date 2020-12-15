import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { s3 } from '../../utils/aws'
import { v4 } from 'uuid'

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
      errors: [{ field: 'all', message: 'incorrect parameters given' }],
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
    } catch (e) {
      res.status(500)
      return res.send({
        images: [],
        errors: [{ field: 'all', message: 'error uploading images' }],
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
