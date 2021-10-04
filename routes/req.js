const request = require("request")
const write = require('../file-system/read-write')

const req = (PORT) => {
    request(`http://localhost:${PORT}`, (err, res, body) => {
        if (err) {
            console.error(err)
        } else {
            write(JSON.stringify(body, null, 4))
        }
    })
}

module.exports = req