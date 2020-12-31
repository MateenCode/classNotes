const express = require('express');

const app = express()

const port = 3000;

const eightBall = [
"It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes definitely",
"You may rely on it", 
"As I see it yes", 
"Most likely", 
"Outlook good",
"Yes", 
"Signs point to yes", 
"Reply hazy try again", 
"Ask again later",
"Better not tell you now", 
"Cannot predict now", 
"Concentrate and ask again",
"Don't count on it", 
"My reply is no", 
"My sources say no",
"Outlook not so good", 
"Very doubtful"
]

// Greetings/////////////////////////////
app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    // res.send('Hello, Stranger');
    res.send(`What up ${req.params.name}`);
});

// Tip Calculator////////////////////////
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let solve = parseInt(req.params.total) * parseInt(req.params.tipPercentage)/ 100;
    res.send(`${solve}`)
});

// Magic 8 Ball/////////////////////////

// app.get('/magic','/Will I Be A Millionaire', (req
app.get('/magic/:question', (req, res) => {
    console.table(req.params);
    console.table(req.query);
    let random = eightBall[Math.floor(Math.random() * eightBall.length)]
    console.log(random)
    res.send(`
    <h1>${req.params.question}</h1>
    <p>The Magic 8 ball says</p>
    ${random}
    `)
})



app.listen(port, ()=> {
    console.log('im listening on port', port);
})