const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    bandMembers: {
        type: [String],
        required: false
    }
})

const Band = mongoose.model('band', BandSchema)

module.exports = Band
