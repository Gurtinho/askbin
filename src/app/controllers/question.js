const Question = require('../models/questionModel')
const Answer = require('../models/answerModel')

module.exports = {
    async index(req, res) {
        const questionParams = await Question.index()
        const question = questionParams.rows

        return res.render('index', { question })
    },

    async question(req, res) {
        return res.render('question')
    },

    async saveQuestion(req, res) {
        const keys = Object.keys(req.body)

        for ( let key of keys ) {
            if (req.body[key] == '') {
                return res.redirect('/question')
            }
        }
        await Question.create(req.body)

        return res.redirect('/')
    },

    async showQuestion(req, res) {
        const id = req.params.id

        const showQuest = await Question.showQuestion(id)
        const quest = showQuest.rows[0]

        const showAnswer = await Answer.showAnswer(id)
        const answers = showAnswer.rows

        if (answers[0] != undefined) {
            const total = await answers[0].total

            return res.render(`questions`, { quest, answers, total })
        }
        return res.render(`questions`, { quest, answers })
    },
}



