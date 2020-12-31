const express = require('express')
const router = express.Router()

const mongoose = require('../models/Dog')
const Dog = mongoose.model('Dog')

router.get('/', (req, res) => {
    Dog.find({})
        .then(dogs => res.json(dogs))
})

module.exports = router