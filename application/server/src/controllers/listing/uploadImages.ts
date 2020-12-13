import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import multer from 'multer'
import { s3 } from '../../utils/aws'
import multerS3 from 'multer-s3'

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

  console.log(req.body)
  res.send('cool')
}
