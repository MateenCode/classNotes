![ga](../../../ga_cog.png)

<hr>

Title: Make a Modal <br>
Type: Morning Exercise<br>
Creator: Kristyn Bryan<br>
Adapted by: Cathleen Wright, Jerrica Bobadilla<br>
Competencies: CSS, HTML<br>

<hr>

# Modals

Modal boxes are a frequently utilized for login/register forms, advertisements, pop-outs of information, or just notifications to the user.

We're going to be creating a modal using HTML, CSS, and JavaScript.

_Note: We are going to be hard coding the content of this modal, however, the text can be replaced with variables and messages that can change.  Example: `X has won this round!` / `O has won this round!`_

![modal example](https://i.imgur.com/4ft8Uda.png)

## Setup

Starter code has been provided for you with all the files linked together and the jQuery library.

1. `git pull upstream master`
2. Navigate to the `morning_exercise/modal_practice` folder for today. 
3. Open the `index.html`, `style.css` and `app.js` in atom to follow along and create a modal.
4. Open the `index.html` in your browser.

## Exercise

Let's pretend that we are making the card game: Bridge. We want a modal to pop up to show information about the game.

1. When a user clicks on the button `About the Game`, a modal will pop up to show them information about how to play the game.

2. Once open, there will be a way to close the modal so that the user can see the main page again.

<hr>

## Add the HTML Elements

1. Add a button that we will use to open the modal

  ```javascript
  <button id="openModal">About the Game</button>
  ```
  - give it the text `About the Game`

2. Add a div which will be the modal.  Give an an **id** of `modal` so we can refer to it later.

  `<div id="modal"></div>`

3. Add the elements that will go **inside** the modal `<div>`:
  - An anchor tag to close the modal with the text `Close`.  Give it an **id** of `close` so we can reference it later.
  `<a id="close" href="#">Close</a>`

  - A header tag for the modal's header with the text `Learn to Play Bridge`
  `<h1>Learn to Play Bridge</h1>`

  - Three paragraphs with text inside the box.  Feel free to use lorem ipsum text or, for more authentic text, take some from here: http://www.acbl.org/learn_page/how-to-play-bridge/
  
  ```html
<p>Bridge is played with four people sitting at a card table using a standard deck of 52 cards (no jokers). The players across from each other form partnerships as North‑South and East‑West.</p>
<p>Draw cards to select the person to deal the cards (the dealer). This person distributes the cards face down, in clockwise rotation one at a time, until each player at the table has a hand consisting of 13 cards. </p>
<p>After the play of each deal is completed, the opportunity to deal moves around the table clockwise so that each person has a turn to deal out the cards.</p>
```
    
   - Wrap the `<a>`, `<h1>`, and the three `<p>` in another div. Give this div an **id** of `modal-textbox` so we can refer to it later
   
### :spades: HTML At This Point:  
```html
    <button id="openModal">About the Game</button>
    <div id="modal">
      <div id="modal-textbox">
        <a id="close" href="#">Close</a>
        <h1>Learn to Play Bridge</h1>
          <p>Bridge is played with four people sitting at a card table using a standard deck of 52 cards (no jokers). The players across from each other form partnerships as North‑South and East‑West.</p>
          <p>Draw cards to select the person to deal the cards (the dealer). This person distributes the cards face down, in clockwise rotation one at a time, until each player at the table has a hand consisting of 13 cards. </p>
          <p>After the play of each deal is completed, the opportunity to deal moves around the table clockwise so that each person has a turn to deal out the cards.</p>
      </div>
    </div>
```

![initial setup view](https://i.imgur.com/tLbbM7J.png)
<hr>

## Style your Modal

Add some styling to our modal to set it apart when we press the `About the Game` button.

In the css sheet, give `#modal` some properties:

```css
#modal {
	background-color: rgba(0,0,0,0.4);
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	/*This puts our modal in front of the body (which has a default z-index setting of `0`*/
	overflow: auto;
	/*If overflow is clipped, a scroll-bar should be added to see the rest of the content*/
}
```

![](https://i.imgur.com/EZJRwPf.png)


## Style the Modal Text Box

```css
#modal-textbox {
	background-color: white;
	height: 350px;
	width: 550px;
	border-radius: 2px;
}
```

![height and width](https://i.imgur.com/jojYBox.png)

Give the text box some margins so that it starts to center itself on the page and some depth so it stands out a little.

```css
	margin: 150px auto;
	/*This will set the margins for the top and the bottom to 150px (or larger). The right and left will automatically set themselves (and keep the box centered horizontally).*/
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
	/*This will give the box some depth.*/
```

### :spades: CSS At This Point:
```css
body {
	background-image: url("lets-play-bridge.jpg");
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
}

#modal {
	background-color: rgba(0,0,0,0.4);
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	overflow: auto;
}

#modal-textbox {
	background-color: white;
	height: 350px;
	width: 550px;
	border-radius: 2px;
	margin: 150px auto;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
```
![box shadow](https://i.imgur.com/C0Tjb9W.png)

<hr>

## Hide the Modal

Now that the modal is styled, let's hide it.

1. In the css file, on the `#modal`, add the following:

```css
display: none;
/*Set this to `none` so that the modal does not show initially on page load.*/
```

_We will change this dynamically by adding a `display: block` in our event handler that on the About the Game button in our javascript file._

![display none](https://i.imgur.com/jlpgZaZ.png)

<hr>

## Hide and Show your Modal

1. In your `app.js` file, grab the three pieces we'll need: `About the Game` button, the modal, and the `close` button.  Write your code inside the jQuery window onload provided.

```javascript
// Grabbing About the Game button
const $openBtn = $('#openModal');

// Grabbing modal element
const $modal = $('#modal');

// Grabbing close button
const $closeBtn = $('#close');
```

2. Set an event listener on the About the Game button.

```javascript
//Add event listener to About the Game button
$openBtn.on('click', openModal);
```

3. Create an event handler to display the modal. This needs to be placed _above_ the listener.

For the modal to display, we need to change the css property of the modal's `display` to `block`;

```javascript
// Event handler to open the modal
const openModal = () => {
  $modal.css('display', 'block');
}
```

:elephant: **Alternate Option:** look up the jQuery method [.show()](http://api.jquery.com/show/)

5. Set an event listener on the close button. 

```javascript
//Add event listener to Close button
$closeBtn.on('click', closeModal);
```

6. Create an event handler to close the modal.

For the modal to close, we need to change the css property of the modal's `display` to `none`.  This needs to be placed _above_ the listener.

```javascript
// Event handler to close the modal
const closeModal = () => {
  $modal.css('display', 'none');
}
```

:elephant: **Alternate Option:** look up the jQuery method [.hide()](http://api.jquery.com/hide/)


We should now be able to open and close the modal with clicks to the associated buttons.

### :spades: JavaScript At This Point:
```javascript
$( () => {

//Grabbing Elements
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');

//Event Handlers
const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}

//Event Listeners
$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);

}); //
```

![working modal](https://media.giphy.com/media/l0Iy0bvX0tqIkH4qY/giphy.gif)

<hr>

## Automatically Have Modal Show

What if we wanted to have the modal automatically show after 5 seconds of someone visiting our page?

We could set something to automatically run our `openModal` function.

1. Make a setTimeout for the modal to automatically pop-up after 5 seconds.

```javascript
setTimeout(openModal, 5000);
```

## Format the Information Inside the Modal

Reorganize the code in our Modal Text Box and format it to look a little nicer.

1. Move the `Close` button to the bottom of the text box and wrap it in a `div` to make it easier to style.  Give the `<div>` an **id** of `modal-footer`.
```
<div id="modal-footer">
<a id="close" href="#">Close</a>
</div>
```

2. Give `#modal-textbox` some room to breath with some padding and a change in line height:

```css
padding: 2%;
line-height: 120%;
```

![nicer style](https://i.imgur.com/jdJoshE.png)


3. Adjust the close button location. Select just the footer and let's move the close button to the right:
  `text-align: right;`

```
#modal-footer {
	text-align: right;
}
```

4. Give the heading some room to breath. We can reference the `<h1>` tag because it is the only one in the html at this time.

```css
h1 {
	padding-bottom: 15px;
}
```

5. Update the font of the `#modal-textbox` to `'Arial'`.

## Give some style to the buttons

We have two buttons on our page. One uses a `<button>` tag and the other is an `<a>` tag.

1. Adjust the close `<a>` to an `<button>` tag so that we can do the same styling to both, and give _both_ `<button>` tags a **class** of "modal-buttons".

```
<button class="modal-buttons" id="openModal">About the Game</button>
```

```
<div id="modal-footer">
	<button class="modal-buttons" id="close" href="#">Close</button>
</div>
```

2. In the css file:

```
.modal-buttons {
	padding: 14px 18px;
	background-color: #677996;
	border: none;
	outline: none;
	border-radius: 3px;
	color: white;
	font-family: 'Arial';
	cursor: pointer;
}
```

![button change final](https://i.imgur.com/4ft8Uda.png)


# Additional Resources

- [49 CSS Modal Windows](http://freefrontend.com/css-modal-windows/)
