const mongoose = require('../models/Dog')
const data = require('./data')

const Dog = mongoose.model('Dog')

Dog.remove({})
    .then(_ => {
        Dog.collection.insert(data)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })