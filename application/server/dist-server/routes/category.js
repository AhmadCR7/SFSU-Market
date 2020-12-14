"use strict";

var express = require('express');

var _require = require('../controllers/category'),
    getAllCategories = _require.getAllCategories;

var router = express.Router(); // ~ GET all categories

router.get('/getAll', getAllCategories);
module.exports = router;