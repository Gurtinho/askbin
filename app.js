const express = require('express')
const app = express()
const routes = require('./routes')
const connection = require('./database/database')

// database
connection.authenticate().then(() => {
    console.log('connection success')
}).catch((error) => {
    console.log(error)
})

// midlewares
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

// server listen
app.listen(8080)