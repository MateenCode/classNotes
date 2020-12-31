[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Bookmark'd 

![](https://fthmb.tqn.com/N8UHZxApLqho5sUDbpSRyEy1tV8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bookmarks-56d0cca45f9b5879cc7123a4.jpg)


1. Build a bookmark app that lets you add a title and a link to helpful websites in your coding journey.


#### Learning Objectives

- Full CRUD app with React frontend

#### Prerequisites

- Git
- JavaScript
- Node / Express
- Mongo / Mongoose
- ReactJs

---

## The Bookmarks App

You will be building an app that lets you add a title and a link to helpful websites in your coding journey. When you click on a title, it should take you to the linked website. 

**GOTCHA** - when testing it out, note that your links must start with http or https or else it will error!

_Example:_

![](https://i.imgur.com/yq9Ygeu.png)

✨ Fun Fact: This homework was inspired by a coding challenge used during a company's hiring process. So, treat it like you're trying to get that job!

## MVP 

Listed below is the basic required functionality that your Bookmark'd app should have. Some of the user stories are purposefully ambiguous to allow you to ‘solve’ the problems in a way that is intuitive and makes sense to you, as opposed to just checking off specific steps from homework. In addition, remember this is a two-night homework! You haven't learned everything yet on the first night, so just work up to what you know first and then finish it up on the second night.

#### Express API
  - You should have a model for bookmarks that has the following schema:
      ```
      title: string
      url: string
       ```
   - You should have routes for...
      - **NIGHT ONE**
      - Index: Getting all bookmarks
      - Create: Posting a new bookmark
      - Delete: Deleting a bookmark
      - **NIGHT TWO**
      - Update: Updating a bookmark

#### Frontend User Stories
  - As a user, I can see a list of all my bookmarks when I visit the page
  - As a user, I can click on one of my bookmarks and have it take me to the linked website
  - As a user, I can create a new bookmark and see that it immediately loads on the page so that I know I successfully added a bookmark
  - As a user, I can delete a bookmark so I can keep my list relevant
  - As a user, I can update a bookmark in case I made a typo or the URL changed

:red_circle: **Remember to commit often!**
Because your workflow & the way you decide to tackle finishing this app is up to you, it's also up to you what you commit!

## Need Some Guidance?

While we suggest just trying to build off the user stories and specifications given above, it can be hard to know where to get started! So provided below are some slightly more guided steps to get you started.

  <details>
   <summary><strong>Start with the back end</strong></summary>

   - Create an express app
     - what npm packages do you need? 
   - Connect it to mongo with mongoose
   - Create a schema that has the following
      ```
      title: string
      url: string ( remember: the links must start with http/https )
      ```
   - Create the routes (full CRUD)
   - Test the routes using Postman (or Windows equivalent or using cURL)
  </details>

   <details>
   <summary><strong>Move on to the front end</strong></summary>

   - Your front end should display:
      - **NIGHT ONE**
      - An index of a clickable list of the title of each bookmark that takes you to the url of your bookmark
      - A way to delete a bookmark
      - A working form to add a new record to the database.
        - When the data is submitted and processed, the page should immediately reflect the changes
      - **NIGHT TWO**
      - A way to update a bookmark (night two)

   - Getting started:
     - Create your static assets. Your `index.html` inside your `public` folder and `app.js` will work together. Create an extra folder for components, as needed.

  </details>

## Hungry for More?

  - Make a searchbox that will filter the bookmark titles
  - Order the bookmarks alphabetically by title using mongoose or react
  - Make it so that the form clears after submit
  - Add an array of tags to the schema so you can organize your bookmarks by tags
  - As a user, I should not be able to add a duplicate bookmark so I can keep my list clean
  - Add some authorization to your app. Some possible user stories you can try:
      - As a user, I can only use the app if I am logged in
      - As a user, I can see everyone's bookmarks
      - As a user, I can only update/delete my own bookmarks
  - As always, try to add some CSS! Give your app some style!

---

## Deliverables

A completed Happy Fun Ball morning exercise and a bookmarks app that meets all the MVP requirements outlined above. 

## Technical Requirements
1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines


- Submit the link to your Bookmark'd homework! 
  - _NOTE:_ The bookmark'd app is a two-night homework, but please don't try to do it all in one night! Start it the night you get it!
  
:heavy_check_mark: Submit your project via [this google form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform).

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
