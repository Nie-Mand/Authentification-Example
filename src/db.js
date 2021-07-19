const fs = require('fs')
const fileName = __dirname + '/db.json'

const get = () => JSON.parse(fs.readFileSync(fileName))

const getOne = u => get().users.find(({ username }) => username === u)

const add = data => {
    const oldData = get().users
    const newData = { users: [...oldData, data] }
    fs.writeFileSync(fileName, JSON.stringify(newData, null, 2), e => { throw new Error(e) })
}

module.exports = {
    get, 
    add,
    getOne
}
