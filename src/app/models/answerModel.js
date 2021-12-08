const postgre = require('../../config/postgre')

module.exports = {
    saveAnswer(params) {
        let { id, answer } = params
        const query = `
            INSERT INTO answers (
                question_id,
                answer
            ) VALUES ( $1, $2 )
            RETURNING id
        `
        const values = [
            id,
            answer
        ]

        return postgre.query(query, values)
    },

    showAnswer(id) {
        const total = `(SELECT count(*) FROM answers WHERE answers.question_id = ${id}) AS total`

        const query = `
            SELECT answers.*, ${total}
            FROM answers
            LEFT JOIN questions ON (answers.question_id = questions.id)
            WHERE questions.id = $1
            ORDER BY created_at DESC
        `
        return postgre.query(query, [id])
    }
}