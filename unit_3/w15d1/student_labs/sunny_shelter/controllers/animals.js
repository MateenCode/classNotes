const express = require('express');
const router = express.Router();

// model

const Animals = require('../models/animals');

//index route//

router.get('/', (req,res) => {
    Animals .find({}, (err, foundAnimals) => {
        res.json(foundAnimals);
    })
})

//post//

router.post('/', (req,res) => {
    Animals.create(req.body, (err, adoptedAnimals) => {
        res.json(adoptedAnimals) //.json() will send proper headers in response so client knows it's json coming back
    })
})

//delete route
router.delete('/:id', (req,res) => {
    Animals.findByIdAndRemove(req.params.id, (err, data) => {
        res.json(data)
    })
})

module.exports = router;