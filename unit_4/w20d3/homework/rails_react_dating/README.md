

# RAILS-REACT DATING APP

<hr>
Title: Rails-React Dating App<br>
Type: Homework<br>
Creator: Thom Page<br>
Adapted from Angular 1.x to React by Karolin Rafalski
Topics: Rails API, CORS,  React, Flexbox<br>
<hr>

![](https://i.imgur.com/EFFIuoD.png)

Let's get Rails and React together on a date!

Let's hope they don't say yuck! Let's hope they can have a good time together! &#x1F37F;

* **Make a dating app using Rails and React that matches some characters for a get-to-know-you appointment**

# DATING APP - FRONTEND EXAMPLE

![frontend](http://i.imgur.com/a0luMDh.png)

![frontend](http://i.imgur.com/KkKfBuU.png)

**If the images above are not working please click on them to see them!**

Above is a potential frontend for the Dating App. The layout has a header, a column on the left, a column on the right, a middle column with the main content, and a footer. ie. The "[Holy Grail](https://en.wikipedia.org/wiki/Holy_Grail_(web_design))" layout.


## The App
Note that step-by-step directions are below. Refer to the *Start Here* section to begin.

### Required APP FUNCTIONALITY (Commits 1 - 6)

* Three random daters appear in each of the left and right columns.
* Add new daters with the form in the footer.

### HUNGRY-FOR-MORE APP FUNCTIONALITY (Commits 7 - 14)

* Mouse over on one side: user appears in the Match Box
* Mouse over the other side: user appears in the Match Box, and now that there are two users in the Match Box, the Match button appears.
* Click the match button: the daters come together and are randomly given either lovehearts or a failure message.
* Edit existing daters by clicking on them
* Expert styling
* Add animation to the Match process


<br>
<hr>

# &#x1F4EF; START HERE


## &#x1F685; Make Rails Server

* Make a directory `dating_app`

* Open up the directory in atom

* In the `dating_app` directory in Terminal, make a new rails app `dating_app_api` with the `--api` flag and postgresql as the db **and** `--skip-git`, and go into it

* Create the db `rails db:create`

Our model will be `user`, in the sense that we can match the (pretend) users of the app together.

A user will have:

* name (varchar)
* starsign (varchar)
* age (integer)
* img (text)
* likes to laugh and have a good time (can use something like `ltl` for your column name) - (boolean)

* Scaffold the app, and specify the integer datatype for `age`:

```
rails generate scaffold User name starsign age:integer img ltl:boolean
```

![](https://i.imgur.com/SlXMb0y.png)

* Check that the migration file has the correct fields for the upcoming migration:

![](https://i.imgur.com/7MAhSmJ.png)

* Migrate the migrations

* Check the `schema.rb`

![](https://i.imgur.com/ebC3YhF.png)

* Seed the db with the seed data below

In `db/seeds.rb`

```
User.create([
    {
        "name": "Ryan Gosling",
        "starsign": "Scorpio",
        "age": 35,
        "img": "http://coolspotters.com/files/photos/591533/ryan-gosling-large.jpg?1357449177",
        "ltl": true
    },
    {
        "name": " Hypatia of Alexandria  ",
        "starsign": "Aries",
        "age": 1700,
        "img": "http://static1.squarespace.com/static/53e031f1e4b088c3aac80e47/t/5636ebf1e4b0683b6c56cb43/1446440030277/hypatia.jpg",
        "ltl": true
    },
    {
        "name": "Hogan",
        "starsign": "Libra",
        "age": 40,
        "img": "http://myfivebest.com/wp-content/uploads/2010/10/crime_crane.jpg",
        "ltl": true
    },
    {
        "name": "Lumpy Space Princess",
        "starsign": "Virgo",
        "age": 29,
        "img": "http://i0.wp.com/www.drawcentral.com/wp-content/uploads/2013/03/Lumpy-Space-Princess.jpg?resize=150%2C150",
        "ltl": true
    },
    {
        "name": "Idris Elba",
        "starsign": "Virgo",
        "age": 43,
        "img": "http://www.ramascreen.com/wp-content/uploads/2015/01/Idris-Elba-Luther-150x150.jpg",
        "ltl": true
    },
    {
        "name": "The Trash Heap of Fraggle Rock",
        "starsign": "Taurus",
        "age": 1000,
        "img": "http://www.toughpigs.com/wp-content/uploads/2009/12/trasheap-150x150.jpg",
        "ltl": false
    },
    {
        "name": "Guy Guy",
        "starsign": "Gemni",
        "age": 60,
        "img": "https://s-media-cache-ak0.pinimg.com/236x/03/d1/53/03d153c14b49a88cab97d58a5bedb6e8.jpg",
        "ltl": false
    },
    {
        "name": "Raisin",
        "starsign": "Gemni",
        "age": 20,
        "img": "http://cdn.lifeinthefastlane.com/wp-content/uploads/2010/09/raisin.jpg",
        "ltl": false
    },
    {
        "name": "Jim",
        "starsign": "Leo",
        "age": 49,
        "img": "http://www.argylejournal.com/wp-content/uploads/2012/10/Jim-Ellinghausen-e1349993531939-150x150.jpg",
        "ltl": false
    },
    {
        "name": "Muttley",
        "starsign": "Capricorn",
        "age": 2,
        "img": "http://gifrific.com/wp-content/uploads/2012/08/Cartoon-Character-Mutley-Laughing-150x150.gif",
        "ltl": true
    },
    {
        "name": "Slimer",
        "starsign": "Pisces",
        "age": 90,
        "img": "http://orig13.deviantart.net/ef48/f/2014/309/1/5/slimer_by_bbjeg-d85exys.png",
        "ltl": true
    },
    {
        "name": "Mist",
        "starsign": "Aquarius",
        "age": 340000,
        "img": "http://www.kidthesaurus.com/wp-content/uploads/2015/07/mist-150x150.jpg",
        "ltl": true
    },
    {
        "name": "Ching Shih",
        "starsign": "Sagittarius",
        "age": 340000,
        "img": "http://treehouseletter.com/wp-content/uploads/2015/04/Ching-Shih-150x150.jpg",
        "ltl": true
    },
    {
        "name": "Galadriel",
        "starsign": "Sagittarius",
        "age": 7045,
        "img": "http://nerdbastards.com/wp-content/uploads/2015/12/Galadriel-and-Phial-150x150.jpg",
        "ltl": true
    },
    {
        "name": "Skeletor",
        "starsign": "Cancer",
        "age": 19,
        "img": "http://www.shwiggie.com/media/images/skeletor-smirk.jpg",
        "ltl": true
    },
    {
        "name": "Sauron",
        "starsign": "Taurus",
        "age": 198,
        "img": "http://ia.media-imdb.com/images/M/MV5BMTc0Njk5NDQwNl5BMl5BanBnXkFtZTYwNTU3NTky._V1_SX150_CR0,0,150,150_.jpg",
        "ltl": false
    }
])
```

> Note: all images are 150 x 150

* Run the seed

* Test that everything works

* To test your server you can:
	- Run it and open `localhost:3000/users` in in the browser
	- Open rails console and do a bunch of queries on the data
	- Use **Postman** or **cURL** to make POST, PUT, and DELETE requests.
	- Feel free to do as much damage as you like with **Postman** or **cURL**: you can always set your seed back to the default by running `rails db:reset`. This command will drop your databases, run your migrations again, and reseed the database.

> note you may have to go into your `users_controller.rb` and in the strong parameters at the bottom, remove `user` as required

### &#x1F389; RAILS SERVER DONE!

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 1: Made Rails server".
<hr>

<br><br>


## &#x1F684; Use Create React App



Keep your Rails server running and open a new tab in Terminal.

In the `dating_app` top-level directory, **above** your rails app `npx create-react-app dating_app_client`

- `cd dating_app_client`
- `mkdir src/components`
- `touch src/Hello.js`
- `npm start`

![Create React App File Tree](https://i.imgur.com/AuJ76AE.png)


- Create a custom component called `Daters`

**src/components/Hello.js**
```js
import React, { Component } from 'react';

class Daters extends Component {
  render () {
    return (
      <h1>Hello Dating World</h1>
    )
  }
}

export default Daters;

```

Remove the Create React BoilerPlate and Add in the Hello component that you built.

You will also need to change the `App` component from a functional Component to a Class Component, like in the snippet below.

**src/App.js**

```js
import React, { Component } from 'react';
import Daters from './components/Hello.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Daters />
      </div>
    );
  }
}

export default App;
```

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 2: Made React App".
<hr>

<br><br>

## &#x1F4D0; React - Module and Controller

**Get React ready to get some daters**

```js
class Daters extends Component {

  getDaters = () =>{
    fetch('localhost:3000')
    .then( daters => console.log(daters))
  }

  render () {
    return (
      <h1>Hello Dating World</h1>
    )
  }
}
```



<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 3: React module and controller".
<hr>

<br><br>

## &#x1F34E; Configure CORS

(7 mins)

In your Rails project, open up `config/initializers/cors.rb`

![](https://i.imgur.com/0KP1OFR.png)

Uncomment the code, and let's just make it so your localhost can access your Rails app.

![](https://i.imgur.com/t8IqiGy.png)

**RESTART your Rails app: it should NOT work**

It's broken, isn't it? That's because we didn't uncomment the `rack-cors` gem

In the Gemfile, uncomment the gem:

![](https://i.imgur.com/lKHkcGg.png)

In Terminal, run `bundle`.

Re-run your Rails server, refresh your Express page and make the AJAX request.

![](https://i.imgur.com/KzKtY7h.png)

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 4: Configured CORS".
<hr>

<br><br>



## Render your daters on Your page


Add state, store your daters in state

```js
import React, { Component } from 'react';

class Daters extends Component {
  state = {
    daters: []
  }

  componentDidMount() {
    this.getDaters()
  }

  getDaters = () =>{
    fetch('http://localhost:3000/users'
  )
    .then(res => res.json())
    .then(jsonedDaters => this.setState({daters: jsonedDaters}))
    .catch( error => console.error(error))
  }

  render () {
    return (
      <h1>Hello Dating World</h1>
    )
  }
}

export default Daters;
```

An example way to render your data

```js
render () {
  return (
    <>
      <h1>Hello Dating World</h1>
      {this.state.daters.map( dater => {
        return (
          <div key={dater.id}>
            <h3>Name: {dater.name} </h3>
            <img src={dater.img} alt={dater.name}/>
            <h4>Starsign: {dater.starsign} </h4>
            <h4>Age: {dater.age} </h4>
            {dater.ltl
              ? <h5> Loves to laugh and have a good time</h5>
              : <h5> Hates laughing, does not like having a good time</h5>
            }
          </div>
        )
      })}
    </>
  )
}
```


## &#x1F3CB; Flexbox Layout

(10 mins)

* Refer to the class notes from today for how to make a Flexbox layout with header, footer, columns, main content, etc. Or, use this [tutorial](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/), but for crying out loud, don't use the word `HolyGrail` in your class names. In fact, you can set the css just on the elements: `body`, `nav`, `aside`, etc.

![](https://i.imgur.com/53rO9fz.png)

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 5: Flexbox Layout".
<hr>

<br><br>

## &#x1F4D0; React - Display Users

* Make it so that 3 users are displayed on each side of the Match Box. Suggestions below:

* Make it so your Rails Index route serves up **only six random** daters. So then your React AJAX request only ever brings back six randos.

You can use `.sample` with an argument of 6 on your index route to get a random sample:

`dating_app_api/app/controllers/uers_controller.rb`:

![](https://i.imgur.com/3rqX8PB.png)

![](https://i.imgur.com/IrnP28m.png)

Figure out how to use Javascript to split this data up so that three of these are  on the left, and three are on the right. Remember, they have already been 'shuffled' so to speak by the Rails controller.

![](https://i.imgur.com/pnRuaOG.png)

When you refresh the page, a **new random batch** should populate on the page:

![](https://i.imgur.com/7QiJZAL.png)

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 6: Displayed users with React".
<hr>

<br><br>

# &#x1F354; HUNGRY FOR MORE?

## FINISH THE APP

## &#x1F4D0; React - Add A User

Put a form in the footer for adding a new user/dater. A dater has a `name`, `age`, `gender`, and `img`.

The form should have a submit to a function that will process the form data. 

Example:

![](https://i.imgur.com/w8zOL2M.png)

Form:

![](https://i.imgur.com/qudjQaA.png)


Write the function that will process the form upon submit.

The function should make an AJAX request to create a dater and console.log the result.

* Find a 150x150 image on the web of someone or something that wants to date. Enter the someone or something into the 'Add a Dater' form and add them to the list. If they don't show up on the sidebars, keep refreshing the page.

> All images should be 150 x 150, such as these Vitamin Chews: https://images-na.ssl-images-amazon.com/images/I/51GrSoP5g2L.SS150.jpg

* Clear the form by clearing the object you used for your formdata.

Console.log the created item, and clear the form:

![](https://i.imgur.com/gPgmBEp.png)

Keep refreshing the page to see your new dater randomly appear:

![](https://i.imgur.com/aOB2uay.png)

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 7: Added a user with React".
<hr>

<br>

## &#x1F4D0; React - Hover

- Make is it that when the user hovers on the user's sidebar images to make an enlarged version of the image appear in the central column.

- Make it so that when an image from the left _and_ and an image from the right are in the central column, a "MATCH" button appears.

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 8: Added hover".
<hr>

<br><br>

## &#x1F4D0; React - Match

When the match button is clicked, make it so that the button disappears and is replaced either with a successful or unsuccessful match message.

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 9: Added match".
<hr>

<br><br>

## &#x1F4D0; React - Repopulate The Page

When the title of the app is clicked, a new batch of random users will take the place of the old ones. (You can re-use the original $http request).

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 10: Repopulate the page".
<hr>

<br><br>

## &#x1F4D0; React - Update A User

Make it so that if you _click_ on a user's image (as opposed to hover over it), an edit form will appear in the central column.

The edit form should make a PUT request to the Rails server and **update** the user.

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 11: Added update user".
<hr>


<br><br>

## &#x1F64C; Why Not?: EXPERT STYLING

* Make it look special

<hr>

**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 12: I styled it."
<hr>

<br>


## Submission Guidelines
&#10004; Submit your project via [this google form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform).
