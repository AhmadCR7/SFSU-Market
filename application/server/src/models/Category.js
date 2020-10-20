const Sequelize = require('sequelize')
const db = require('../config/connectDb')

const Category = db.define('category', {
  idcategory: {
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  categoryName: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
  tableName: 'category'
})

module.exports = Category
