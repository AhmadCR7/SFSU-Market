const Sequelize = require('sequelize')

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'mysql',
    dialectOptions:
      process.env.NODE_ENV === 'development'
        ? {
            ssl: 'Amazon RDS',
          }
        : null,
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: 'en',
  }
)
