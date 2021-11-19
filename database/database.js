const sequelize = require('sequelize')
const connection = new sequelize('askbin', 'root', '311200', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection