![](/ga_cog.png)

---
Title: Animal Shelter<br>
Type: Lab<br>
Creator: Jerrica Bobadilla<br>
Competencies: Express app with full CRUD and React Front End

---

# Sunny Philadelphia Animal Shelter

![](https://phz8.petinsurance.com/-/media/all-phz-images/2016-images-850/dogandcatonbed850.jpg)

## Activity

> The Sunny Philadelphia Animal Shelter has been looking for volunteers to set up their website, so you offered your help because what better way to add onto your resume and use your newly aquired knowledge for web development? Let's get started, there are animals that need to be adopted!

### Set Up

1. In today's `student_labs` folder, `mkdir sunny_shelter` and `cd` into it
1. `npm init`
1. Set entry point as `server.js`
1. `touch server.js`
1. `npm i express`
1. Set up your express server -- this should be easier now after unit 2, but if you need a refresher look back at the notes!

## Creating the Express API

> Set up a full CRUD Express API for the animals that will be listed on the website as up for adoption. Since we have no frontend at this point just yet, test to make sure your routes are working as you go along by using `curl`. NOTE: remember that we're creating an _API_, so our data will be JSON.

### Guide

1. Create a controller for the animals
1. Initialize mongoose
1. Create an animal model, a sample schema can be found below:

    ```js
    {
      name: String,
      species: String,
      breed: String,
      sex: String,
      image: String,
      age: Number,
      adopted: Boolean
    }
    ```

1. Make a create route
1. Make an index route
1. Make a delete route
1. Make an update route
1. Again, remember to check all your above routes work by testing it with `curl`

> :dog: Day 1 Lab ends here, if you finish early, feel free to try and carry on with the other tasks below! Or brush up on vanilla JavaScript by finishing the morning exercise or doing some [hackerrank](https://www.hackerrank.com) or [codewars](https://www.codewars.com) code challenges


### DAY 1 STOP HERE: We will be continuing this lab over the course of the week. Stop here after day 1 as we do not yet have the skills to move forward!
1. **BONUS** Try setting up the React front end and JUST render some text! 
1. **BONUS 2** Try adding some data to your database via CURL and then trey fetching that data with React to display it in the front end!

## Consuming the API with React

> Now that we have an API, we want to actually connect it to a front-end. So, let's go ahead and create the front-end of the Animal Shelter's website that will use our API data.

### Guide

1. Set up your static files (i.e. the `public` folder that will hold all our static files, like the `index.html`)
1. Set up react src scripts
1. Don't forget to connect your app.js to your `index.html`
1. For now, we just want to make sure our front-end works with our API, so create a form in your `index.html` to create a new animal to be put up for adoption
1. Connect that form to your react app controller so that when you submit the form, it'll make an AJAX request to our API and create the new animal
1. Make sure you were able to create successfully! (e.g. checking your mongo database)
1. Now that we have animals created, let's get them all displaying on the `index.html`
1. Upgrade your create route in your react app controller so that when you create a new animal, it automatically adds onto the `index.html` without having to completely refresh the page first

> :cat: This lab will mirror the class lectures and you'll be working on it again, so take your time

## Stretch Goals
1. Practice HTML/CSS by giving your animal shelter site some sweet styling
1. Go back and update the Todo list from the afternoon:
    - Create an edit link that shows a form for changing the description of the todo
    - The form should also have a delete button which deletes the item from the list entirely
    - Create a button to delete all checked items in the list
    - Change the todo model so that it has a "priority" number
    - When displaying all todos, order them by priority
    - Make buttons that will increase/decrease an item's priority
    - How do we deal with todos with the same priority?
