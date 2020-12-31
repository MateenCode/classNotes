// dependencies
const express = require('express');
const mongoose = require('mongoose');

// environment var
const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud';
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

// Connect to mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log("MongoDB connection made!", mongoURI)
});

// db messaging
mongoose.connection.on('error', err => console.log(err.message));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// Routers
const todosController = require('./controllers/todos.js');

app.use('/todos', todosController);


app.listen(PORT, () => console.log("listening on port ", PORT));