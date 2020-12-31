# Create an API

## Lesson Objectives

1. Define API
1. Initialize Directory
1. Set Up Express Server
1. Create Todo Controller
1. Initialize Mongoose
1. Create Todo Model
1. Create Create Route
1. Create Index Route
1. Create Delete Route
1. Create Update Route

## Define API

- An API stands for Application Program Interface
- It is a set of routines, protocols, and tools for building software applications
- It specifies how software components should interact
- Essentially it's documentation, but in the industry, it's come to mean a program or some existing software that you use to build your own app

## Initialize Directory

1. `cd student_examples`
1. `mkdir express_api`
1. `npm init`
1. set entry point as server.js
1. `touch server.js`
1. `npm install express --save`

## Set Up Express Server

server.js:

```javascript
// Dependencies
const express = require('express')
const mongoose = require('mongoose')

// Environment Variables (getting ready for Heroku)
const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Let\'s get things done on port', PORT)
})
```

## Create Todo Controller

1. `mkdir controllers`
1. `touch controllers/todos.js`

controllers/todos.js:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('index');
});

module.exports = router;
```

server.js:

```javascript
// Routes
const todosController = require('./controllers/todos.js');
app.use('/todos', todosController);
```


## Initialize Mongoose

1. `npm install mongoose --save`

server.js:

```javascript
const db = mongoose.connection

// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud'

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

```
test: `curl http://localhost:3000/todos`


## Create Todo Model

1. `mkdir models`
1. `touch models/todos.js`

models/todos.js:

```javascript
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
});

const Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;
```

## Create Create Route

1. We need to tell Express to expect JSON data in the body from AJAX, so we'll use `express.json()`
1. We'll also need to tell the client that the data coming back is JSON, not HTML, so we'll do `res.json()`

server.js:

```javascript
// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
```

[I forget what the above methods do!! HELP!!](https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327)

controllers/todos.js

```javascript
const Todos = require('../models/todos.js');
//...farther down the page
router.post('/', (req, res)=>{
    Todos.create(req.body, (err, createdTodo)=>{
        res.json(createdTodo); //.json() will send proper headers in response so client knows it's json coming back
    });
});
```

test: `curl -X POST -H "Content-Type: application/json" -d '{"description":"weee","complete":true}' http://localhost:3000/todos`

## Create Index Route

controllers/todos.js:

```javascript
router.get('/', (req, res)=>{
    Todos.find({}, (err, foundTodos)=>{
        res.json(foundTodos);
    });
});
```

test: `curl http://localhost:3000/todos`

## Create Delete Route

```javascript
router.delete('/:id', (req, res)=>{
    Todos.findByIdAndRemove(req.params.id, (err, deletedTodo)=>{
        res.json(deletedTodo);
    });
});
```

test: `curl -X DELETE http://localhost:3000/todos/58f79d490708714536c02474`

## Create Update Route

controllers/todos.js:

```javascript
router.put('/:id', (req, res)=>{
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
        res.json(updatedTodo);
    });
});
```

test: `curl -X PUT -H "Content-Type: application/json" -d '{"description":"I updated this","complete":true}' http://localhost:3000/todos/58f7a4fd26b1a345e9281cb8`
