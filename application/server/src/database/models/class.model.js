const { DataTypes } = require('sequelize')

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define('class', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    major: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    number: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
			allowNull: true,
			type: DataTypes.DATE,
		}
  })
}
