const express = require('express');
const app = express();
const port = 3000;
const  superheroes = [
   {
       name: 'Superman',
       powers: ['flight', 'invulnerability', 'x-ray vision']
   },
   {
       name: 'Wonder Woman',
       powers: ['super speed', 'lasso rope', 'shield']
   },
   {
       name: 'Black Panther',
       powers: ['tiger claw', 'agility', 'nine lives ']
   } 
];

const villians =  [
    {
     name: "Lex Luthor", 
     powers: ["super brain"]
    },
    {
     name: "Ares", 
     powers: ["shape shifting", "teleporting"]
     },
     {
      name: "Killmonger", 
      powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]
     }
]


app.get('/superheros', (req, res) => {
    res.send(superheroes)
})

app.get('/villians', (req, res) => {
    res.send(villians)
})
app.get('/villians/:show', (req, res) => {
    res.send(`
    <h1> ${villians[req.params.show].name} </h1>
    <li> ${villians[req.params.show].powers[0]} </li>
    <li> ${villians[req.params.show].powers[1]} </li>
    <li> ${villians[req.params.show].powers[2]} </li>
    `)
})

app.get('/superheros/:show', (req, res) => {
    res.send(`
    <h1> ${superheroes[req.params.show].name} </h1>
    <li> ${superheroes[req.params.show].powers[0]} </li>
    <li> ${superheroes[req.params.show].powers[1]} </li>
    <li> ${superheroes[req.params.show].powers[2]} </li>
    <h2>The Villian is</h2>
    <h1>${villians[req.params.show].name}</h1>
    
    `)
});




// superheroes[req.params.show]




app.listen(port, () => {
    console.log('listening on port', port)
})