<img src="https://i.imgur.com/sX12DTc.png">

# Project 4 Assessment - Rails

The goal of this project assessment is to gauge your ability to develop a minimal full-stack web application using the Rails and React.

- Create and configure a Rails Project
- Create and configure a React project

### DEMO

The instructor will now demonstrate the app you will be building.

### OVERALL APPLICATION REQUIREMENTS

As you saw, the application consist of:

- A **SINGLE** page (template) with a title of "To Do List", that displays all to do items in the database and their users.
- A Rails backend that has a one to many relationship
    - You should have `Users` and `Todos`
    - A `User` can have many `Todos`
- Your API data should show the associations between your data so that on the front end you can query your data.
- Your front end should end up looking something like this

<img width="600px" src="https://i.imgur.com/mHlWt2p.png">

The layout and styling of this assessment is secondary to its functionality. As long as the app behaves as required and displays all elements specified, you will pass.


### PROCESS

This assessment is an **individual** assignment - no collaboration please.

It's "open book" - you may reference anything on your computer, Google, use notes, etc. 

It is anticipated that it will take approximately **60 minutes** to complete this assessment. Stop after 60 minutes!

When finished you will demo your app to an instructor and slack them the link to your personal GitHub repo.

## Instructions & Estimated Time Guidelines (You've Got This!)

Please follow the following steps in order:

- **STEP 1 - Prepare** (&asymp; 5 minutes)
- **STEP 2 - Set Up the App** (&asymp; 10 minutes)
- **STEP 3 - Implement the App's Requirements** (&asymp; 30 minutes)
- **STEP 4 - Demo & Slack Link to Your Instructor**

> The above times are just guidelines

## Assessment Steps to Complete

### STEP 1 - Prepare (&asymp; 5 minutes)

Prepare how you will scaffold your `Rails` app and remind yourself how to query data in `React`

### STEP 2 - Set Up the App (&asymp; 10 minutes)

Follow the standard workflow for creating a new Rails app.

This app will require two Models that have a one-to-many relationship.

### STEP 3 - Implement the App's Requirements (&asymp; 30 minutes)

Create the API backend first and make sure to test it out in your browser. You want it to look something like this.

<img src="https://i.imgur.com/0v9104y.png" alt="backend">

Next, use Create React App to create your React front end and fetch your data from your api. 

Make sure to update your `package.json` within Create React App so that the start script starts your app on a different port

```js
"scripts": {
    "start": "PORT=3006 react-scripts start",
```

Your front end doesn't need to have a ton of styling. It should look something like this: 

<img width="600px" src="https://i.imgur.com/mHlWt2p.png">

<br>

**Congrats, you're done!**

### STEP 4 - Demo & Slack Link to Your Instructor

**Take your computer and demo the app's functionality to your instructor.**

**Message us and we will put you in a breakout room with an instructor**

Do a final commit and push to your GitHub.

**Slack your app's GitHub link to your instructors**




