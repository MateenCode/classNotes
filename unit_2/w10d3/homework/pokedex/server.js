const express = require("express");
const app = express();
const methodOverride = require('method-override');

// import data
const pokemon = require('./models/pokemon.js');


// middleware
app.use(express.urlencoded({ extended: false })); //give access to req. body
app.set('view engine', 'jsx'); // tells express what type of file to look for in views
app.engine('jsx', require('express-react-views').createEngine()); // telling express how to compile our jsx
app.use(express.static('public')); // server any file in public as a static file
app.use(methodOverride('_method'))

// index route
app.get('/pokemon', (req, res) => {
    res.render('Index', { title: "Pokedex ", pokemon: pokemon });
});

// new route
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

// show route
app.get('/pokemon/:showPokemon', (req, res) => {
    res.render('Show', { pokemon: pokemon[req.params.showPokemon] });
});

//edit///
app.get('/pokemon/:showPokemon/edit', function(req, res){
	res.render(
		'Edit', //render views/edit.ejs
		{ //pass in an object that contains
			pokemon: pokemon[req.params.showPokemon], //the pokemon object
			index: req.params.showPokemon //... and its index in the array
		}
	);
});

//Create route
app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
});

// /delete route 
app.delete('/pokemon/:showPokemon', (req, res) => {
	pokemon.splice(req.params.showPokemon, 1); //remove the item from the array
	res.redirect('/pokemon');  //redirect back to index route
});

//update route//

app.put('/pokemon/:showPokemon', (req, res) => {
    pokemon[req.params.showPokemon].name = req.body.name 
    pokemon[req.params.showPokemon].stats = {...pokemon[req.params.showPokemon].stats, ...req.body}
    delete pokemon[req.params.showPokemon].stats.name 
    res.redirect('/pokemon')
})




app.listen(3000, () => {
    console.log('running on port 3000');
});