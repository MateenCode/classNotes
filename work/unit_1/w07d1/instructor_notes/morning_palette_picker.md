# COLOR PALETTE PICKER

## Using event listeners in a loop

We are going to start building a color palette picker.

## Lesson Objectives

1. Generate 150 divs (squares) each with their own random color.
1. Create a click handler on each square that will add a square with the same color as the clicked square to the right column.

## Generate 150 divs (squares) each with their own random color.

- Add jQuery library

Create DOM elements:

```html
<button id="generate">GENERATE</button>
<div id="container">
	<div id="color-palette"></div>
	<div id="my-palette"></div>
</div>
```

Grab them with jQuery:

```javascript
const $colorPalette = $('#color-palette');
const $myPalette = $('#my-palette');
const $generate = $('#generate');
```

Write a function `makePalette` that will generate 150 squares with the class 'square' and append them to the `color-palette` div

```javascript
const makePalette = () => {
	for(let i = 0; i < 150; i++){
		const $square = $('<div>');
		$square.addClass('square');
		$colorPalette.append($square);
	}
}
//... bottom of file
makePalette();
```

Make it so each square will have a random color

```javascript
const red = Math.floor(Math.random() * 255);
const green = Math.floor(Math.random() * 255);
const blue = Math.floor(Math.random() * 255);
const color = 'rgb('+red+','+green+','+blue+')';
$square.css('background-color', color);
```

Should look like this:

![](https://i.imgur.com/AX50GkX.png)

Add an event listener to the `generate` button that will run the `makePalette` function

```javascript
$generate.on('click', makePalette);
```

Make it so the `makePalette` function will empty the previous palette of squares

```javascript
const makePalette = () => {
	$colorPalette.empty();
	//...
}
```

Give each square an event listener whose `addColor` handler will (eventually) add the chosen square to the right column:

```javascript
const makePalette = () => {
	//...
	$('.square').on('click', addColor);
}
```

- Make the `addColor` handler.
- First, it should console.log the background color of the square that was clicked:

```javascript
const addColor = (event) => {
	console.log($(event.currentTarget).css('background-color'));
}
```

* The `addColor` function should:

	* Make a new square
	* Give it a class of 'square'
	* Give it the clicked square's background color
	* Append to the 'my palette' right div

```javascript
const addColor = (event) => {
	const color = $(event.currentTarget).css('background-color');

	const $square = $('<div>');
	$square.addClass('square');
	$square.css('background-color', color);

	$myPalette.append($square)
}
```
