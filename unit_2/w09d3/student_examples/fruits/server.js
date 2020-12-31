const express = require('express')
const app = express();

const port = 3000;

// import data////
// controllers////
const fruits = require('./models/fruits.js');

// middleware///
app.use(express.urlencoded({extended: false})); // to get info from body of a post request
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public')); 

// sample data////

// index route///
app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('Index', {title: 'My Fruits Page', fruits}) //rendering my views

});

// new post create route///

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else{
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    // console.log(req.body);
    res.redirect('/fruits');
})

// new route/////
app.get('/fruits/new', (req, res) => {
    res.render('New');

})

// create a show route////
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('Show',{fruit: fruits[req.params.indexOfFruitsArray]});
})


app.listen(port, () => [
    console.log('running on port', port)
])