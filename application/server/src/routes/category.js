const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

// ~ GET all categories
router.get('/getAll', (req, res, next) => {
  Category.findAll()
    .then((categories) => {
      res.send(JSON.stringify(categories))
    })
    .catch((e) => console.error(e))
})

module.exports = router
