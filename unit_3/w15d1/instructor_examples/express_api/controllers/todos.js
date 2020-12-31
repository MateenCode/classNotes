const express = require('express');
const router = express.Router();

// Model
const Todos = require('../models/todos.js');

router.get('/', (req, res) => {
    Todos.find({}, (err, foundTodos) => {
        res.json(foundTodos);
    });
});

router.post('/', (req, res) => {
    Todos.create(req.body, (err, createTodo) => {
        res.json(createTodo);
    })
});


module.exports = router;