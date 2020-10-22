// load either dev or prod env file
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

// 3rd party imports
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

// my imports
const sequelize = require('./database/connectDb.js')
const indexRouter = require('./routes/index')
const categoryRouter = require('./routes/category')
const listingRouter = require('./routes/listing')

const app = express()

// initial config
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../../client/build')))

// test db connection
sequelize.authenticate()
  .then(() => console.log(`connected to database`))
  .catch((e) => console.error(e))

// ~ ROUTES
app.use('/api', indexRouter)
app.use('/api/category', categoryRouter)
app.use('/api/listing', listingRouter)

// server frontend app
app.use((req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../', '../', 'client', 'build', 'index.html')
  )
})

module.exports = app
