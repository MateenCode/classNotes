const express = require('express');
const router = express.Router();

// model

const Todos = require('../models/todos');

//index route//

router.get('/', (req,res) => {
    Todos.find({}, (err, foundTodos) => {
        res.json(foundTodos);
    })
})

//post//

router.post('/', (req,res) => {
    Todos.create(req.body, (err, createdTodo) => {
        res.json(createdTodo) //.json() will send proper headers in response so client knows it's json coming back
    })
})

//delete route
router.delete('/:id', (req,res) => {
    Todos.findByIdAndRemove(req.params.id, (err, data) => {
        res.json(data)
    })
})

module.exports = router;