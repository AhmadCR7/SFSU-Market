// load either dev or prod env file
import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// 3rd party imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import AWS from 'aws-sdk'

// my imports
import indexRouter from './routes/index'
import categoryRouter from './routes/category'
import listingRouter from './routes/listing'
import { createNewConnection } from './database/connectTypeorm'

const main = async () => {
  const app = express()

  // ~ initial config
  app.use(express.static(path.join(__dirname, '../../client/build')))

  // ~ CORS
  app.use(cors())

  // ~ AWS setup
  const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

  // ~ create connection to DB
  createNewConnection()

  // ~ ROUTES
  app.use('/api', indexRouter)
  app.use('/api/category', categoryRouter)
  app.use('/api/listing', listingRouter)

  // all other routes, serve frontend
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'build', 'index.html'))
  })

  // ~ LAUNCH
  app.listen(process.env.PORT, () => {
    console.log(`server started on http://localhost:${process.env.PORT}`)
  })
}

main().catch((err) => {
  console.error(err)
})
