
Title: Express Calculator<br>
Type: Lab<br>
Duration: 1+ hrs<br>
Creator: Thom Page<br>
Topics: Routing and req.params. Extra: req.query<br>
<hr>

# CALCULATOR

Make a calculator that takes two params from the URI and sends the sum to the browser!

&#x1F535; **Setup**

In the `student_labs` directory for today:

* Make a directory `express_calculator`. `cd` into the directory.
* `touch server.js` and open the project.
* `npm init`
* Enter `server.js` as the entry point (if it hasn't already defaulted to it)
* `npm i express`

Set up server code:

```
const express = require('express');
const app = express();
```

```
const port = 3000;

app.listen(port, () => { 
	console.log('app is running on port: ', port);
});
```

<hr>


### Instructions

Make a route in `server.js` that responds to the URI `calc`. Give the route two params, `:num1` and `:num2`.

Make it so that if the user enters:

`http://localhost:3000/calc/4/4` in the browser, the server send back a response of `8`.


### Notes

The params come in as strings, so to add them together as numbers they must be **parseInt'ed** or **Number()'ed**

The sum will be a number. If you try to send a number to the browser it will be interpreted as an error code.

The number must be coerced into a string when you send it back. The coercion could be as simple as:

```
res.send("the sum is " + sum);
```

<br>
<hr>

# `req.query`

Let's expand our calculator so that we can get it to do more than just addition.

We _could_ make a route for each arithmetic expression (addition, multiplication, etc.), or code in another param, but there is another way using `req.query`. Let's explore:

Example server route:

```
app.get('/someroute', (req, res) => {
  console.log('req.query: ', req.query);
  res.send('someroute accessed');
});
```
Here we will console.log the `query` object instead of the `params` object.

What is the query object?

Go to this URL in your browser:

```
http://localhost:3000/someroute?operation=add
```

Not that we begin our query with a `?` and then add a key-value pair using an equals sign.

Check in Terminal for the req.query console.log.

![](https://i.imgur.com/2fUOyHZ.png)

It gives us back the key-value pair from our URL.



## DIRECTIONS

Make a new route for the URI `calcquery`, with the same `:num1` and `:num2` params.

Copy and paste your calculator code into the route.

```
app.get('/calcquery/:num1/:num2', (req, res) => {

	// calculator code

});
```

Add in `if` statement that checks for a key within `req.query` called `operation` . If the value is "add", perform a sum and res.send the sum.

If the value is "multiply", perform multiplication.

Do the same for subtraction, division, and exponents.

Add in an `else` to to send a message: "no operation"


NOTE: We are allowed have many res.sends within a single route _if_ they send independently, ie. they are inside **if statements** and have no risk of running at the same time.



## Bonus

- Figure out how a user/client could change the query parameters without typing in the URL bar. Hint (you'll need to do a bit of research!)

- Finish the warmup lab
- Work on the Super Bonus from yesterday's lab
