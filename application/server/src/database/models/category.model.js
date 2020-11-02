const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('category', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('NOW()')
		}
	}, {
		timestamps: true,
		updatedAt: false
	});
};