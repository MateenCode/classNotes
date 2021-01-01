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
	res.send(bakedGoods);
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
	res.send(bakedGoods[req.params.id]);
});


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
	console.log(`Biscoff Bakery app listening on port: ${port}`);
});
