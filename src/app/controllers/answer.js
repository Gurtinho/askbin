const Question = require('../models/questionModel')
const Answer = require('../models/answerModel')

module.exports = {
    async questAnswer(req, res) {
        const id = req.params.id

        const showQuest = await Question.showQuestion(id)
        const quest = showQuest.rows[0]

        return res.render('answer', { quest })
    },

    async saveAnswer(req, res) {
        const keys = Object.keys(req.body)

        for ( let key of keys ) {
            if (req.body[key] == '') {
                return res.redirect('/')
            }
        }

        await Answer.saveAnswer(req.body)

        return res.redirect(`/questions/${req.body.id}`)
    }
}