//dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/logs.js')

//// Middle ware///

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
app.get('/logs', (req, res) => {
    // Use Fruits model to get all Fruits
    Log.find({}, (error, allLogs) => {
        res.render('Index', {
            logs: allLogs
        })
    });

});


//new route
app.get('/logs/new', (req,res) => {
    res.render('New')
})

app.post('/logs/', (req, res)=> {
    req.body.shipIsBroken === 'on'? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
    res.redirect('Show')
})


// seed route
// app.get('/logs/seed', (req, res)=>{
//     Log.create([
//         {
//             title:'Titanic',
//             entry:'two',
//             shipIsBroken:true
//         },
//         {
//             title:'spacer',
//             entry:'three',
//             shipIsBroken:false
//         },
//         {
//             title:'battle',
//             entry:'four',
//             shipIsBroken:true
//         }
//     ], (err, data)=>{
//         res.redirect('/logs');
//     })
// });


// listen
app.listen(3000, ()=>{
    console.log('listening');
});