// Dep
const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection


// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud'

// env
const app = express();
const PORT = process.env.PORT || 3000

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings

app.use(express.json());
app.use(express.static('public'))

/// ROUTES
const todosController = require('./controllers/todos.js');

app.use('/todos', todosController);


app.listen(PORT, () => {
    console.log("Lets get things done", PORT)
})