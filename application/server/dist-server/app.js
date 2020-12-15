'use strict'

// load either dev or prod env file
require('dotenv').config({
  path: '.env.'.concat(process.env.NODE_ENV),
}) // 3rd party imports

var express = require('express')

var path = require('path')

var cookieParser = require('cookie-parser')

var logger = require('morgan') // my imports

var sequelize = require('./database/connectDb.js')

var indexRouter = require('./routes/index')

var categoryRouter = require('./routes/category')

var listingRouter = require('./routes/listing')
var messageRouter = require('./routes/messages')

var app = express() // initial config

app.use(logger('dev'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(cookieParser())
app.use(express['static'](path.join(__dirname, '../../client/build'))) // test db connection

sequelize
  .authenticate()
  .then(function () {
    return console.log('connected to database')
  })
  ['catch'](function (e) {
    return console.error(e)
  }) // ~ ROUTES

app.use('/api', indexRouter)
app.use('/api/category', categoryRouter)
app.use('/api/listing', listingRouter) // server frontend app
app.use('/api/messages/', messagesRouter) //Is this correct???!?!?!

app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'build', 'index.html'))
})
module.exports = app
