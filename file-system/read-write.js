const fs = require("fs")
const readPath = './data/bands.json'
const writePath = readPath
var bands = {}

fs.readFile(readPath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err.message)
    } else {
        try {
            bands = JSON.parse(data)
            console.log(bands)
        } catch (err) {
            console.error(err.message)
        }
    }
})
const write = data => fs.writeFile(writePath, data, (err) => {
    if (err) {
        console.error(err.message)
    } else {
        console.log({write: "success"})
    }
})

module.exports = write