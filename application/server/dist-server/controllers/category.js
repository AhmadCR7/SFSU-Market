"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCategories = void 0;

var _require = require('../database/connectDb'),
    models = _require.models;

var getAllCategories = function getAllCategories(req, res) {
  models.category.findAll({
    attributes: ['id', 'name']
  }).then(function (categories) {
    res.send({
      data: categories,
      errors: null
    });
  })["catch"](function (e) {
    res.send({
      data: null,
      errors: ['Error fetching all categories']
    });
  });
};

exports.getAllCategories = getAllCategories;