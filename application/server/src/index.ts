// load either dev or prod env file
import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// 3rd party imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import AWS from 'aws-sdk'
import session, { SessionOptions } from 'express-session'
import bodyParser from 'body-parser'

// my imports
import indexRouter from './routes/index'
import listingRouter from './routes/listing'
import messageRouter from './routes/message'
import authRouter from './routes/auth'
import classRouter from './routes/class'
import categoryRouter from './routes/category'
import { createNewConnection } from './database/connectTypeorm'
import { sessionConfig } from './utils/sessionAndRedisConfig'

const main = async () => {
  const app = express()

  // ~ initial config
  app.use(express.static(path.join(__dirname, '../../client/build')))

  // ~ CORS
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  )

  // ~ required middlewares
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  // ~ AWS setup
  const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

  // ~ create connection to DB
  createNewConnection()

  // ~ Redis setup
  app.use(session(sessionConfig as SessionOptions))

  // ~ ROUTES
  app.use('/api', indexRouter)
  app.use('/api/listing', listingRouter)
  app.use('/api/auth', authRouter)
  app.use('/api/message', messageRouter)
  app.use('/api/class', classRouter)
  app.use('/api/category', categoryRouter)

  // all other routes, serve frontend from client folder
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'build', 'index.html'))
  })

  // ~ LAUNCH
  app.listen(process.env.PORT, () => {
    console.log(`server started on http://localhost:${process.env.PORT} 🚀`)
  })
}

main().catch((err) => {
  console.error(err)
})
