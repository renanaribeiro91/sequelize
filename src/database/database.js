const Sequelize = require('sequelize')
const dbConfig = require ('../config_database/database')

const connection = new Sequelize(dbConfig)

module.exports = connection