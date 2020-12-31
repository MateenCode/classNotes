const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: String,
    img: String,
    price: Number,
    qty: {type:Number, min: 0}
}, {timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;