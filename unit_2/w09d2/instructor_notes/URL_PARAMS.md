# URL and Query Parameters

## Lesson Objectives

1. Read URL parameters
1. Common error: two responses
1. Common error: Place routes in correct order
1. Multiple Params
1. Request Object
1. URL Queries
1. Extra: Environment Variables

## Read URL parameters

Most of the time, we'll use segments in the path section of the URL to modify how our application works.

To do this, we'll use request parameters. To the user, it'll just look like an extension of the url path.

Let's think of Amazon again. With 300 million products and counting, hard coding a route for each product and keeping track of it all would be nightmarish.

We'll work with a simplified example. Imagine a store: `The Botany Express` that sells a few plants. Rather than having a dedicated route for each plant, the plants are stored as data (in our case an array of strings). We can access the data by passing in the index as a part of the request URL.

To set URL parameters in your `server.js` , just add a colon after the forward slash and then a variable name.

'Regular' URL:
`/plants`

URL parameter:
`/:indexOfPlantsArray`

The entire route:

```js
app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});
```

We can access the value of `:indexOfPlantsArray` with `req.params.indexOfPlantsArray`

Let's code together to see this in action.

In `student_examples`:
- `mkdir express_plants`
- `cd express_plants`
- `touch server.js`
- `npm init`
- `npm i express`

```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

Start up your server in terminal

Now visit http://localhost:3000/0 in your browser
> Monstera Deliciosa

Now visit http://localhost:3000/3 in your browser
> Witch's Butter

Note: http://localhost:3000
> error cannot GET (we didn't write a route for this)

Let's breakdown the contents of our localhost URL:

```
    http://localhost:3000/2
    \___/  \_______/ \__/ \_/
  protocol    host   port   path*           
```

Path can be a URL or a URL parameter: it will look the same in the browser. The difference will be in the server.

## A Common Error

You can only have one response for every request. If you try to send multiple responses you'll get an error. Let's try it!

```js
app.get('/oops/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
    // error cannot send more than one response!
    res.send('this is the index: ' + req.params.indexOfPlantsArray);
});

```

We can, however, have multiple statements if we use our `if` statements or other program logic correctly:


```js
app.get('/fixed/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.index]) {
          res.send(plants[req.params.indexOfPlantsArray]);
    } else {
      res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray);
    }

});

```



## Place routes in correct order

- Express starts at the top of your `server.js` file and attempts to match the url being used by the browser with routes in the order in which they're defined
- URL params (e.g. :foo, :example, :indexOfPlantsArray) can be anything, a number, or even a string
  - Therefore if you have these routes in this order in your `server.js`:
    - `/:color`
    - `/plants`
  - And you want to get to `/plants` - you'll always hit the `/:color` route because the URL parameter will accept _any_ string, it doesn't know that `plants` is something specific/special
  - To fix this, we put the more specific routes first
    - `/plants`
    - `/:color`
  Now, from top to bottom, the more specific route `/plants` will be triggered when the URL has `plants` and if it doesn't match `plants`, it will go to the next route.


Let's code an example of this together:



```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/:indexOfPlantsArray', (req, res) => { //:indexOfPlantsArray can be anything, even awesome
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/awesome', (req, res) => { //this will never be reached
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

If this happens, reorder them so that more specific routes come before less specific routes (those with params in them)

```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/awesome', (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexofPlantsArray]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

# Multiple Params

We can store multiple params in the `req.params` object:

&#x1F535; **Write in (5 min)**

```
app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});
```

* In your browser, go to `localhost:3000/hello/bob/bobbybob`

&#x1F535; **Check the req.params console.log in Terminal**

![](https://i.imgur.com/xrq5rSu.png)

* Try entering different firstnames and lastnames in your URL and check the results

<br>
<hr>


# The Request object

This is just interesting, as well as informative, but not necessary to get anything to work.

What happens if we console.log the entire Request Object?

`console.log(req)`?

In the `hello/:firstname/:lastname` route, before `res.send`, write in:

```js
  console.log('=========================================');
  console.log('This is the entire Request Object sent from the browser to the server: ');
  console.log(req);
  console.log('========================================');
```

This will allow you to see the **entire request object**. This object contains all of the information that the browser sends to the server. There's a ton of information in there!

![](https://i.imgur.com/fvmFn3x.png)


&#x1F535; **Activity (5 min)**

* In the browser, go to the firstname/lastname route
* Have a look through the entire request object in Terminal
* Find the `req.params` object within it.
* The `req` object is where the `req.params` object is stored when the browser makes a request to the server.

`req.params` is an object nested within the `req` object.

`req.params` is the only one we will need for today.


# req.query

A query is a key-value pair separated with an `=`, and added to the URL with a `?`.

`?someKey=someValue`

```
localhost:3000/howdy/bob?title=duke
```

```javascript
app.get('/howdy/:firstName', function(req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});
```

You can add multiple queries

```
localhost:3000/howdy/bob?title=duke&year=2001
```

Spaces are represented with a `%20`.

## Extra

### Environment Variables

Currently you are using your computer's `nodejs` as your environment.

If you wanted to collaborate on this project, you'd likely have your collaborator get a copy of your code from github.

They would be running the app on their environment.

If you were to host your app on the internet, you'd likely need to set different environment variables than the ones you have on your computer.

This is a contrived example, but simple enough to demonstrate the problem and a solution:

Let's say you want to run this app on port `3000`. Your collaborator wants to run it on port `3001` and your hosted version on the internet wants to run it on port `8888`.

You could, constantly update it in your `server.js`... but that seems problematic.

A better option would be to add another npm package like `dotenv`

Go ahead and run:

`npm i dotenv`

At the top of `server.js` add, as per the [docs](https://www.npmjs.com/package/dotenv)

```js
require('dotenv').config()
```

`touch .env` on the same level of `server.js`

`touch .gitignore` (if you haven't already), be sure to add `node_modules` and `.env`

As per the docs, no spaces, no commas, no semi-colons. If you have a second variable, you would put it on the next line.

In `.env`

```yml
PORT=3000
```

In `server.js`

```js
const port = process.env.PORT;
```

Your environmental variables are yours, and should be private. If you put them on github everyone can see!  So you should have git ignore them.

- `touch .gitignore` (remember the class repo already has a `.gitignore` so it won't matter here, but it will matter for projects

In `.gitignore`
```yml
node_modules
.env
```

Port numbers aren't sensitive, but you could use this file to store passwords, api keys and encryption codes and more. So you want to be mindful of this file and keep it safe.


let's see if we can access this variable

**server.js**
```js
require('dotenv').config()
const express = require('express'); //from documentation: express is function
const app = express();//app is an object

console.log(process.env.PORT);

```

We should see the port number we put inside our `.env` file

We can now update our port. We can use `||` to also set a default.

```js
const port = process.env.PORT || 3003;
```

and update our `app.listen`

```js
app.listen(port, () => {
    console.log("I am listening on port", port);
});

```
