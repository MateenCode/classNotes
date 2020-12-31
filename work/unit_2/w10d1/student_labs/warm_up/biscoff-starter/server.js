// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              ROUTES
// =======================================
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));

// index route
app.get('/bakedgoods', (req, res) => {
	// res.send(bakedGoods);
	res.render('Index', {title: "My Baked Goods", bakedGoods: bakedGoods})
});
app.post('/bakedgoods', (req, res) => {
    bakedGoods.push(req.body);
    // console.log(req.body);
    res.redirect('/bakedgoods');
})


// new route/////

app.get('/bakedgoods/new', (req, res) => {
    res.render('New');

});

// show route
app.get('/bakedgoods/:id', (req, res) => {
	// res.send(bakedGoods[req.params.id]);
	res.render('Show', {bakedGoods: bakedGoods[req.params.id]});
});







// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
	console.log(`Biscoff Bakery app listening on port: ${port}`);
});
