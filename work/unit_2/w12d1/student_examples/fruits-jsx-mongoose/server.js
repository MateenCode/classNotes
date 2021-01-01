// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// mongoose connection
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})


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


// seed
// app.get('/fruits/seed', (req, res) => {
//     Fruit.create([
//         {
//             name: 'grapefruit',
//             color: 'pink',
//             readyToEat: true
//         },
//         {
//             name: 'grape',
//             color: 'purple',
//             readyToEat: false
//         },
//         {
//             name: 'avocado',
//             color: 'green',
//             readyToEat: true
//         }
//     ], (err, data) => {
//         res.redirect('/fruits');
//     })
// });

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


// listen
app.listen(3000, () => {
    console.log('listening on: ' + 3000);
});