# Intro to Create React App 

![create react app starting index](https://i.imgur.com/CvgYaxk.png)

### Learning Objectives 

- Learn about Create React App
- Learn what some of the pros and cons of Create React App are
- Learn how to build an app with Create React App

---

## Development in 2019

If you've googled anything about what to learn to be a web developer, you've likely been overwhelmingly crushed by the number of tools, technologies and buckets full of acronym soup.

All of these tools are meant to solve problems. But with too many tools it can be a problem in and of itself. Which one(s) do you learn? Additionally, as new web devs a lot of the tools can seem like total magic and it can be really hard to to figure out what is what and it can even impede learning when you take on too much too fast. Especially when the documentation is not very good.

So we've been really selective about what we teach you guys, thinking about what will best serve you post-course. React, of course, is one of those. And along with teaching React, we thought it best to teach you about the `create-react-app` tool as well. 

#### What is create-react-app? 

A tool that, well, creates react apps quickly so that you don't have to spend a lot of time doing build configuration like installing/configuring other tools like Webpack or Babel. Create-react-app will spin up and configure a React environment for you so that you can get started with your app immediately and just focus on the code -- not the set up!

#### Create-react-app is official, meaning it's built by Facebook / React's creators and is meant for:

- Learning React in a comfortable and feature-rich development environment
  - It gives good errors, warnings, notes about best practices
  - Perhaps most helpfully, it also allows hot reloading with zero configuration on your end!
- Starting new single page applications
- Creating examples with react for your libraries and components

#### What it is typically not the best choice for:

- A sandbox where you just want to try some samples out - instead, try a simple html page like we did yesterday
- A mostly static site (for example, a portfolio or blog) - instead, try [Gatsby](https://www.gatsbyjs.org/)!
- Server side rendering - instead, look into [Next.js](https://github.com/zeit/next.js/)

> See more on the [create-react-app docs](https://github.com/facebook/create-react-app#creating-an-app)

#### Important takeaways: 

Soon you'll be on your own and you'll be trying to learn new things and get ready for job interviews. So, how do you figure out what to learn?

- Figure out what you want to build and THEN figure out the right tools
- Start small and then add what you need
- Look at the job market and learn something that seems to be popular in your area 

# Building a Playlist App with Create-React-App

![mockup](https://i.imgur.com/8EDoIsB.png)

We'll be building a playlist maker that looks like the above. 

## Getting Started 

There are multiple ways you can get started with create-react-app, and if you're interested in seeing the other ways, take a look at the [documentation](https://github.com/facebook/create-react-app#creating-an-app). For our purposes, however, we'll use one of the simplest methods.

To use create-react-app, in terminal you can use the command: `npx create-react-app app-name-here` 

**Things to note:**
  
  - The command will create a brand new directory and name it however you specify, so you *do not* need to create a new directory first, just run the command and it'll create it for you! 
  - The command will *automatically initialize git* inside the new directory that it creates
    - Since we don't want that when we're working inside our classroom repo, make sure to `rm -rf .git` in the root of the folder
    - When creating your own projects though outside of class, you of course usually want to keep git! 
  - The app generated is built in a node environment, so if you ever need to install any node packages, you can do so like normal!
    - e.g. `npm i react-router-dom`

### Let's create our Tunr app! 

- In today's `student_examples`, run: `npx create-react-app tunr_app` 
- `cd tunr_app`
- `rm -rf .git`

Then, to start a generated react app, all you have to do is run: `npm start` and  it'll both start the server for you and open the relevant localhost in your browser. 

## What Create-React-App Generates 

Let's see what files create-react-app creates for us by: 

  - Opening another terminal tab 
  - Open the directory up in `code .` 
  
Once you have it open, we should see something similar to:

![](https://i.imgur.com/2pW2Oqr.png)

Let's take a closer look at each folder

### The public folder: 

![](https://i.imgur.com/cCZoYUN.png)

The public folder, similar to how it was in angular, just holds a bunch of static assets. When first created, it just has:

  - A `favicon.ico` which refers to the icon in the tab of the browser 
  - An `index.html` which is, of course, the index that will load in the browser and where we'll render all our React components 
  - A `manifest.json` which isn't pertinent to us, but you can read more about [here](https://developer.mozilla.org/en-US/docs/Web/Manifest)
  
You can put other things like images or other static files here  as well. 

### The src folder: 

![](https://i.imgur.com/ic6Pvpp.png)

The src folder is where a lot of the react magic happens. This is where you'll want to put all your components. When first created, though, it has a bunch of other things as well. So, let's take a closer look at each: 

  - `App.css` denotes a different way to organize and use CSS that what we're used to called CSS modules. For sake of ease, we won't be going  over this way in class and will stick to something much more familiar to us, but if you're interested in learning about this, look at the [official documentation](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)! 
  - `App.js` is the main, top-level React component that'll be rendered. Consider this somewhat similar to how in angular you had a main `index.html` that you would put partials into, the App.js is kind of like that. 
  - `App.test.js` is a test file. Unfortunately, we had no time to cover test driven development (TDD) in this class, but essentially what this file does is check if the app doesn't crash, then it'll load the app. If it does crash, it'll give you errors. 
  - `index.css` is a regular css file like we're used to. If you don't want to look into CSS modules, just stick to writing all your css in here like normal!
  - `index.js` is the file that actually renders our react App onto our `index.html`. Basically, this is where a lot of the magic happens, and all you need to know is if you create React components in the `src` folder and import/render them where necessary, your app will magically work
  - `logo.svg` is just the spinning react symbol that loads when the app first runs. SVG stands for scalable vector graphics and is a pretty interesting technology to look into as a bonus if you're interested. But, we really don't need this file at all. 
  - `serviceWorker.js` helps us interact with our app in the browser, as opposed to having an Express app serving our web pages. Again, there's a lot of magic going on here behind the scenes, so if you're interested in learning more you can [read on here](https://developers.google.com/web/fundamentals/primers/service-workers/)
  
### Testing it out 

Let's just see some of the create-react-app magic in action first before we go ahead and make it our own app. 

- Open the `App.js` file in the `src` folder 
- Remove the text inside the `p` tag and put some of your own words in there, like so: 
  ![](https://i.imgur.com/AVidYO4.png)
- Once you save the file, take a look at your browser -- your words should be displayed. Whats better, notice how you didn't even have to refresh the browser manually! :tada:

  ![](https://i.imgur.com/vwMvYgZ.png)
  
## Setting Up the Tunr App 

Wonderful, now that we know a bit more about create-react-app and how it works, let's build our small little playlist app with it. 

### Starter CSS 

To save time, we won't be live-styling the app so I just went ahead and styled the app for us. Replace the `index.css` with the code below 
<details><summary><strong>Click to see the CSS</strong></summary><p>
  
  
```css
/* ====================
        VARIABLES
 ==================== */
 :root {
   /* fonts */
   --font: 'Roboto Mono', monospace;
   --accent-font: 'Roboto Condensed', impact;
   /* colors */
   --red: #A93F55;
   --blue: #19323C;
   --lighter-blue: #5c7d8b;
   --purple: #484D6D;
 }
/* ====================
        GENERAL
 ==================== */
body {
  font-family: var(--font);
  font-size: 0.8em;
  color: #444;
  background: whitesmoke;
}
.tunr-container {
  width: 30em;
  margin: 3em auto;
  padding: 1.2em;
  background: white;
  border-radius: 10px;
  box-shadow: 2px 2px var(--purple);
}
::-webkit-scrollbar-track {
  background-color: whitesmoke;
}
::-webkit-scrollbar {
  width: 2px;
  height: 5px;
  background-color: whitesmoke;
}
::-webkit-scrollbar-thumb {
  background-color: #e3e3e3;
}
/* ====================
        HEADER
 ==================== */
header {
  border-bottom: 3px solid var(--red);
  padding-bottom: 1em;
}
header h1 {
  font-family: var(--accent-font);
  font-size: 4em;
  text-transform: uppercase;
  color: var(--blue);
  text-shadow: 1px 1px #ccc;
  padding: 0;
  margin: 0;
}
header h2 {
  color: var(--purple);
  font-size: 0.9em;
  text-transform: uppercase;
  text-align: right;
  padding: 0;
  margin: 0;
}
/* ====================
        PLAYLIST
 ==================== */
.playlist > h1 {
  font-family: var(--accent-font);
  text-transform: uppercase;
}
/* ====================
        SONGS
 ==================== */
.songs {
  height: 20em;
  padding: 0 1em;
  box-sizing: border-box;
  overflow: auto;
}
.song {
  display: grid;
  grid-template-areas: "song artist heart"
                       "time time time";
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr 2fr 0.2fr;
  border-bottom: 1px solid #eee;
  margin-bottom: 1em;
  padding-bottom: 1em;
}
.song:last-of-type {
  border-bottom: 0px;
}
.song:hover {
  cursor: pointer;
}
.song h1 {
  grid-row-start: song;
  color: var(--lighter-blue);
}
.song h2 {
  grid-row-start: artist;
}
.song h3 {
  grid-row-start: time;
}
.song h4{
  grid-row-start: heart;
  color: var(--red);
}
.song h1, .song h2 {
  font-size: 0.9em;
  padding: 0;
  margin: 0;
}
.song h3, .song h4 {
  font-size: 0.8em;
  padding: 0;
  margin: 0;
}
.song h2, .song h4 {
  text-align: right;
}
/* ====================
        FORM
 ==================== */
form:before {
  content: 'ADD A NEW SONG';
  display: block;
  font-family: var(--accent-font);
  font-size: 2em;
  margin: 0.5em 0;
}
form label {
  display: block;
  text-transform: uppercase;
  font-size: 1em;
  margin: 0.5em 0;
  color: var(--lighter-blue);
}
form input {
  display: block;
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
}
form input[type="submit"] {
  margin: 0.8em 0;
  text-transform: uppercase;
  font-family: var(--accent-font);
  font-size: 1em;
  background: var(--red);
  color: whitesmoke;
  border: 0px;
}
form input[type="submit"]:hover {
  cursor: pointer;
  box-shadow: 2px 2px var(--blue);
}

```
  
</p></details>

### Rewriting `App.js` 

The generated `App.js` starts with a lot of showcase code that we don't need, so let's go ahead and just erase it all and start it from scratch. 

```js
// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react'; 

// ===================
// COMPONENT
// ===================
class App extends Component {
  render() {
    return (
      <div>
      
      </div>
    );
  }
}

// ===================
// EXPORT
// ===================
export default App;
```

Our component should now look more familiar to how we learned them yesterday as class components. The only difference now is the `import` and `exports`. 

Yesterday, we just used the React CDN links and plopped them into our `index.html` so that we could use all the React classes like the `React.Component` class, for example. We did that just so we could much easier just jump straight into React in a sandbox-like environment. 

Now that we're using create-react-app, however, remember that it builds the app in a node environment. So, similar to how in our express apps we were able to just require dependencies and use them as needed, that's what we're doing here when importing React and its Component class. 

The export is also similar to how we've used it in our express apps in the past, we just need to export the class so that it can be imported (required) and used elsewhere. 

<details><summary><strong>Notes on what the bracket means in the import statement</strong></summary><p>
  
  > The 'react' module that we're importing comes with something called a default export (the basic React stuff) and other named exports, like Component. 
  >
  > So, when we say `import React from 'react'` we're saying, import all the default exports from the react package and save it as a variable React that we can then use in our App.js
  >
  >Then when we add `import React, { Component } from 'react'` we're saying the same thing as the above, but also save the named Component export as a variable of the same name (Component) so that we can use it explicitly in our App.js
  >
  >Technically, if we wanted to, we don't have to add the `{ Component }`, and then we'd just have to change our App class to something more like you did yesterday: 
  >
  >`class App extends React.Component` 
  >
  >But it's more common practice to just import the Component export explicitly and shorten the class declaration to:
  >
  >`class App extends Component`
  >
  >You can see even more detail about this syntax in the [import documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

</p></details>

Note that for every component you make you will always have to `import` React and `export` your component 

### Adding onto `App.js`

Now that our App.js is cleaned up and makes more sense, let's go ahead and add stuff to it to make it look more like our mockup! 

- Add a class of `tunr-container` to the outer div 
- Create a `header` element and create an `h1` and `h2` inside 

```html
<div className="tunr-container">
  <header>
    <h1>Tunr.</h1>
    <h2>For all your playlist needs</h2>
  </header>
</div>
```

### Adding some 'data' 

For now, since we're not interacting with any sort of database, let's just create a `data.js` file in our `src` folder 

<details><summary><strong>Then add this data</strong>:</summary><p>
  
  ```js
  const playlists =
  {
    title: 'Playlist 1',
    created: Date.now(),
    songs: [
      {
        artist: 'Talking Heads',
        title: 'Once in a Lifetime',
        time: '3:37',
      },
      {
        artist: 'The Clash',
        title: 'Lost in the Supermarket',
        time: '3:44',
      },
      {
        artist: 'Peter Gabriel',
        title: 'Shaking the Tree',
        time: '7:24',
      },
      {
        artist: 'Slowdive',
        title: 'Don\'t Know Why',
        time: '4:42',
      },
      {
        artist: 'Joanna Serrat',
        title: 'Keep on Fallin\'',
        time: '4:47',
      },
      {
        artist: 'Tullycraft',
        title: 'Hearts at the Sound',
        time: '3:44',
      },
      {
        artist: 'Dead Sara',
        title: 'Something Good',
        time: '4:39',
      },
      {
        artist: 'Chaka Khan',
        title: 'Like Sugar',
        time: '4:01',
      },
      {
        artist: 'Alvvays',
        title: 'Lollipop (Ode to Jim)',
        time: '4:39',
      },
      {
        artist: 'Mazzy Star',
        title: 'Flowers in December',
        time: '4:23',
      }
    ]
  }

  export default playlists
  ```
</p></details> 

Cool, now let's import that data into our `App.js`. Let's also log it so we can make sure it's imported correctly 

```js
// data
import playlist from './data.js'
console.log(playlist)
```

Now that we have data, let's save it to our App's state so we can add onto it when needed later on 

### Creating state 

Recall, to create state in our class components, we need to first create a constructor function (and don't forget `super()`!), then we can define `this.state` so, let's do so at the top of our App component and add a key of 'playlist' into the state with a value of our imported data: 

```js
constructor() {
  super()
  this.state = {
    playlist: playlist
  }
}
```

Check in the React console to make sure our state was defined correctly:

![](https://i.imgur.com/4OlvM39.png)

## Displaying our Data

Based off our mockup (and the starter css), let's go ahead and build out the playlist section of the app. Let's organize our code like so: 

  - Create an outer div with a class of `playlist` to hold all the playlist information 
  - Create an `h1` inside the `playlist` div that will display the name of the playlist 
  - Create a div inside the `playlist` div with a class of `songs` to hold all the songs in the playlist 
  - Create a div inside the `songs` div with a class of `song` that will display information for one song
    - Each song has a title, artist, and time. Display all of them in that order in decreasing header sizes inside of the `song` div
  
For now, let's just hardcode it so that we see the first song in the playlist. Our final code should look like so: 

```jsx
<div className="playlist">
  <h1>{this.state.playlist.title}</h1>
  <div className="songs">
    <div className="song">
      <h1>{this.state.playlist.songs[0].title}</h1>
      <h2>{this.state.playlist.songs[0].artist}</h2>
      <h3>{this.state.playlist.songs[0].time}</h3>
    </div>
  </div>
</div>
```

Great! Now that we got it working for one song, let's display _all_ the songs by using  the `map` function like so: 

```jsx
<div className="songs">
{this.state.playlist.songs.map (song => {
  return(
    <div className="song">
      <h1>{song.title}</h1>
      <h2>{song.artist}</h2>
      <h3>{song.time}</h3>
    </div>
   )
 })}
</div>
```

Nice! It works great on the browser, but if we look at our console we get an error. Remember, as was mentioned in the beginning, a nice thing that create-react-app does is give you warnings so that you follow best practices. In this case, it's telling us the practice of giving each mapped out element a unique 'key' prop. In order to do so, let's add the `index` argument to our map function so we get what index in the array each song is and just use that as the key. 

```jsx
<div className="songs">
{this.state.playlist.songs.map ((song, index) => {
  return(
    <div className="song" key={index}>
      <h1>{song.title}</h1>
      <h2>{song.artist}</h2>
      <h3>{song.time}</h3>
    </div>
   )
 })}
</div>
```

> _NOTE:_ Since this is fake data, the way we're using the array index is fine, but when you start building your own apps with real data and databases, use `id` instead!

### Capturing New Data

Now that we've successfully displayed our data, the next obvious step is to allow users to add new data. So, let's go ahead and do that by first setting up a form like we learned yesterday.

### The form

Underneath the div with a class of `playlist`, let's go ahead and create a form element with text inputs for title, artist, and time. 

```jsx
<form>
  <label htmlFor='title'>title</label>
  <input type='text' value={this.state.title} id='title'/>
  <label htmlFor='artist'>artist</label>
  <input type='text' value={this.state.artist} id='title'/>
  <label htmlFor='time'>time</label>
  <input type='text' value={this.state.time} id='time'/>
</form>
```

### Handling change 

Let's create the event handler that'll handle our App state every time a change is made in the input 

```js
handleChange(e) {
  this.setState( { [e.target.id]: e.target.value } )
}
```

And don't forget to bind this to the constructor 

```js
  this.handleChange = this.handleChange.bind(this)
```

Then, of course, we need to actually have a listener on our inputs so that it'll call on our `handleChange` method every time the user types something in the input box. So, let's add `onChange={this.handleChange}` to all three of our inputs: 

```jsx
<label htmlFor='title'>title</label>
<input type="text" value={this.state.title} onChange={this.handleChange} id="title"/>
<label htmlFor='artist'>artist</label>
<input type="text" value={this.state.artist} onChange={this.handleChange} id="artist"/>
<label htmlFor='time'>time</label>
<input type="text" value={this.state.time} onChange={this.handleChange} id="time"/>
```

And lastly, let's add the needed fields with empty values to the app's state. In this case, we want title, artist, and time. So our state should now look like:

```js
this.state = {
  playlist: playlist,
  title: '',
  artist: '',
  time: ''
}
```

Recall from yesterday:

  - `e` refers to the event that it's listening to
  - We can't mutate state directly, thus we have to use `this.setState` 
  - Because we'll be handling change across three different inputs, which object key in our state we want to update is going to be variable, thus we have to use object bracket notation so that we can select the correct key that's named after the `e.target.id`
  - We want to set the value of said key to equal whatever the user is typing inside that input, hence `e.target.value` 
  - We have to `.bind(this)` method to the constructor in order to fix the context of `this` inside the method 
  
### Handling submit

Now that we've handled the change, we need to handle the submit so that we can actually add the data. Let's start small first by adding the `onSubmit` event listener onto the form 

```jsx
<form onSubmit={this.handleSubmit}>
```

Let's now add a submit button at the bottom of our form 

```jsx
<input type='submit' value='add new song' />
```

Now the hardest part, let's write the event handler that'll, well, handle the submit! Let's think about how we want to do this first. As a general overview, what we want to do is: create a new song object based off what the user inputted and add that song object into our playlist's song array. 

So, let's start with that. Let's just create the new song object based off the user input. Remember that we set the user input as values in our App's state, so we can utilize that like so: 

```js
handleSubmit(e) {
  // prevents default behavior of submitting a form
  e.preventDefault()
  // creating the new song object based off user input 
  const newSong = {
    title: this.state.title,
    artist: this.state.artist,
    time: this.state.time
  }
}
```

Cool, we have our new song now but remember, we cannot just `.push` this song into `this.state.playlist.songs` because we shouldn't mutate state directly. We have to use `this.setState`. 

There's still a slight problem there in that **we can't** just say something like

```js
this.setState({ 
  playlists: {songs: [newSong]},
  title: '',
  artist: '',
  time: ''
})
```

Because that would replace the old songs array _entirely_ with just our newSong object. Which, of course, is not what we want since we just want to add onto it. 

So, what we have to do instead is create a new array and utilize the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) so that we will not only add our newSong into the array, but also all the songs that currently exist in the playlist. 

Once we do that, then we can setState.

```js
handleSubmit(e) {
  // prevents default behavior of submitting a form
  e.preventDefault()
  // creating the new song object based off user input 
  const newSong = {
    title: this.state.title,
    artist: this.state.artist,
    time: this.state.time
  }
  // creating the new array based off our newSong and the current playlist song array 
  const newSongArray = [newSong, ...this.state.playlist.songs]
  // set the state  with the newSongArray and resetting the title/artist/time values back to empty strings to clear the inputs 
  this.setState({
    playlist: {
        created: this.state.playlist.created,
        title: this.state.playlist.title,
        songs: newSongArray
    },
    title: '',
    artist: '',
    time: ''
  })
}
```

Great, it works! And just like that, we were able to make a mini application with create-react-app with again zero configuration on our end, we just jumped right into the react code. So, now that we're able to do it on our top-level App component, let's go forward a little more by compartmentalizing our code into new components to see how we can import them.

## Creating and Importing New Components 

To create new components, you can just create them directly in the `src` directory if you'd like. However, for organization sake, let's just create a `components` folder inside `src` and put all our component files there so that all our top-level stuff is, well, at the top level of the directory! 

#### In terminal 

- Make sure you're at the root of your project folder (in the same  level as `package.json`) 
- `mkdir src/components`
- `touch src/components/Playlist.js`

#### In src/components/Playlist.js 

Set up a basic component! Just like we did with App earlier, except this time name our class Playlist and inside the div, just put in some text to make sure we're rendering the correct component 

```jsx
// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react'; 

// ===================
// COMPONENT
// ===================
class Playlist extends Component {
  render() {
    return (
      <div>
        this is the playlist component
      </div>
    );
  }
}

// ===================
// EXPORT
// ===================
export default Playlist;
```

You'll notice if you save, nothing changes on your browser. That's because we haven't rendered this component anywhere yet. Remember, the only thing getting rendered is our top level component App. So, in order to show this component we have to import it into App and display it there. 

#### In src/App.js 

Somehwere at the top of the file after your other imports, import Playlist:

```js
import Playlist from './components/Playlist'
```

Now we can use the component as an element inside our render method, so to just test it out for now let's go ahead and add it right below our header:

```js
</header>
<Playlist />
```

_Now_ if you take a look at your browser after saving, you should see your text being rendered! :tada: 

---


## Hungry for more?

- Continue working on your app! Can you build out more page? More components? Add a router?
- Try adding your own styles or making it responsive!