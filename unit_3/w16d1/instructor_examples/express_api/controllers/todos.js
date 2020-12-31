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


//http://localhost:3000/todos/58f79d490708714536c02474
router.delete('/:id', (req, res) => {
    Todos.findByIdAndDelete(req.params.id, (err, data) => {
        res.json(data)
    })
})


router.put('/:id', (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, req.body, (err, updatedToDo) => {
        res.json(updatedToDo);
    })
})


module.exports = router;