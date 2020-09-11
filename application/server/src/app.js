// 3rd party imports
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index'

const app = express()

// initial config
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../../client/build')))

// routes
app.use('/api', indexRouter)

// server frontend app
app.use((req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../', '../', 'client', 'build', 'index.html')
  )
})

export default app
