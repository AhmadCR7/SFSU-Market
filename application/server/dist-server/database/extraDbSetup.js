"use strict";

function applyExtraSetup(sequelize) {
  var models = sequelize.models;
  models.listing.hasMany(models.image);
  models.listing.belongsTo(models["class"]);
  models.listing.belongsTo(models.category); // add all missing tables

  sequelize.sync(); // delete all tables and add them again
  // sequelize.sync({force: true})
}

module.exports = {
  applyExtraSetup: applyExtraSetup
};