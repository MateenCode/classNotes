# Intro to Express

## Lesson Objectives

1. Describe what is a 'back end'
1. Install Node packages
1. Set up a basic Express server
1. Set up a basic GET route
1. Use nodemon to restart your sever when your code changes
1. Save a record of what packages your application uses

## Describe what is a back end

So far, you've been working on the `front end`, you've been building things with HTML, CSS and JavaScript that appear in a browser.

Now we'll start learning about the back end and how that is tied to the front end.

A backend typically consists of a server (takes client requests and sends responses), an application (the logic of what to do with the request - get flight information/get directions to somewhere/ etc.) and a database (store, retrieve, update information/data etc.)

Let's take a moment to think about `Amazon`, Amazon has 300 million products and counting. Each item has its own web page.

Amazon does not have thousands of web developers carefully handcrafting each web page for each item by hand and updating them as needed. Rather, the pages are built dynamically. The developers build an HTML template and then work with the data of the products to create individualized web pages based on the data. Things like price, images of the item, description of the item etc. are stored in a database, this data is retrieved and interpolated with the HTML. This requires the use of a server and a database.

In this unit, we'll be building our own web applications with Node.js/Express  that will allow the computer to respond to other computers' requests. At first our responses will be simple text. But we'll build up to sending HTML, then sending dynamic HTML that works with data, and finally building our apps to interact with a database.

## Install Node packages

- Node.js is an application that lets us run JavaScript outside of the browser and in the terminal. We'll use node.js to build simple servers that will respond to browser requests.

- Built into Node.js is something called npm, which stands for `Node Package Manager`, which will manage Node Packages

