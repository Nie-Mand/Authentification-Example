const bcrypt = require('bcrypt')


const generate = async password => await bcrypt.hash(password, 10)

const check = async (password, given) => await bcrypt.compare(given, password)

module.exports = {
    generate,
    check
}