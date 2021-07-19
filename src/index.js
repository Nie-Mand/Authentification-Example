const login = require('./login')
const signup = require('./signup')
const { verify } = require('./jwt')


const authentificate = (req, res, next) => {
    const { token } = req.headers
    const data = verify(token)
    if (data) {
        console.log({ data })
        next()
    }
    else return res.status(401).end()
}

module.exports = {
    authentificate,
    login,
    signup
}