- Node packages are libraries (or frameworks - see below) of code that provide useful functionality. Much like jQuery for the browser, node packages help us write sophisticated programs with a lot of useful functionality right out of the box. These packages are published at [www.npmjs.com](https://www.npmjs.com/)


These chunks of code fall into one of two categories

- Libraries
    - A collection of functions, objects, and even other libraries that you call
    - It has no idea what you're going to build
- Frameworks
    - Is a collection of functions, objects and libraries that create a pre-conceived skeleton for an application
    - It knows what you're going to build and can be somewhat opinionated about how you should do it

We'll be working with one package throughout this unit called `express` - which calls itself a framework AND unopinionated ¯\_(ツ)_/¯

[express](https://www.npmjs.com/package/express) is a `Fast, unopinionated, minimalist web framework for node`.

At first, we'll be running our express server in terminal and we'll interact with it in our browser. Our browser will send requests to our express app, and our express app will send responses back to our own browser.

## Activity - Download our First npm Package

- cd into `student_examples`
- `mkdir first_server`
- `cd first_server`


First we have to initialize our directory with a `package.json` file. We can create it interactively by typing

`npm init -y` in terminal

- The `npm init` command creates a package.json file, and adding `-y` tells node to create a minimal package.json without any customization, if we didn't use the `-y` flag we would get prompted to answer questions about the project.

Here is a very minimal `package.json` - it's just a text file with an object in it

![package.json](https://i.imgur.com/oX88ZQB.png)

It's totally ok to edit this file - for example, if I forgot to put myself as the author I could add it as a string. If I didn't like my project name, I could update it too.

 **GOTCHA** be careful to keep this as a proper object and keep track of your strings or else you will get errors and your code will not run.


To install (download) a package, first you must know its name (each name is unique in npm).  Then run:

```
npm i package-name
```

**Note**: `npm i` - is new as of version 5.0.0, older versions of npm require you to type `npm install` instead. You can type `npm install` with version 5.0.0 (and up) with no errors.

Additionally, in the old version it was required to type `--save` in order to update the `package.json`, with version 5.0.0 `npm i` automatically updates the `package.json`. If you type `npm i express --save` with the new version, it won't error or do anything different. If you are running 4.x.x or below, if you forget to type `--save` it won't update the `package.json`

As you explore different npm packages and read documentation you may see one syntax or the other.

Let's install the library `express`:

```
npm i express
```

We can see that we've successfully added because or `package.json` file will have updated (under dependencies)

![package.json with express](https://i.imgur.com/jHWP7bd.png)


Additionally, we see that we now have a directory called `node_modules` and a file called `package-lock.json`

![files](https://i.imgur.com/sS4uziE.png)

We're not going to edit our `package-lock.json` file, it's just a helper file for npm that helps npm do some under the hood stuff.

Inside `node_modules` is all the code that was downloaded so we could use `express`, the code is tucked into folders that are managed by npm. Like jQuery, we don't ever have to look at the source code or modify it in any way, it can just sit there and we'll bring in the code and use it in our own files.  


## Set up a basic Express server

In the root of our project, `touch server.js`

![server.js](https://i.imgur.com/FlNsHyM.png)

Now that the library has been installed (downloaded), we can use it in our code, by using the `require()` function

```javascript
const express = require('express');
```

- let's `console.log(express)`

- run our code by typing `node server.js` in terminal

- We can see it's a giant object with a ton of properties and functions. We can learn how to use this functionality by checking out the docs.

[express on npm](https://www.npmjs.com/package/express)

[Full express documentation](http://expressjs.com/en/api.html)

Looking at express on npm we see how to build the most bare bones simple server

![express server on npm](https://i.imgur.com/u3Dfkql.png)

It looks like we have a good start, but have to write a little more code. And we'll continue to write our code with the newer `ES6` syntax (`const` instead of `var` and arrow functions)

Add:

---
 ```js
 const app = express();
 ```

---

```js
app.get('/', ( req, res )=>{
  res.send('Hello World!');
});
```
---

 ```js
 app.listen(3000);
 ```
---

- Start the app by executing `node server.js` in the command line. It'll now run continuously because of the functionality of the `app.listen`

- Therefore, it will start and then you won't get your bash prompt back, it'll just hang

**Note**: If you want to quit your server, you have to use `control c`


1. Visit http://localhost:3000/ in your browser.  You should see your 'Hello world' text. You've successfully created a basic web server!  This will serve dynamic pages to web browsers.

So let's look a little deeper at our code

`const app = express();`
this creates a shorthand for calling the express function. Less typing!

`app.listen(3000);` this says 'express listen to the port 3000' , by default it will be listening to localhost - it will be listening and waiting for any requests coming to `localhost:3000` from the browser

We can see `app.listen` fire by using a callback

```js
app.listen(3000, ()=> {
  console.log("I am listening for requests!!!");
});
```

Only you on your computer can access your `localhost`, later we'll learn how to update the settings so your server can live on the web and other computers can send requests.

Finally, we have to unpack this very dense bit of code:

```js
app.get('/', ( req, res )=>{
 console.log("Oh hey! I got a request. Let me respond with something");
  res.send('Hello World!')
})
```

These 3 lines of code are doing a lot!

First, we're calling express, and we're setting a 'GET' route of '/', that means if a user goes to `localhost:3000/` this is the method that will get triggered.

Then we pass a call back function with two parameters, by convention, they are `req` (for request) and `res` (for response)

Inside our callback we can write whatever code we want.

In this case we are using a method on the response object (`res.send()`) - that is saying 'send this plain text as the response'


We can build as many routes as we like and customize them to do whatever we want.

**Final code**:

```js
const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.send('Hello world');
});

app.listen(3000);

```

**On semi-colons**: The use semi-colons is being hotly debated. The place you will end up working will likely have strong opinions. Recommendation: choose a style for a project and be consistent.

## Set up a basic GET route

Now we'll create our own basic GET route so that visitors to (clients of) our web-server can retrieve some information from it.

We can also pass a callback to our `app.listen` which is handy to use to send a `console.log` message to terminal to let us know if our sever is up and running

Let's add a get route, so when a user goes to `localhost:3000/somedata`, they'll get a text response of `here is your information`

```javascript
const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/', (req, res)=>{
  res.send('Hello world');
});

app.get('/somedata', (request, response) => {
    response.send('here is your information');
});

app.listen(3000, () => {
    console.log("I am listening");
});
```

- The function passed as a second parameter to `app.get()` is executed each time a user (client) goes to http://localhost:3000/somedata
- The function (callback) takes two parameters
    - `request`
        - object containing information about the request made (browser, ip, query params, etc)
    - `response`
        - object containing methods for sending information back to the user (client)

- We can see the response in the browser


**Final code with comments and console.logs**:


```js
// Dependencies
const express = require('express');
const app = express();

// listen for when someone goes to
// localhost:3000/
// upon getting a request at that URL
// send text 'Hello World'

// Routes
app.get('/', (req, res) => {
  console.log("Oh hey! I got a request. Let me respond with something");
  res.send('Hello World!');
});

app.get('/somedata', (request, response)=>{
  // console.log('response: ', response);
  // console.log('===================');
  response.send('here is your information');
});

// App Listen
app.listen(3000, ()=> {
  console.log("I am listening for requests!!!");
});
```


## Shut down your server

You can't run two servers on the same port and you can get annoying errors if you don't shut your servers down properly. Get in the habit of `control c` to shut your server down when you are done working.

## Use nodemon to restart your sever when your code changes

An NPM package called `nodemon` allows us to run code just like `node`, but it will restart the application whenever code in the application's directory is changed. This is really handy and gives us a better workflow.

1. Install it `npm install nodemon -g`
    - the `-g` tells npm to make the package available for use in the terminal in any directory (globally). You might not be able to install node packages globally by default. You may have to run `sudo npm i nodemon -g` and enter your computer's username and password
1. Now we can call `nodemon server.js`, and the server will restart whenever the app's code changes

1. If you want to get really fancy, you can go to your `package.json` file and change the value of `main` from `index.js` to `server.js` - now you can just type `nodemon` in terminal and it will 'know' you mean to run `server.js`

When you start a new project and do `npm init` and go through the prompts, you can set this right away.


## package.json and node_modules revisited

When we downloaded express it installed a lot of code (inside `node_modules`) - we don't need to track these files and upload/download them to and from github. All the info needed is in the `package.json`

To avoid tracking/uploading/downloading files that don't need to be tracked or shouldn't be tracked (passwords, secrets) you can create a file called `.gitignore`

It will ignore whatever files and folders you tell it. Our class repository already has a `.gitignore`, but when you start your own projects, you'll want to be sure to create one.

Let's give it a whirl:


1. Create a file called `.gitignore`
1. In it, add the line `node_modules`
1. You can check to see if it works by going to `github` if you see your `node_modules` folders there, you have not properly ignored your `node_modules`
1. note, our class repo already has a `.gitignore`, so you really should never see `node_modules` there
1. At first, it won't matter if you ignore  your node modules. But once you go to host your server on the web, having these tracked can cause weird errors and make your server break. We'll talk about this more later.
