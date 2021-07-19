const { getOne } = require('./db')
const { check, generate } = require('./password')
const { sign } = require('./jwt')

const login = async (req, res) => {
    const { body: { username, password } } = req
    if (!username || !password) return res.status(400).end()

    const user = getOne(username)
    if (!user) return res.status(401).end()
    const isIt = await check(user.password, password)
    if (!isIt) return res.status(401).end()
    
    const { username: _, password: __, ...extras } = user
    return res.json({ token: sign(extras) })
}

module.exports = login