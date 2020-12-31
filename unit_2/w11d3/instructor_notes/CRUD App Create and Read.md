# CRUD App with Mongoose - Create and Read

## Lesson Objectives

1. Initialize a directory
1. Start express
1. Create `New` Route
1. Create `Create` Route
1. Connect Express to Mongo
1. Create Fruits Model
1. Have Create Route Create data in MongoDB
1. Create Index Route
1. Have Index Route Render All Fruits
1. Have Create Route redirect to Index After Fruit Creation
1. Create Show Route
1. Have Index Page Link to Show Route
1. Create `Show.JSX` file

## Initialize a directory

1. Create a directory for the app in `student_examples` called `fruits-jsx-mongoose` and `cd` into it
1. `npm init -y`
1. `npm i express express-react-views react react-dom`
1. `touch server.js`
1. Edit package.json to have `"main": "server.js",`

## Start express

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(3000, ()=>{
    console.log('listening');
});
```

## Create New Route


1. `mkdir views`
1. `touch views/New.jsx`
1. Create the view

```js

const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Fruit page</h1>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                <input type="submit" name="" value="Create Fruit"/>
             </form>
        </div>);
  }
}

module.exports = New;
```

Render the view

```javascript
app.get('/fruits/new', (req, res)=>{
    res.render('New');
});
```

## Create Create Route

```javascript
app.post('/fruits/', (req, res)=>{
    res.send('received');
});
```

1. Use body parser in server.js:

```javascript
app.use(express.urlencoded({extended:true}));
```

Check to see if req.body works:

```javascript
app.post('/fruits/', (req, res)=>{
    res.send(req.body);
});
```

Format data properly

```javascript
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    res.send(req.body);
});
```

## Connect Express to Mongo

1. `npm i mongoose`
1. Inside server.js:

```javascript
const mongoose = require('mongoose');

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
```

## Create Fruits Model

1. `mkdir models`
1. `touch models/fruits.js`
1. Create the fruit schema

```javascript
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
```

## Have Create Route Create data in MongoDB

Inside server.js:

```javascript
const Fruit = require('./models/fruits.js');
//... and then farther down the file
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.send(createdFruit);
    });
});
```

## Create Index Route

```javascript
app.get('/fruits', (req, res)=>{
    res.send('Index');
});
```

`touch views/Index.jsx`

```javascript

const React = require('react');

class Index extends React.Component {
  render() {
    return <div><h1>Fruits index page</h1></div>;
  }
}

module.exports = Index;
```

Render the jsx file

```javascript
app.get('/fruits', (req, res)=>{
    res.render('Index');
});
```

## Have Index Route Render All Fruits

```javascript
app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('Index', {
            fruits: allFruits
        });
    });
});
```

Update the jsx file:

```javascript

const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
            <h1>Fruits index page</h1>
            <ul>
                {
                   this.props.fruits.map((fruit, i) => {
                    return (
                        <li>
                        The { fruit.name } is { fruit.color }
                        { fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
                        </li>
                        )
                    })
                }
            </ul>
        </div> );
  }
}

module.exports = Index;

```

Add a link to the create page:

```html
<nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav>
```

## Have Create Route redirect to Index After Fruit Creation

Inside the create route

```javascript
Fruit.create(req.body, (error, createdFruit)=>{
    res.redirect('/fruits');
});
```

## Create Show Route

```javascript
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.send(foundFruit);
    });
});
```

## Have Index Page Link to Show Route

```javascript
{
   fruits.map((fruit, i) => {
    return (
        <li>
        The <a href={`/fruits/${ fruit.id }`}> { fruit.name } </a> is { fruit.color }
        { fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
        </li>
        )
    })
}
```

## Create Show.jsx

1. `touch views/Show.jsx`
1. Add JSX

```javascript

const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Fruits show page</h1>
                The { this.props.fruit.name } is { this.props.fruit.color }
        { this.props.fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
            </div>
        )
    }
}
module.exports = Show;
```

Render the jsx

```javascript
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('Show', {
            fruit:foundFruit
        });
    });
});
```
