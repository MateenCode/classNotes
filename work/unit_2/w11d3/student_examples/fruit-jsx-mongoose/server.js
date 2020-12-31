//dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js')
// Middleware///

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}));
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());

//mongoose connection//
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo')
})

//index route
app.get('/fruits', (req, res)=> {
    Fruit.find({}, (err, allFruit)=> {
        res.render('Index', {fruits: allFruit})
    })
})


//new route
app.get('/fruits/new', (req,res) => {
    res.render('New')
})

//create route
app.post('/fruits/', (req, res) => {
    req.body.readyToEat === 'on'? req.body.readyToEat = true : req.body.readyToEat = false;
    Fruit.create(req.body, (err, fruit)=> {
        //once created - respond to client
        res.redirect('/fruits')
    })
})
//seed route
// app.get('/fruits/seed', (req, res)=>{
//     Fruit.create([
//         {
//             name:'grapefruit',
//             color:'pink',
//             readyToEat:true
//         },
//         {
//             name:'grape',
//             color:'purple',
//             readyToEat:false
//         },
//         {
//             name:'avocado',
//             color:'green',
//             readyToEat:true
//         }
//     ], (err, data)=>{
//         res.redirect('/fruits');
//     })
// });

// show route

app.get('/fruits/:id', (req, res)=> {
    //find specific document
    Fruit.findById(req.params.id, (err, foundFruit)=> {
        //render the Show route and pass it the foundFruit
        res.render('Show', {fruit: foundFruit})

    })
})



// listen
app.listen(3000, ()=>{
    console.log('listening');
});