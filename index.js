const express = require('express')
const { json } = require('body-parser')
const { authentificate, login, signup } = require('./src')
const { get } = require('./src/db')

const app = express()

app.use(json())

app.get('/', (_, res) => res.send('hello world'))
app.post('/login', login)
app.post('/signup', signup)
app.get('/data', authentificate, (_, res) => res.send(
    '<pre>' + JSON.stringify({ label: 'Secret Room', data: get() }, null, 2) + '</pre>'
))

app.listen(8000, () => console.log('Server Running..'))