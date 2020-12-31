const mongoose = require('mongoose');
const Schema = mongoose.Schema

// create Schema
const fruitSchema = new Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
}, {timestamps: true})

// Create Model from our Schema

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;