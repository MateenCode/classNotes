# Make an Express Command Line App

---
Title: Make a command line app<br>
Type: Lesson <br>
Duration: ~ 1hr or so<br>
Creator: Thom Page <br>

---

# Objective

Make an app just for the command line -- no views! -- and get reps with cURL.

## One POST Route, one GET route

You will make an app just for the command line. There will be no webpage.

You will interact with your routes with `curl` in Terminal.

Your app will simply read and create dummy data.

Your resource will be `dates`.

Each date object will have a `name` (it could be anything, just to identify the data), and a `created_at`.

The `created_at` will be set by the server using Javascript's `Date.now()`. You will supply the `name` when you create the data.

[From MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now):

> The Date.now() method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.


# DIRECTIONS

## Set Up

`npm i` to install all the dependencies

`nodemon` to run the server.

Open a new terminal tab using the keyboard shortcut `command + T`

You will be doing curl commands in the new tab.


## Index Route

* Make an index route, a **GET**, for `/dates`. All this route should do is res.send the dates array.

* In your curl tab, make an http request to the `/dates` GET route:

```
curl localhost:3000/dates
```

The data should appear.

If you restart the server and do it again, values for `created_at` will have changed (because the data will have been created again).


## Create Route

* Make a create route, a **POST**, for `/dates`.

* This route should first console.log `req.body`

```
console.log('req.body is: ', req.body);
```

* And it should redirect to the `/dates` index route just so it doesn't hang.

* In your curl tab, make an http request to the `/dates` POST route:

```
curl -X POST localhost:3000/dates
```

You should see in your curl tab:

![](https://i.imgur.com/A9IvtHs.png)

Over in your server tab, you should see the console log of `req.body`:

![](https://i.imgur.com/t2asxfN.png)

It is undefined because we haven't installed and configured body-parser. body-parser adds the req.body object to our request.


## body-parser Middleware

Use Express's "body-parser" middleware to see the body of the request.

add in the middleware configuration:

```
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
```

### More on middleware

---
`express.json()` is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: `app.use(express.json())`

`express.urlencoded()` is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: `app.use(express.urlencoded());`

---

Test that body-parser works by making another curl request in the curl tab, same as before:

```
curl -X POST localhost:3000/dates
```

in the curl tab you should see this as before:

![](https://i.imgur.com/A9IvtHs.png)

In the server tab you should see the console.log for req.body:

![](https://i.imgur.com/Iwxntof.png)

If you get this, you know that body-parser is working. It has given us the body object. For now, it is empty because we haven't POSTed any data.

## Post Data

Let's post data to our `/dates` POST route. We will send one piece of data: a name.

In the curl tab, we add some data with `-d`. It must go after the POST and before the url:

```
curl -X POST -d name="Matrix" localhost:3000/dates
```

Over in the server tab you should see this:

![](https://i.imgur.com/NLw8Q6o.png)

## Add Data to the 'database'

In the POST route, you will want to push the contents of `req.body` into the dates array

`dates.push(req.body)`

You should also add a console.log to conveniently check the contents of the updated dates array:

`console.log('all the dates data: ', dates);`

![](https://i.imgur.com/X6t82fN.png)

In your curl tab, send the request again:

```
curl -X POST -d name="Matrix" localhost:3000/dates
```

Over in the server tab, you should see the updated dates array (the console.log): 


![](https://i.imgur.com/LJzf469.png)


## Dates

When we created the `matrix` data, we did not add the date. We will get the server to do this for us:

In our POST route we can assign values to req.body before we push it into our dates array.

We can manually add the key `created_at` and give it a value:

```
  req.body.created_at = Date.now();
```

![](https://i.imgur.com/3FGMqKh.png)

Now we can make our curl request again, and the date should appear:

```
curl -X POST -d name="Matrix" localhost:3000/dates
```

In the server tab:

![](https://i.imgur.com/ODXmBIK.png)


## Adding Defaults

We have made it so `created_at` is hardcoded by us. The user will never supply a date.

But what if your user does not supply a name?

We can add a default value for that:

```
if (!req.body.name) { req.body.name = "NO DATA" }
```

If there is no data in `name`, set a default: "NO DATA"

Try it out in your curl tab and send no data:

```
curl -X POST localhost:3000/dates
```

In your server the output should look like this:

![](https://i.imgur.com/Yl2fdaV.png)

* req.body is empty because we did not supply data
* the `name` is "NO DATA" because we set a default
* `created_at` has the date because we hardcoded it
