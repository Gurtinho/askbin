const quest = require('../database/database')
const questModel = require('../database/Question')
const answerModel = require('../database/Answer')

// get /
exports.index = (req, res) => {
    questModel.findAll({ raw: true, order: [
        [ 'createdAt', 'DESC' ] // DESC = decrescente
    ] }).then((quest) => {
        return res.render('index', {
            quest: quest
        })
    })
}

// get page question
exports.question = (req, res) => {
    return res.render('question')
}

// save questions
exports.savequest = (req, res) => {
    const keys = Object.keys(req.body)

    for ( key of keys ) {
        if (req.body[key] == '') {
            return res.redirect('/question')
        }
    }
    quest.create({
        title: req.body.title,
        question: req.body.question
    }).then(() => {
        return res.redirect('/')
    })
}

// get questions and answers
exports.questionId = (req, res) => {
    const id = req.params.id
    questModel.findOne({
        where: { id: id }
    }).then((quest) => {
        if (quest != undefined) {

            answerModel.findAll({
                where: { answerId: quest.id },
                order: [[ 'createdAt', 'DESC' ]]
            }).then((answers) => {
                res.render('questions', {
                    quest: quest,
                    answers: answers
                })
            })
        } else {
            return res.render('/')
        }
    })
}



