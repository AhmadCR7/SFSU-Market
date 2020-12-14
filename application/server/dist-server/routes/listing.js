"use strict";

var express = require('express');

var _require = require('../controllers/listing'),
    getListings = _require.getListings;

var router = express.Router(); // ~ GET all categories

router.get('/getListings', getListings);
module.exports = router;