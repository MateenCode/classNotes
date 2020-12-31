const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT /*incease undefined*/ || 3003;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

app.get('/awesome', (req, res) => {
   
    res.send(`
        <h1> Plants are awesome </h1>
        <p> Sike I  hate plants </p>
    `);
});

app.get('/:indexOfPlantsArray', (req, res) => {
    console.log(req.params);
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/hello/:firstname/:lastname', (req, res) => {
    // console.log(req);
    res.send(`hello ${req.params.firstname} ${req.params.lastname}`)
});

// ?someKey=someValue////
app.get('/howdy/:firstName', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`hello ${req.query.title} ${req.params.firstName}`);
  });



app.listen(port,() => {
    console.log('listening on port' , port);
});