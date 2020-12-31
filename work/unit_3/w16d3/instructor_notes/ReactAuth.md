# React: Authentication with JWTs

## Learning Objectives
- Describe JSON web tokens (JWTs)
- Describe what Passport is
- Identify parts of JWTs
- Add JWT authentication with Passport to a MERN app

## Framing

### What is a JSON Web Token?

[Official definition](https://tools.ietf.org/html/rfc7519): compact, URL-safe means of representing claims to be transferred between two parties.

In other words: A JSON web token is JSON-formatted data sent securely between the server and the browser via HTTP requests.

### Authentication with JWTs

The problem that JWTs seek to overcome: HTTP is stateless, but we need a way to tell the server that a user is logged in.

When making requests or performing actions that are only for authorized users, there needs to be a way to keep track of whether a user is logged in, since that information isn't stored in HTTP by nature.

For instance, when we implement Passport for user authentication, we will use __sessions__ to remind the server of "logged-in status" with every request made to the server. A __session__ is a place to store data on the browser during one request which can be read during later requests. The session is a JS object that allows us to keep track of this information. When a new user signs into an application, we create a new session in the server, and a cookie for this session is sent in a response back to the browser. 

In future HTTP requests from the browser, the client sends a session cookie to the server to retrieve the user from the database to then authenticate the authorized interaction with the database (e.g. saving a post, editing data).

Another approach to keeping track of a user being logged in is to use JWTs with Passport. With JWTs, the user info is embedded in a __token__. Upon initial log in, the server creates a JSON "token" to store the user info. These tokens are "signed" by the server, and only the server holds the private key to read the token.

#### How It Works

![JWT vs. Sessions Diagram](https://cdn-images-1.medium.com/max/1600/1*d6YcPvq7TeU0DTamj629xw.png)

1. Client browser makes a request sending user login credentials and password (only has to do this once)
2. Server validates the credentials and sends a JSON response to the client that encodes user login data
3. Client stores this JSON web token
4. When the client sends a request to a route that requires authentication, it will send this token to the API to present its authorization for access

#### Advantages of using JWTs:

- JWTs are self-contained
    - You have all the information about the user within the token. After inital request from browser, the server doesn't need to interact with the database to know who the user is. Using JWTs limit database lookups.
- JWTs are compact, and transmission through HTTP actions is fast.
- JWTs work the same for browser clients and native mobile apps.

### What does a JWT look like?

A string with three parts, each separated by dots (`.`):

    - header
    - payload
    - signature

#### Header

**Header** is a JSON object consisting of two parts: the type of token (typ) and the hashing algorithm being used on the token (alg).

```
Header example:
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

**Payload** is a JSON object containing claims. Claims refer to statements about an entity (e.g. user data). You can put as many claims into the payload as you want, though you want to be cognizant of keeping the JWT compact so as not to impact performance of HTTP actions.

```
Payload example:
{
  "sub": "1234567890",
  "name": "John Doe",
  "userId": "5z-9328477bz"
  "admin": true
}
```

There are three different types of claims: public claims, private claims, and registered claims.

- __Registered claims__ refer to claims that have predetermined key names - e.g. common fields like issuer ("iss"), subject ("sub"), and expiration time ("exp").

- __Public claims__ are claims that we create - e.g. "name", "userId", and "admin" above.

- __Private claims__ are used when JWTs are sent between two parties. Only these two parties know what the claims respresent.

#### Signature
**Signature** is encoded header and payload signed with a secret key.

The header is encoded, and the payload is encoded. They are joined together with a `.` in between. This string is then hashed with the server's secret key, using header's hashing algorithm. This produces a new string, which is added onto the `<header>.<payload>` string with another `.` between.

The signature allows the receiver to ensure that the JWT was sent from an authentic source (the holder of the secret key). This encoding does not serve to encrypt the data, but to transform the data.

> Note: [Refresher on difference between encoding, encrypting, and hashing.](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/)

#### Final product

Encoded string vs. decoded JSON:

![JWT: encoded string vs. decoded JSON](https://cdn-images-1.medium.com/max/2000/1*LAo6s2tlszZdk2x-uE1lqA.png)

### Using JWTs with Passport in a MERN app

Passport allows you to store the user object in requests instead of in session cookies. Upon the log-in request, the server will create a token and pass it to the browser in the HTTP response. The token is saved to local storage in the browser.

When the user wants to access a route that requires authorization, the client will send a JWT with the request to the server. Since the server has the secret key to decode the JWT, it can (a) verify that the JWT has the right signature to ensure that the JWT originally came from that server, and (b) verify the user and then perform the action that needed authorization.

### Additional Resources on JWTs:
- https://thejlmedia.com/5-easy-steps-to-understanding-json-web-tokens-jwt/
- https://jwt.io/introduction/

## We Do: Implementing Authentication with JWT

### Starter Code

Start out by cding into 'Walk It Out' api:

```
$ cd student_examples/walk-it-out-back-end
$ npm i
```

Take 10 min to review the starter code. Look for:

- models
- controllers
- CRUD functionality?

# Break

### Config Directory

```
$ mkdir config
$ touch config/config.js config/passport.js
```

The config directory is where we are going to put all the code to build out passport and our JWTs. 

To start, we need to install a few dependencies:

```
$ npm i passport passport-jwt
```

In `config.js`, we'll create a secret key for our JWTs:

```
module.exports = {  
    jwtSecret: 'JwtS3cr3tK3Y',
    jwtSession: {
        session: false
    }
}
```

Then, we will build out passport. First in `index.js`:

```
const passport = require('./config/passport')();

...

app.use(passport.initialize());
```

In `passport.js`:

```
const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

const config = require('./config')

const mongoose = require('../models/User')
const User = mongoose.model('User')

const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function() {
    const strategy = new Strategy(params, (payload, callback) => {
        const user = User.findById(payload.id) || null
        if (user) {
            return callback(null, {
                id: user.id
            })
        } else {
            return callback(new Error("User not found"), null)
        }
    })
    passport.use(strategy)
    return {
        initialize: function() {
            return passport.initialize()
        },
        authenticate: function() {
            return passport.authenticate("jwt", {session: false})
        }
    }
}

```

### User Controller

In order to log in (or sign up), we'll need to make post requests to the server to find (or create) the user in the database and create a JWT to represent the user is logged in. We can manage these requests in a user controller.


Then, we'll make a user controller file in the command line:

```
$ touch controllers/users.js
```

In `index.js`:

```
const userController = require('./controllers/users.js')

...

app.use('/users', userController)
```

In `users.js`, we will start out like a typical controller:

```
const express = require('express')
const router = express.Router()


module.exports = router
```


Then we will to install another dependency:

```
$ npm i jwt-simple
```


Then, we'll require that in `users.js`:

```
const jwt = require('jwt-simple')
```

We want to bring in the passport and JWT built out in config:

```
const passport = require('../config/passport')
const config = require('../config/config')
```

In order to query the database for users and create new users, we'll need to require the User schema built out in the models folder:

```
const mongoose = require('../models/User')
const User = mongoose.model('User')
```

#### Sign Up

We will begin creating routes for requests made from the browser. First, we will build out functionality for a `post` request to `/users/signup`. The logic involved is:

- Receive sign-up form input (email and password) from the browser
- Query the database to see if another user has used that email
- If not, create an instance in the database with new user email and password
- Generate a JWT holding the user id
- Send the JWT back to the browser

In `users.js`:

```
router.post('/signup', (req, res) => {
    if (req.body.email && req.body.password) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({email: req.body.email})
            .then((user) => {
                if (!user) {
                    User.create(newUser)
                        .then(user => {
                            if (user) {
                                var payload = {
                                    id: newUser.id
                                }
                                var token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            }
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})
```

#### If you have Postman, Test Sign Up with Postman

If you don't have Postman you can download the tool here: [Postman](https://www.getpostman.com/downloads/)

Postman is an API(application programming interface) development tool which helps to build, test and modify APIs. Almost any functionality that could be needed by any developer is encapsulated in this tool. It is used by over 5 million developers every month to make their API development easy and simple. It has the ability to make various types of HTTP requests(GET, POST, PUT, PATCH), saving environments for later use, converting the API to code for various languages(like JavaScript, Python).

To verify that this post request will work, let's use a tool, Postman. Start up the server with `nodemon`.

In Postman:

- Uhoose POST verb
- Url: `http://localhost:3001/users/signup`
- Headers:
    - Key: 'Content-Type'
    - Value: 'application/json'
- Body:
    - Raw
    - JSON (application/json)
    - ```
        {
            "email": "bigpoppacode@email.com",
            "password": "meg123"
        }
        ```

Hit "SEND"!

Then, scroll down to see the server response. You should see a JSON object with a token value.

# Break

#### Log In

In the user controller, we will create a method to handle `post` requests to create a token when a user logs in. It will:

- Receive sign-up form input (email and password) from the browser
- Query the database for that user
- Verify the password sent from the browser matches the password in the database
- Generate a JWT holding the user id
- Send the JWT back to the browser

In `/controllers/users.js`:

```
router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            if (user.password === req.body.password) {
                var payload = {
                    id: user.id
                }
                var token = jwt.encode(payload, config.jwtSecret)
                res.json({
                    token: token
                })
            } else {
                res.sendStatus(401)
            }
        } else {
            res.sendStatus(401)
        }
    })
    } else {
        res.sendStatus(401)
    }
})
```

#### Testing Log In with Postman (0:05 / 2:05)

In Postman:

- Uhoose POST verb
- Url: `http://localhost:3001/users/login`
- Headers:
    - Key: 'Content-Type'
    - Value: 'application/json'
- Body:
    - Raw
    - JSON (application/json)
    - ```
        {
            "email": "bigpoppacode@email.com",
            "password": "meg123"
        }
        ```

Hit "SEND"!

Once again, you should see a JSON object with a token value sent in a response.

### Front End: Log In and Sign Up

## WARNING! Keep your backend server running!

#### Starter Code

- Open a new terminal window (keep your backend server running)
- CD into the front-end of `Walk It Out`. and once inside npm install

```
$ npm install
```

Take 5 minutes to review the starter code. Look through:

- components
- any API calls
- forms


### AXIOS
Before we get started in the front end, we are going to be learning a new tool today called `Axios`. 


#### What it does
In a nutshell, `Axios` is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API. Great, so from that we gather it does something that we can already do and that has recently been made significantly better… So why bother?

```js

// fetch request
const baseUrl = 'http://localhost:3000/fruits';

fetch(`${baseUrl}/`).then(res => res.json()).then(res);

// axios request
const baseUrl = 'http://localhost:3000/fruits';

axios.get(`${baseUrl}/`).then(res => res)

```

#### Sign Up

When you go to the starter code in the `SignUpForm.js` component, you'll see that the form input fields fire off a few different methods. When the methods start with `this.props...`, you know the methods have been passed through from the parent component (in this case, `App.js`).

In `App.js`, the method for `handleInput` is already defined.

Next we need to code functionality for the `handleSignUp` method. Given that this form is taking user input to be put into the database, we'll want to make an `axios` request to the server. In `App.js` in `handleSignUp`:


```
  handleSignUp(e) {
      e.preventDefault()
      axios.post('http://localhost:3001/users/signup', {
          email: this.state.email,
          password: this.state.password
        })
          .then(response => {
              localStorage.token = response.data.token
              this.setState({
                  isLoggedIn: true
              })
          })
          .catch(err => console.log(err))
  }
```

This takes the input from the form and creates a new user with that information. Per our set up on the back end, the server sends a token back to the browser in response.

In your command line, start up the app in the browser with `npm start` to test out the sign up feature.

> More on the [localStorage object](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Log Out

When you've gained the ability to sign up, you'll want to incorporate logging out functionality. Refer to the `LogOut.js` component.

In `LogOut.js`, you'll see a form firing `this.props.handleLogOut`. To give this method functionality, fill in the `handleLogOut` method in `App.js`:

```
  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }
```

This sets the email and password properties in state back to empty strings, changes the state `isLoggedIn` property to false, and clears the localStorage of JWTs.

#### Log In (5 min / 2:30)

The final functionality we need is the ability to log in. In the `LogInForm.js` component, there is a form that uses `handleInput` (already written) and `handleLogIn` (needs to be written) methods in the parent component.

In `App.js`, fill out the `handleLogIn` method with:

```
  handleLogIn(e) {
    e.preventDefault()
    axios.post('http://localhost:3001/users/login', {
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
            localStorage.token = response.data.token
            this.setState({
              isLoggedIn: true
            })
        })
        .catch(err => console.log(err))
  }
```

As written in the back-end code, this has the server verify the user information with the database and creates a JWT token to be passed back to the browser, which is then stored in localStorage.

Your app now has functionality to sign up, log out, and log in, using passport authentication with JWTs.


## HUNGRY FOR MORE

- We used Create React App for the front end of this exercise. Want to learn more? Read through this markdown! [Create React App](https://git.generalassemb.ly/misteroh/SEIR-FLEX-ADA-INSTRUCTOR/blob/master/unit_3/w16d3/instructor_notes/create_react_app.md)
- Notice that if you try to sign up with the same username you get an error. How could you tell the user that this user account already exists?
- Try implementing a login in your `todo_starter_router` application


### Additional Resources on using JWTs in MERN apps

- https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
- https://hptechblogs.com/using-json-web-token-react/
- https://blog.jscrambler.com/implementing-jwt-using-passport/
- [FAQs: Authentication with tokens (vs cookies)](https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies/#token-oauth)
- [Using bcrypt](https://jonathas.com/token-based-authentication-in-nodejs-with-passport-jwt-and-bcrypt/)
- [Passport documentation](http://www.passportjs.org/docs/)
