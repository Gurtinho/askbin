const sequelize = require('sequelize')
const connection = require('./database')

const response = connection.define('answers', {
    answer: {
        type: sequelize.TEXT,
        allowNull: false
    },
    answerId: {
        type: sequelize.INTEGER,
        allowNull: false
    }
})

response.sync({ force: false })

module.exports = response