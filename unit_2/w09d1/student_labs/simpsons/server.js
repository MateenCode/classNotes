const express = require('express');
const app = express();

app.get('/homer', (req, res) => {
    res.send('Testing Homer');

});

app.listen(3000, () => {
    console.log('doope')
});