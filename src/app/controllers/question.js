
module.exports = {
    index(req, res) {
        return res.render('index')
    },

    question(req, res) {
        return res.render('question')
    },

    savequest(req, res) {
        const keys = Object.keys(req.body)

        for ( let key of keys ) {
            if (req.body[key] == '') {
                return res.redirect('/question')
            }
        }
    },

    questionId(req, res) {
        const id = req.params.id
    },
}



