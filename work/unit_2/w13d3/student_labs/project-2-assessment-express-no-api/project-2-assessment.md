<img src="https://i.imgur.com/ser5chI.png">

# Project 2 Assessment


### GOAL

The goal of this project assessment is to gauge your ability to develop a minimal Node.js web application using the Express framework.

### OVERALL APPLICATION REQUIREMENTS

The requirements of the application are detailed in STEP 3 below, however, in brief:

- The app is a **To Do List**.
- It has a single JSX view used to render To Do objects as well as display a form for adding new To Do objects.
- The app should use Mongo/Mongoose to store the data.

All of the wireframes (screenshots) show what the app will look like if zero CSS is added.  No CSS is required to complete this assessment.

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

However, the assessment is "open book" - you may reference anything on your computer, Google, use notes, refer to class lessons/labs, etc.

It is estimated that this assessment will take 30 to 60 minutes to complete, however, you have up to 2.5 hours to complete the assessment. 

Best words of advice: **Do not over think this assessment!**

## Instructions

Please follow the following steps in order:

- **STEP 1 - Prepare**
- **STEP 2 - Set up the Project**
- **STEP 3 - Implement the App's Requirements**
- **STEP 4 - Deploy**

## Assessment Steps to Complete

### STEP 1 - Prepare

- Briefly read through the rest of this assignment to better understand what is required before starting to code.

- In Terminal, move to a directory that is not within an existing repo. You will be creating a repo for this assessment and, as you know, nested repos are no bueno!

### STEP 2 - Set up the Project

- Use npm to generate an app named `unit-2-assessment` that is configured to use the JSX view engine.

- Open the project in VS Code.

- Start the app using `nodemon` and browse to `localhost:3000`, then you're on your way!

### STEP 3 - Implement the App's Requirements

#### Step 3.1 - Title & Page Heading

You only need an `index.jsx` for this assessmen.

Unlike other code alongs we have done in class, you can do the new form on the index page and you only need to be able to delete the tasks

Start with just an `<h1>` in the `<body>` that displays "To Do List".

After this step, your page should look like this:

<img src="https://i.imgur.com/TmA1RN8.png">

#### Step 3.2 - Create the `todos.js` Model/Contoller


#### Step 3.3 - When There Are No To Do Items Yet

When the app first loads, the array holding the To Dos will be empty.

The app needs to display a message showing informing the user as follows:

<img src="https://i.imgur.com/yeD1lR7.png">

The "There are no To Dos yet!" message is being displayed in an `<h3>` tag.

##### Hint: This will require a bit of JSX to implement control flow. As always, it helps if you verbalize the functionality: If there are some To Dos, display them, otherwise show a "There are no To Dos yet!" message.

#### Step 3.4 - Add the Form to Add a To Do

The user will need a form to be able to add To Do objects to the array.

Here's what the page should look like when you complete this step:

<img src="https://i.imgur.com/wDaWbVm.png">

After the JSX control flow added in the previous step, there is an `<hr>` followed by the form.

FYI, you can avoid empty To Dos being submitted by simply adding the `required` attribute within the input.

#### Step 3.5 - Implement Adding a To Do

When the user enters a To Do in the input and clicks the `ADD TO DO` submit button:

- The form will be submitted to the server

- A route will need to match the HTTP request

- An object representing the new To Do (see below for its structure) will be added to the collection.


- The user will then see the list of To Dos as follows:

<img src="https://i.imgur.com/O5zBL2s.png">

Each To Do object added to the array should have this structure:

```js
{ todo: 'Example To Do', done: false }
```

##### Hints:

- Each To Do object is being rendered as an `<li>`.

- Be sure to put the wrapping `<ul>` outside of the JSX loop that's rendering each To Do's `<li>`.

- After data has changed on the server, what is the proper way to respond: `res.render` or `res.redirect`?

- A ternary expression works great for displaying "Not Done"/"Done" instead of "false"/"true".

**Congrats!**  That's all that's required.  However, feel free to implement the following bonus feature!

#### Bonus Step - Remove a To Do

As a bonus, show a DELETE button to the right of each To Do item in the list:

<img src="https://i.imgur.com/E2WisAg.png">

Clicking one of the `DELETE` buttons results in that To Do being removed from the array and the page being displayed without that To Do.

##### Hints:

- Implementing "proper" routing will require the installation of an additional middleware module that allows the form to inform the server that it wants to make a DELETE request instead of a POST. What is the name of that module? Well, think about the fact that it allows for the HTTP method to be overridden.

- If you'd like to have the `DELETE` button display on the same line as the To Do, add the following CSS to `public/stylesheets/style.css`:

```css
form {
  display: inline;
}
```

### STEP 4 - Deploy

Follow these steps to deploy your app:

- Create a local repository: `$ git init`

- Create the first commit: `$ git add -A` then `$ git commit -m "Initial commit"`

- Create a remote link to Heroku: `$ heroku create`

- Deploy: `$ git push heroku master`

- Test the application: `$ heroku open`

> It may take a minute for the application to become functional on Heroku.

**Slack the deployed app's link to your instructors in the resources channel. Congrats, you are done!**

**If you cant get heroku to work, upload this project to a github repo and send us the repo.


