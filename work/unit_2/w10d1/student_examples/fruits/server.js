const express = require("express");
const app = express();

// import data
const fruits = require('./models/fruits.js');

// middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// index route
app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('Index', { title: "My Fruits Page" });
});

// show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', { fruit: fruits[req.params.indexOfFruitsArray] });
});

app.listen(3000, () => {
    console.log('running on port 3000');
});

