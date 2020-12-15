'use strict'

var _require = require('sequelize'),
  DataTypes = _require.DataTypes // We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.

module.exports = function (sequelize) {
  sequelize.define('messages', {
    //*********************************What columns to put here?!
    //******************************Where do I connect this to/call from? */
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  })
}
