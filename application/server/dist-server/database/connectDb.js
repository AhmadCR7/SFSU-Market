"use strict";

var Sequelize = require('sequelize');

var _require = require('./extraDbSetup'),
    applyExtraSetup = _require.applyExtraSetup;

var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: console.log,
  maxConcurrentQueries: 100,
  dialect: 'mysql',
  dialectOptions: process.env.NODE_ENV === 'development' ? {
    ssl: 'Amazon RDS'
  } : null,
  pool: {
    maxConnections: 5,
    maxIdleTime: 30
  },
  language: 'en'
});
var modelDefiners = [require('./models/category.model'), require('./models/class.model'), require('./models/image.model'), require('./models/listing.model')]; // We define all models according to their files.

for (var _i = 0, _modelDefiners = modelDefiners; _i < _modelDefiners.length; _i++) {
  var modelDefiner = _modelDefiners[_i];
  modelDefiner(sequelize);
} // We execute any extra setup after the models are defined, such as adding associations.


applyExtraSetup(sequelize); // We export the sequelize connection instance to be used around our app.

module.exports = sequelize;