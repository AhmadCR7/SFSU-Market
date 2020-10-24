const express = require('express')
const { getAllCategories } = require('../controllers/category')
const router = express.Router()

// ~ GET all categories
router.get('/getAll', getAllCategories)

module.exports = router
