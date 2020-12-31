const express = require('express');
const app = express()
const port = 3000;


app.get('/', (req, res) => {
    res.send(`
    <h1>99 bottles of beer on the wall</h1>
    `)
});

app.get('/:number_of_bottles' , (req, res) => {
    if(req.params.number_of_bottles > 0){
        res.send(`
        <h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
        <h1>${req.params.number_of_bottles} Bottles of beer</h1>
        <a id="bottle" href="${req.params.number_of_bottles -1}">Take one down, pass it around</a>
        
        ` )

    }else{
        res.send(`
        <a id="restart" href="/">Start Over</a>
        `)
        return;
    }
})


app.listen(port, () => {
    console.log('loading on port', port)

})