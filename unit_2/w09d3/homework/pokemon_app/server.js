const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon.js').map((item)=> {
    const thing = {...item}
    thing.img = thing.img + '.jpg'
    return thing
})

// middleware///
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')

})

app.get('/pokemon', (req, res) => {
    res.render('Index', {title: 'See All The Pokemon!', pokemon: pokemon})

})

// create a show route////
app.get('/pokemon/:showIndexOfPokemon', (req, res) => {
    // res.send(pokemon[req.params.showIndexOfPokemon])
    res.render('Show',{pokemon: pokemon[req.params.showIndexOfPokemon]});
})




app.listen(port, () => {
    console.log('listening on port', port)
})