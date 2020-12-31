const express = require('express')
const app = express();

const port = 3000;
// import data////
// controllers////
const budget = require('./models/budget.js');

// middleware///
app.use(express.urlencoded({extended: false})); // to get info from body of a post request
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public')); 
app.use(express.json())


// index route/////
app.get('/budgets', (req, res) => {
    // console.log(budget[i].date)
    let sum = 0
    for(let i = 0; i < budget.length; i++) {
        sum += parseInt(budget[i].amount);
    }
    res.render('Index', {sum: sum, budget});
  

});

// new route/////
app.get('/budgets/new', (req, res) => {
    res.render('New');

})
app.post('/fruits', (req, res) => {
    budget.push(req.body);
    // console.log(req.body);
    res.redirect('/budgets');
})

// create a show route////
app.get('/budgets/:showBudget', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('Show',{budget: budget[req.params.showBudget]});
})



app.listen(port, () => [
    console.log('running on port', port)
])