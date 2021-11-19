const questModel = require('../database/Question')
const answerModel = require('../database/Answer')

// get page id
exports.answerId = (req, res) => {
    const id = req.params.id
    questModel.findOne({
        where: { id: id }
    }).then((quest) => {
        if (quest != undefined) {
            return res.render('answer', {
                quest: quest
            })
        } else {
            return res.render('/')
        }
    })
}

// save answers 
exports.saveanswer = (req, res) => {
    const keys = Object.keys(req.body)
    const id = req.body.id

    for ( key of keys ) {
        if (req.body[key] == '') {
            return res.redirect('/')
        }
    }

    answerModel.create({
        answer: req.body.answer,
        answerId: id
    }).then(() => {
        return res.redirect('/questions/' + id)
    })
}