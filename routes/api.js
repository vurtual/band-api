const express = require('express')
const router = express.Router()
const Band = require('../models/band')

router.get('/:id?', (req, res, next) => {
    const id = req.params.id
    const body = req.body
    if (id) {
        Band.findOne({ _id: id }).then(band => {
            res.send(band)
        }).catch(next)

    } else {
        Band.find(body).then(bands => {
            res.send(bands)
        }).catch(next)
    }
})

router.post('/', (req, res, next) => {
    Band.create(req.body).then(band => {
        res.send(band)
    }).catch(next)
})

router.put('/:id', (req, res, next) => {
    Band.findByIdAndUpdate(req.body).then(band => {
        res.send(band)
    }).catch(next)
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    Band.findByIdAndRemove(id).then(() => {
        res.send({id, delete: 'success', data })
    }).catch(next)
})

module.exports = router