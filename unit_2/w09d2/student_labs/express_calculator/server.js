const express = require('express');

const app = express();
const port = 3000;

app.get('/calc/:num1/:num2', (req, res) => {
    let sum = parseInt(req.params.num1)  +  parseInt(req.params.num2)
    res.send(`${sum}`)
});

// app.get('/someroute', (req, res) => {
//     console.log('req.query: ', req.query);
//     res.send('someroute accessed');
//   });


app.get('/calcquery/:num1/:num2', (req, res) => {
    console.log('req.query: ', req.query);
    if(req.query.operation === 'add') {
        let sum = parseInt(req.params.num1)  +  parseInt(req.params.num2)
        res.send(`${sum}`)
    } else if(req.query.operation = 'multiply') {
        let sum =  parseInt(req.params.num1)  *  parseInt(req.params.num2)
        res.send(`${sum}`)
    } else if(req.query.operation = 'divide') {
        let sum =  parseInt(req.params.num1)  /  parseInt(req.params.num2)
        res.send(`${sum}`)
    } else{
        res.send('no operation')
    }
});


app.listen(port, () => {
    console.log('app is running on port:', port)
});