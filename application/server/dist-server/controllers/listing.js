"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListings = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../database/connectDb'),
    models = _require.models;

var Sequelize = require('sequelize');

var backupListings;

var getListings = function getListings(req, res) {
  var category = req.query.category; // hold some listings as backup in case of no results (always show user something)

  if (!backupListings) {
    models.listing.findAll({
      limit: 10
    }).then(function (listings) {
      backupListings = listings;
    })["catch"](function (e) {
      return console.error('Error getting backupListings.');
    });
  } // search with a query


  if (req.query.searchQuery) {
    var search = req.query.searchQuery; // search with JUST a query.

    if (category === 'all') {
      models.listing.findAll({
        where: {
          title: _defineProperty({}, Sequelize.Op.substring, search)
        }
      }).then(function (listings) {
        checkIfBackupNeededAndSendListings(backupListings, listings, res);
      })["catch"](function (e) {
        sendErrorArray("Error finding listings with the search parameter of: ".concat(search), res);
      });
      return;
    }

    var categoryId; // search with query and category selected

    models.category.findOne({
      where: {
        name: category
      }
    }).then(function (category) {
      categoryId = category.id;
      return models.listing.findAll({
        where: {
          title: _defineProperty({}, Sequelize.Op.substring, req.query.searchQuery),
          categoryId: categoryId
        }
      });
    }).then(function (listings) {
      checkIfBackupNeededAndSendListings(backupListings, listings, res);
    })["catch"](function (e) {
      sendErrorArray('Error fetching listing of specified category', res);
    });
    return;
  } // search with just a category


  if (category === 'all') {
    models.listing.findAll().then(function (listings) {
      res.send({
        data: listings,
        errors: null
      });
    })["catch"](function (e) {
      sendErrorArray('Error fetching all listings', res);
    });
    return;
  } else {
    models.category.findOne({
      where: {
        name: category
      }
    }).then(function (category) {
      return category.id;
    }).then(function (categoryId) {
      return models.listing.findAll({
        where: {
          categoryId: categoryId
        }
      });
    }).then(function (listings) {
      checkIfBackupNeededAndSendListings(backupListings, listings, res);
    })["catch"](function (e) {
      sendErrorArray("Error fetching all listings of category: ".concat(category), res);
    });
    return;
  }
};

exports.getListings = getListings;

var checkIfBackupNeededAndSendListings = function checkIfBackupNeededAndSendListings(backupListings, listings, res) {
  if (listings.length === 0) {
    res.send({
      data: backupListings,
      errors: null
    });
  } else {
    res.send({
      data: listings,
      errors: null
    });
  }
};

var sendErrorArray = function sendErrorArray(errorString, res) {
  res.send({
    data: [],
    errors: [errorString]
  });
};