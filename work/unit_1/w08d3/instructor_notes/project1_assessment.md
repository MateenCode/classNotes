<img src="https://i.imgur.com/sX12DTc.png">

# Project 1 Assessment

## Introduction (By Instructor)

This **Introduction** section will be read in class by the instructor.

Students will be self-directed beginning with the **Instructions & Time Guidelines** section below.

### GOAL

The goal of this project assessment is to gauge your ability to develop a **minimal** front-end web application using HTML, CSS & JavaScript, including your ability to:

- Write HTML that provides the application's overall structure and content. 
- Use CSS to provide styling.
- Use JavaScript to:
	- Define variables that hold application state, cache DOM elements, etc.
	- Select elements in the DOM.
	- Listen for browser events, such as `click`, being dispatched by DOM elements.
	- Manipulate a DOM element's content and style. 

### DEMO

The instructor will now demonstrate the app you will be building.

### OVERALL APPLICATION REQUIREMENTS

As you saw, the application's UI consists of:

- A count display
- Two buttons ("+" & "-")
- An `<input>` element

Use the screenshots below as your "wireframes".

Lastly, the styling does not have to be exact, however, the closer it is to the screenshots, the better!

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

The good news is that it's "open book" - you may reference anything on your computer, Google, use notes, etc. 

However, don't spend too much time researching unless you're stuck - **do not over-think this application!!!**

It is estimated that this project assessment will take 30 to 60 minutes to complete. However, you have up to 3 hours to complete this assessment.

## Instructions & Time Guidelines (You've Got This!)

Please follow the following steps in order:

- **STEP 1 - Prepare** (&asymp; 5 minutes)
- **STEP 2 - Set Up the App** (&asymp; 5 minutes)
- **STEP 3 - Implement the App's Requirements** (&asymp; 40 minutes)
- **STEP 4 - Push to Github Enterprise**
- **STEP 5 - Bonus**

**The times above are just estimated guidelines.**

## Assessment Steps to Complete

### STEP 1 - Prepare (5 minutes)

Briefly read through the rest of this assignment to better understand what is required before starting to code.

### STEP 2 - Set Up the App (5 minutes)

Be sure to follow best practices when setting up the project:

- Create a folder named `project-1-assessment` in your ghe fork (in `w08d3/student_examples`).
- Create a `js` and `css` folder.
- Touch `index.html`
- Touch `js/main.js`, and include it in `index.html` such that it runs after the DOM is ready.
- Touch `css/main.css` and link it in.

### STEP 3 - Implement the App's Requirements (40 minutes)

#### Upon Loading

When the application initially loads, the `<input>`'s value should be set to `1` and the initial count of `0` is rendered such that the display looks something like this:

<img src="https://i.imgur.com/nsLfnoG.png">

#### When the "+" Button is Clicked

When the "+" button is clicked, the value entered in the `<input>` is added to the count and the new count value displayed.

For example, if the "+" button is clicked immediately after the app loading, the display should look something like this:

<img src="https://i.imgur.com/xNdlBn2.png">

#### When the "-" Button is Clicked

When the "-" button is clicked, the value entered in the `<input>` is subtracted from the count and the new count value displayed.

Continuing from the previous example, if the number 200 is typed in the `<input>` and the "-" button is clicked, the display should look something like this:

<img src="https://i.imgur.com/QjtcAJT.png">

#### Hovering Over the "+" or "-" Button

When the mouse is over the "+" or "-" button, the button should reverse its background and text colors:

<img src="https://i.imgur.com/agT3aGX.png">

Congrats, that's all there is to it!

If you would like to skip Step 4 (Deployment), then show your app to your instructor.  If you deploy, slack the link instead.



### STEP 4 - Push to your remote GHE Fork (the same way you push for homework)

> Note that the link might take a minute to become active.

**Slack the deployed app's link to your instructors - congrats, you are done!**

### STEP 5 - Bonus

As a bonus, display the count in red if it is a negative value!

<img src="https://i.imgur.com/LCSG1Wg.png">

## Hints

- Prioritize functionality over layout/styling. Once the functionality is complete, then work on styling to get the UI as close as possible to the wireframes/images (see the below hint for using flexbox for layout).


- Use CSS flexbox to ease horizontal and vertical centering:

	```css
	section {
		display: flex;  /* defaults to row layout */
		justify-content: center;  /* centers items horizontally in row layout */
		align-items: center;  /* centers vertically in row layout */
		/* flex-direction: column; will set layout to column instead of row */
	}
	```