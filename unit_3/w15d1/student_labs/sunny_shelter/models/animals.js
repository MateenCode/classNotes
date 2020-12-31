const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    name: String,
    species: String,
    breed: String,
    sex: String,
    image: String,
    age: Number,
    adopted: Boolean
})

const Animals = mongoose.model('Animals', animalSchema)

module.exports = Animals;


