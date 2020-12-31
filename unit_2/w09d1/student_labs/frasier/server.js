const express = require('express');

/**creat an instance of express */
const app = express();
/**Get request */
app.get('/fraiser', (request, response) => {
    // console.log('Hello, Seattle. Im listening')
    response.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be'");

});

app.get('/niles', (request, response) => {
    response.send("You know, sometimes I wonder if I'm not just in psychiatry for the money")

});

app.get('/daphne', (request, response) => {
    response.send("Well, have fun. I'm off to stick my head in the oven.")
});

app.get('/roz', (request, response) => {
    response.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!")
});

app.get('/martin', (request, response) => {
    response.send("You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged.")
});

app.get('/Scrappy', (request, response) => {
    response.send('woof')
});







app.listen(3000, ()=> {
    console.log('Hello, Seattle. Im listening')
});
/**3000 is the port */