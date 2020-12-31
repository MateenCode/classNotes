const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
})

const Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;
