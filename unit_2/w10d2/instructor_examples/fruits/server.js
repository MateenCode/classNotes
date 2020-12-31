const express = require("express");
const app = express();

// import data
const fruits = require('./models/fruits.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));


// index route
app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('Index', { title: "My Fruits Page", fruits });
});

// create
app.post('/fruits', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

// new route
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', { fruit: fruits[req.params.indexOfFruitsArray] });
});

app.listen(3000, () => {
    console.log('running on port 3000');
});

