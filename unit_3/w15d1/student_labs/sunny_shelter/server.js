// Dep
const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection

// Environment Variables (getting ready for heroku)
const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/animalcrud'


//middleware//
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

//env
const PORT = process.env.PORT || 3000;


//Connect to Mongo
mongoose.connect(mongoURI, {useNewUrlParser: true}, () => {
    console.log("MongoDB connection made!", mongoURI)
})

//db messaging//
mongoose.connection.on('error', err => console.log(err.message));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));


//Routes
const animalsController = require('./controllers/animals');

//controller//
app.use('/animals', animalsController);



//listen/

app.listen(PORT, () => {
    console.log("listening on port:", PORT)

})