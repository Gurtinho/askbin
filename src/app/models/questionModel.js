const postgre = require('../../config/postgre')

module.exports = {
    index() {
        const total = `(SELECT count(*) FROM answers WHERE answers.question_id = questions.id) AS total`

        const query = `
            SELECT *,
            ${total}
            FROM questions
            ORDER BY created_at DESC
        `
        return postgre.query(query)
    },
    
    create(params) {
        const query = `
            INSERT INTO questions (
                title,
                question
            ) VALUES ( $1, $2 )
            RETURNING id
        `

        const values = [
            params.title,
            params.question
        ]

        return postgre.query(query, values)
    },

    showQuestion(id) {
        const query = `
            SELECT questions.*
            FROM questions
            WHERE id = $1
        `
        return postgre.query(query, [id])
    }
}