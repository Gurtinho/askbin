const sequelize = require('sequelize')
const connection = require('./database')

const quest = connection.define('questions', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    question: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

quest.sync({ force: false }).then(() => { })

module.exports = quest