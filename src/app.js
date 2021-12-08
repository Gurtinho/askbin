const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)

app.set('view engine', 'njk')
nunjucks.configure("src/app/views", {
    express: app,
    autoescape: false,
    noCache: true
})

app.listen(8080)