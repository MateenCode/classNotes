// dependencies
const express = require('express');
const app = express();
require('./connection');
const Fruit = require('./models/fruits.js');
const methodOverride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));



// routes
// Index
app.get('/fruits', (req, res) => {
    // Use Fruits model to get all Fruits
    Fruit.find({}, (error, allFruits) => {
        res.render('Index', {
            fruits: allFruits
        })
    });

});

// New
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// Create
app.post('/fruits/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // Use Model to create Fruit Document
    Fruit.create(req.body, (error, createdFruit) => {
        // Once created - respond to client
        res.redirect('/fruits');
    });
});


// Show
app.get('/fruits/:id', (req, res) => {
    // Find the specific document
    Fruit.findById(req.params.id, (error, foundFruit) => {
        // render the Show route and pass it the foundFruit
        res.render('Show', {
            fruit: foundFruit
        });
    });
});


// Delete
app.delete('/fruits/:id', (req, res) => {
    // Delete document from collection
    Fruit.findByIdAndRemove(req.params.id, (err, fruit) => {
        res.redirect('/fruits');
    });
});

// Edit 
app.get('/fruits/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Fruit.findById(req.params.id, (err, foundFruit) => {
        // render the edit view and pass it the found fruit
        res.render('Edit', {
            fruit: foundFruit
        })
    });
});

// Put
app.put('/fruits/:id', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false;

    // Update the fruit document using our model
    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/fruits');
    });
});


// listen
app.listen(3000, () => {
    console.log('listening on: ' + 3000);
});