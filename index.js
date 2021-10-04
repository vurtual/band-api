const express = require('express')
const PORT = 4001
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const write = require('./file-system/read-write')
const req = require('./routes/req')

const app = express()

//middle-ware
app.use(bodyParser.json())
app.use('/', require('./routes/api'))
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(422).send({ error: err.message })
})

mongoose.connect('mongodb://localhost/myapi')
mongoose.Promise = global.Promise

app.listen(process.env.port || PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

req(PORT)

module.exports = PORT
