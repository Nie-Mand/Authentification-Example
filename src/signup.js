const { add } = require('./db')
const { generate } = require('./password')
const { sign } = require('./jwt')

const signup = async (req, res) => {
    const { body: { username, password, ...extras } } = req
    if (!username || !password) return res.status(400).end()

    // dont add if already existed
    add({ username, password: await generate(password), ...extras })

    return res.json({ token: sign(extras) })
}

module.exports = signup