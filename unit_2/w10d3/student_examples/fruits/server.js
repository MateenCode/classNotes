const express = require("express");
const app = express();
const methodOverride = require('method-override')

// import data
const fruits = require('./models/fruits.js');

// middleware
app.use(express.urlencoded({ extended: false })); //give access to req. body
app.set('view engine', 'jsx'); // tells express what type of file to look for in views
app.engine('jsx', require('express-react-views').createEngine()); // telling express how to compile our jsx
app.use(express.static('public')); // server any file in public as a static file
app.use(methodOverride('_method'))

/************ Presentational Routes
 * INDEX: SHOW A LIST OF ALL OF OUR RESOURCES
 * DELETE
 * SHOW: SHOWS ONE INDIVIDUAL RESOURCE FROM OUR LIST
 * NEW: SHOWS TO CREAT A NEW  RESOURCSE LINK TO CREATE
 * EDIT: SHOWS A FORM TO UPDATE A RESOURCE TO LINKED TO UPDATE ROUTE
 *************/

// index route
app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('Index', { title: "My Fruits Page", fruits });
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
// edit route

app.get('/fruits/:indexOfFruitsArray/edit', function(req, res){
	res.render(
		'Edit', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: fruits[req.params.indexOfFruitsArray], //the fruit object
			index: req.params.indexOfFruitsArray //... and its index in the array
		}
	);
});

/**
  * Functional Routes
  * create: creates a new resource POST
  * Destroy: deletes a resource DELETE
  * Update: updates a resource PUT
  */

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




// /delete route 
app.delete('/fruits/:indexOfFruitsArray', (req, res) => {
	fruits.splice(req.params.indexOfFruitsArray, 1); //remove the item from the array
	res.redirect('/fruits');  //redirect back to index route
});

app.put('/fruits/:indexOfFruitsArray', (req, res) => {  //: indexoffruitsarray is the index of our fruits array that we want to change
    if(req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to on
        req.body.readyToEat = true
    } else { //if not checked req.body.readttoeat is undefined
        req.body.readyToEat = false
    }
    fruits[req.params.indexOfFruitsArray] = req.body; //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
    res.redirect('/fruits')
})

app.listen(3000, () => {
    console.log('running on port 3000');
});

