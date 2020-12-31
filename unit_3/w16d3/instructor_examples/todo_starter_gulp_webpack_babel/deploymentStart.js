// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection

// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 8080

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json())// returns middleware that only parses JSON

app.use(express.static('public'))

app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header(
'Access-Control-Allow-Headers',
'Origin, X-Requested-With, Content-Type, Accept'
);
next();
});

// Routes
const todosController = require('./backEndSrc/controllers/todos.js')
app.use('/api/todos', todosController)

// this will catch any route that doesn't exist
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + './public/index.html'));
})

app.listen(PORT, () => {
  console.log('Let\'s get things done on port', PORT)
})
