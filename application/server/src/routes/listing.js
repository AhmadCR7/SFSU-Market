const express = require('express')
const { getListings } = require('../controllers/listing')
const router = express.Router()

// ~ GET all categories
router.get('/getListings', getListings)

module.exports = router
