const jwt = require('jsonwebtoken')

const secret = '6966688420'

const sign = payload => jwt.sign(payload, secret, { expiresIn: 30 })

const verify = token => {
    let data = null
    try { data = jwt.verify(token, secret) } 
    catch { data = null }
    return data
}

module.exports = {
    sign,
    verify
}