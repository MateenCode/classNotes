[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Poke Express

![](https://i.imgur.com/rRKtN1B.jpg)

Make a Pokemon app that displays data inside server-side rendered views.

#### Learning Objectives

- Practicing index and show routes with express

#### Prerequisites

- JavaScript
- Express
- Node
- JSX

---

## The User Stories 

- When a user goes to the `/pokemon` route they will see an `index` of pokemon: the names of each pokemon rendered to the page.
- When a user clicks on the name of the pokemon, they will be taken to that pokemon's `show` page, and will see the pokemon's name and image.

## Let's Start Catching 'em All!

### Set up the file structure 

**In terminal:**
- inside your homework folder:
  - `mkdir pokemon_app`
  - `cd pokemon_app`
  - `mkdir views`
  - `touch views/Index.jsx`
  - `touch views/Show.jsx`
  - `mkdir models`
  - `touch models/pokemon.js`
  - `touch server.js`
  - `touch .gitignore`
  - `npm init -y`
- <details><summary>Approximate File Structure</summary>

  ![file structure image](https://i.imgur.com/qQOzEFR.png)
  
  **IMPORTANT! This image is a rough outline for you to double check which main folders should be nested or on the same level. If you just have one file, it could be argued that you don't need a folder for it. But as your apps grow, you'll need to get more organized and definitely use folders. Be consistent and adjust your routing, as needed. 

</details>

<hr>
&#x1F534; Commit: <br>
"All my files are created"
<hr>

### Install NPM packages

**In terminal:**
- Make sure that you are on the same directory level as your `package.json` (why?)
- `npm i express`
- `npm i express-react-views react react-dom`
- check your `package.json`
- <details><summary>Approximate package.json</summary>

  ![package.json](https://i.imgur.com/EizWG5y.png)

</details>



<hr>
&#x1F534; Commit: <br>
"All my npm packages are added"
<hr>

### Set up your server

-**In your `server.js` file, set up your server**
   - require express
   - set `express()` to a variable
   - set a variable of `port` to `3000`
   - set your app to listen to the port and include a `console.log()`, so that you can tell when your server is running
   - include a get route `/` that will `res.send('Welcome to the Pokemon App!');` so that when you got to `localhost:3000`, you will see `Welcome to the Pokemon App!`
- **In terminal**
  - `nodemon` or `nodemon server.js` (if you set your `package.json` to start `server.js` you do't need to put it after `nodemon` )
      - **GOTCHA!** : `nodemon` will only work if you run it from the same location as your `package.json`
- **In the browser**
   - go to `localhost:3000`
   - check that you have your `Welcome to the Pokemon App!` message displaying

<hr>
 &#x1F534; Commit: <br>
 "My server is set up and running"
<hr>

### Set up your _'database'_
- You have created a file called `pokemon.js`
- Inside of this file, put the following array of pokemon objects. This is your 'database' for tonight's homework, copy and paste it **as is**! You'll notice the image url's are missing something, this is _intentional_, do not edit anything directly inside the 'database'! 

```
const pokemon = [ 
			{name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
			{name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
			{name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
			{name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
			{name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
			{name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
			{name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
		 ];

```
- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`
- Set this 'database' to a variable called `pokemon` in your `server.js` file
- Create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as json in the browser

<hr>
&#x1F534; Commit: <br>
"Connected my database, can see json in the browser"
<hr>

### Set up your index view

- Instead of displaying json at your `/pokemon` route, you should serve the `Index.jsx` file you created that will display your pokemon
- You will have to set up your jsx file
  - Start with your html boilerplate code
  - Add an `<h1>` that describes this page, i.e. 'See All The Pokemon!'
  - Try adding some inline styles:
    - We can add inline CSS, which are specified as attributes and are passed to the elements. These are specified as an object with a key as camelCased style name & value being the actual style value (and not as a string).
     ```js
      const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
      };

      class MyFirstComponent extends React.Component() {
        return (
          <div style={myStyle}>My First React Component!</div>;
        }
      }
    ```
 
- Change your `/pokemon` route to `res.render` your `Index.jsx` file
- In your browser, go to `localhost:3000/pokemon` and be sure to see your `Index.jsx` view with an `h1` tag


<hr>
  &#x1F534; Commit: <br>
  "index.jsx view rendered at pokemon route"
<hr>

### Set up your index view to show your pokemon data
- Continue working on your `Index.jsx` view so that you can see:
  - The name of each pokemon, as a list item, inside an unordered list
  - This list should be dynamically rendered by jsx based on your data from your 'database'
  - You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data **programatically** to capitalize the first letter of their names

<hr>
    &#x1F534; Commit: <br>
    "I can view a list of all my pokemon in the browser"
<hr>

### Setting up your show route

- Inside your `server.js`, add a new get route `/pokemon/:id`
- That will `res.send(req.params.id);`
- So, when you go to `localhost:3000/pokemon/whatever`
 - `whatever` will show up in the browser

<hr>
   &#x1F534; Commit: <br>
   "Show view shows req.params.id "
<hr>


### Link your `Index.jsx` to your `Show.jsx`
 - Inside your `Index.jsx`,
   - For each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemon/x`, where x is the array position of the `pokemon` in the data array. This should be set dynamically with jsx
   - When you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

<hr>
   &#x1F534; Commit: <br>
   "Added dynamic anchor tags to index.jsx "
<hr>

### Render your individual pokemon in the show view
- Copy/paste your code from your `Index.jsx`  into your Sshow.jsx`
- Change all your html code inside your `Show.jsx` file so that 
	- Your h1 tag says "Gotta Catch 'Em All"
	- Add an h2 tag that will display the name of the pokemon
	- Add an image tag that will display an image of the pokemon
	- Add an anchor tag with the text of `back`, that will take you back to your `Index.jsx` view
- Update the route in the server.js to render the show view with the pokemon data
- Oh no! The image is broken because in our database the image links don't have the `.jpg` ending, let's fix that **programatically**! _Without_ going back to the database and editing it there, add on `.jpg` to the end of the pokemon's image data 

<hr>
  &#x1F534; Commit: <br>
  "Created show views of each pokemon"
<hr>


## Hungry for More? 

1. Learn about express static in order to learn how to link a css file to your app (we'll be covering it tomorrow, but if you're interested in looking into it now: [read those docs!](https://expressjs.com/en/starter/static-files.html) Go ahead and dive right in!  Style your application with Bootstrap or any other CSS framework! Or really jazz up your app by adding some hand-rolled flourishes with css animations, jQuery and more!
1. Sign up for [Code Wars](https://www.codewars.com/) and try out a challenge (or a few!) in order to keep honing your JavaScript skills!


## Deliverables

An express app that meets all the user stories outlined in the beginning of this markdown.

## Technical Requirements
1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
 
### Submission Guidelines
Submit the Github link to your homework folder for this week using this [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform)

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
