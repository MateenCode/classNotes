const mongoose = require('../db/connection')

const DogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    frequency: String,
    imageUrl: String
})

mongoose.model('Dog', DogSchema)

module.exports = mongoose