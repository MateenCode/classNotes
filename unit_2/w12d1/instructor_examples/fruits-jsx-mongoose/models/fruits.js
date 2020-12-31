const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const fruitSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Fruit = mongoose.model('Fruit', fruitSchema);

// Export Fruit Model
module.exports = Fruit;
