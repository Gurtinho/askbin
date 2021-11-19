const express = require('express')
const routes = express.Router()
const question = require('./controllers/question')
const answer = require('./controllers/answer')

// rotas
routes.get('/', question.index)
routes.get('/question', question.question)
routes.post('/savequest', question.savequest)
routes.get('/questions/:id', question.questionId)
routes.get('/answer/:id', answer.answerId)
routes.post('/saveanswer', answer.saveanswer)

// error
routes.use((req, res) => {
    return res.status(404).render('error')
})

module.exports = routes
