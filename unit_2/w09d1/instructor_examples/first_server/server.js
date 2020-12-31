const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("hey! I got a request!");
    res.send('Hello Madeline!');
});

app.get('/somedata', (req, res) => {
    res.send('here is your information');
})

app.listen(3000, () => {
    console.log("listening on port 3000");
});