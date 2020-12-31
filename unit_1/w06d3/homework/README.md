

# TO DO APP: FINISH THE LAB YOU STARTED IN CLASS

---
Title: To-Do List <br>
Type: Homework<br>
---

# WHAT TO DO ?

![todo](https://i.imgur.com/usMkA4g.png)


## To-Do List
Build a To-Do list app with two columns: one for things to do, and another for things that have been done. Use jQuery to give your app functionality.

### User Stories
Your user should be able to:

* Enter a 'todo' item in the input box, and click the 'add' button to have the todo item render in the to-do-list column.

* Click on a button within the to-do-item to move that item over to a 'completed' column.

* Click that same button, after it's been moved to 'completed', to remove the todo item from the page.

## Commits

- Make sure to commit after each block of code that you create. Give an appropriate comment.

## Starter code
To get straight to jQuery, use the starter code and fill in the javascript.

We've provided you with some simple styling to make it easier for you to get started.

##### In the starter code:
1. the user should see two columns and an input field.
2. the user should be able to type a to-do item into an input box.
3. the user should be able to click an `add` button next to this input.

NOTE: if you want a challenge, feel free to start from scratch!

## Stuff for you to do:


## PART ONE


1. To use the starter code, go into the `to_do_app` folder (alternatively, you are welcome to start totally from scratch)
  - make a list of the ids, classes, and elements that are styled in the css, so you can match it and use the styles

2. Complete this assignment using jQuery

3. Include any code that affects the DOM inside a **window onload**. jQuery has a shorthand for window onload:

```
$(() => {

	// DOM stuff

})
```
Remember the general flow of what is happening. The user makes an action, you run some code in order to process this action, the results of the action are rendered to the page, and then you wait until another action takes place.

## PART TWO

When the user clicks the `add` button, the input box value should be added to their to-do list.

## PART THREE
When the user clicks the `add` button, the input should display nicely rather than just text that keeps joining on the same line.

* Hint: consider adding the new information into an array of to-dos and display all of the items in that array.

**The user should be able to see all of the todos that they have created.**

## PART FOUR

The user should be able to click 'done' on a todo and have it move to the completed column.

* When you create the todo item, add a button that says 'COMPLETED' to it that has an event listener and handler. Yes! You can include an event listener inside another event handler . . .

* The handler on this 'COMPLETED' button should append the todo item to the completed column.

* Hints: `$(event.currentTarget)`, `.parent()`

* When the button 'COMPLETED' is clicked, set the background color of the target to-do-item to `#ED6495`


## PART FIVE - Delete

The user should be able to delete a to-do item from the completed list.

* When the to-do-item moves to the completed list, the text of the 'COMPLETED' button should change to 'REMOVE'
* When the 'REMOVE' button is clicked, the target to-do-item should be removed from the DOM  


# Hungry for More

## Local Storage

The browser has something called [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage). This allows us to cache data in the browser. Using local storage, make this application remember the to-dos that have already been entered in, even if the page is closed.

## Draggable/Droppable

Look into jQuery's supplemental libraries like [Draggable and/or Droppable](https://jqueryui.com/droppable/)



## Deliverables

1. All your work in the working To Do List webpage. You can submit the link to the folder you completed the lab in (i.e) `todos_starter`.

## Technical Requirements

Your JavaScript files MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines

- Submit your homework via your github fork (to the remote fork) and please don't forget to fill out this [Google Form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform)!