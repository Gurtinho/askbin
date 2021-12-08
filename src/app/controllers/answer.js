
module.exports = {
    answerId(req, res) {
        const id = req.params.id
    },

    saveanswer(req, res) {
        const keys = Object.keys(req.body)
        const id = req.body.id

        for ( let key of keys ) {
            if (req.body[key] == '') {
                return res.redirect('/')
            }
        }
    }
}