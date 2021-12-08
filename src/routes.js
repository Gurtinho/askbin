const express = require('express')
const routes = express.Router()

const question = require('./app/controllers/question')
const answer = require('./app/controllers/answer')
const search = require('./app/controllers/search')

// questions
routes.get('/', question.index)
routes.get('/question', question.question)
routes.post('/question', question.savequestion)
routes.get('/questions/:id', question.showQuestion)

// answers
routes.get('/answer/:id', answer.answerId)
routes.post('/answer', answer.saveanswer)

// search questions


// error
routes.use((req, res) => {
    return res.status(404).render('error')
})

module.exports = routes
