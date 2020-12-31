![](/ga_cog.png)

---
Title: Biscoff Bakery<br>
Type: Lab<br>
Creator: Thom Page<br>
Adapted By: Jerrica Bobadilla<br>
Topics: Adding views for reading and creating data

---

# Biscoff Bakery
![](https://i.ytimg.com/vi/CIGk1sgCfSg/maxresdefault.jpg)

A new bakery specializing in Biscoff-inspired sweets (Biscoff being the cookie that was translated into delicious cookie butter, this cohort's namesake!) is opening up soon and has asked you to help get their website started. They've given you some data to work with, but it's up to you to add some view layers to the app and add in some functionality that will allow the owners to add new baked goods when needed. Let's get started!

## Starter Code
You can find the starter code for this morning's lab in `student_labs/warm_up/biscoff-starter` -- work in that folder!

#### Provided in the starter code
1. `server.js` has a basic express server up and running, along with routes for *index* and *show*

1. `package.json` and `package-lock.json` have already been generated with express as a dependency
    - _Remember:_ what terminal command should you run to install dependencies from a package.json file?
    `npm install` or `npm i`

1. `models/bakedgoods.js` holds your 'database' for this app, in this case a bunch of cookie butter based baked goods!

## Activity
Currently, the *index* and *show* routes only sends JSON data to the browser -- update the routes so that there are actual view pages for both

### Adding Views
1. On the **index page**, display the names and prices of all the baked goods
    - Make it so that the names are links to the baked good's show page

1. On the **show page**, display the name, price, and image of the baked good
    - Provide a link somewhere on the show page that lets the user return to the index

Now, the bakery owners want the ability to add new baked good products.
1. Create a route and dsiplay for adding a new item.
1. Create a route to handle the post request and return the user to the index


### Hungry for More? 
1. Learn about express static in order to learn how to link a css file to your app [read those docs!](https://expressjs.com/en/starter/static-files.html) Go ahead and dive right in! 
1. Practice some CSS/design and style the app! Want practice with using CSS frameworks? Consider using [Skeleton](http://getskeleton.com/), [Materialize](http://materializecss.com/), [Bulma](https://bulma.io/), or find another of your choosing!
1. Ask for help if you want help setting this up!s