# Express Router

## Lesson Objectives

1. Explain What Express.Router does for us
1. Create External Controller File for Routes
1. Move Server.js Routes to External Controller File
1. Require Mongoose in Controller File
1. Use Controller File in Server.js
1. Remove References to Base of Controller's URLs

## Explain What Express.Router does for us

- Our server.js file is getting rather bloated
- express.Router will let us put our routes in a separate file

## What is express router?
- Routing refers to how an application’s endpoints (URIs) respond to client requests. 
- Express Router is a tool that allows us to abstract away our routes in to a separate file.
- It will make it so that we could have a router controller for each individual route and easily expand out routes.

## Create External Controller File for Routes

1. `mkdir controllers`
1. `touch controllers/fruits.js`
1. Edit controllers/fruits.js

```javascript
const express = require('express');
const router = express.Router();

module.exports = router;
```

## Move Server.js Routes to External Controller File

rename `app` to `router`

```javascript
const express = require('express');
const router = express.Router();

router.get('/fruits/new', (req, res)=>{
    res.render('New');
});

router.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, ()=>{
        res.redirect('/fruits');
    });
});

router.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('Index', {
            fruits: allFruits
        });
    });
});

router.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('Show', {
            fruit:foundFruit
        });
    });
});

router.delete('/fruits/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/fruits')
    });
});

router.get('/fruits/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render(
    		'Edit',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	);
    });
});

router.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    //{new: true} tells mongoose to send the updated model into the callback
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel)=>{
        res.redirect('/fruits');
    });
});

module.exports = router;
```

## Require Fruit Model in Controller File

```javascript
const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruits.js')
//...
```

The `Fruit` model is no longer needed in `server.js`.  Remove it:

```javascript
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
```

## Use Controller File in Server.js

```javascript
const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);
```

## Remove References to Base of Controller's URLs

Since we've specified that the controller works with all urls starting with /fruits, we can remove this from the controller file:

```javascript
const express = require('express');
const router = express.Router();

router.get('/new', (req, res)=>{
    res.render('New');
});

router.post('/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, ()=>{
        res.redirect('/fruits');
    });
});

router.get('/', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('Index', {
            fruits: allFruits
        });
    });
});

router.get('/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('Show', {
            fruit:foundFruit
        });
    });
});

router.delete('/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/fruits')
    });
});

router.get('/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render(
    		'Edit',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	);
    });
});

router.put('/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    //{new: true} tells mongoose to send the updated model into the callback
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel)=>{
        res.redirect('/fruits');
    });
});

module.exports = router;
```


## Why use router?
- Our app is very simple right now.
- What if we want to add a vegetables index route, create, read update and delete?
- Lets take a look!