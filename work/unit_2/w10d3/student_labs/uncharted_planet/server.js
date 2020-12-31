const express = require("express");
const app = express();

let scientist = [];

app.use(express.urlencoded({ extended: false })); //give access to req. body
app.set('view engine', 'jsx'); // tells express what type of file to look for in views
app.engine('jsx', require('express-react-views').createEngine()); // telling express how to compile our jsx
app.use(express.static('public')); // server any file in public as a static file
// app.use(methodOverride('_method'))

// index route
app.get('/scientist', (req, res) => {
    // res.send('index');
    res.render('Index', scientist);
});

// new route
app.get('/scientist/new', (req, res) => {
    res.render('New');
});

// create
app.post('/scientist', (req, res) => {
    scientist.push(req.body);
    console.log(scientist);
    // res.send('data data')
    res.redirect('/scientist');
});





app.listen(3000, () => {
    console.log('running on port 3000');
});