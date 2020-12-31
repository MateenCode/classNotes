
Title: jQuery practice<br>
Type: Lab <br>
Duration: 45 - 60 mins<br>
Creator: Thom Page <br>
Topics: DOM manipulation with jQuery<br>

---

# Create a website from scratch using just jQuery

<br>

# Setup

* In **student_labs** for today, make a directory **jquery_practice**

* Inside **jquery_practice**, make files for:

	* `index.html`
	* `app.js`
	* `style.css`

* create the boilerplate HTML code in your`index.html`

* Get your app.js connected via the `script` tag. Put it in the `head`. Make sure a console.log will appear in Chrome console to test. (Open up Chrome js tools with `option ⌘ j`)

* Get your css connected via the `link` tag. Put it in the `head`. Change the body background to `azure` to test it. 

* Get the jquery library connected. Get the script tag with the **minified** version copied to your clipboard. `https://code.jquery.com/`. Put it in the `head`. But does it go above or below your app.js script tag? The order is crucial.

Test if the jquery library is available to your `app.js` by writing a `$` into `app.js`.

![](https://i.imgur.com/5VCwOrN.png)

Not connected / unavailable:

![](https://i.imgur.com/iv21joq.png)

There will be no error if jQuery is available to your app.js.

EXAMPLE SETUP:

![](https://i.imgur.com/BqbubXw.png)

<br>
<hr>

# Directions

**Using jQuery**, without writing any more code in your `index.html`, make a website with the following HTML structure as visible in the **Elements** tab:

![](https://i.imgur.com/6TkVSlS.png)

Remember the ids.

**Question:** If your script is in the head, and you do not use a window onload, can you get the document body using js? The script will have loaded before the document body.

**Answer:** No. If you console.log `$('body')` You will get this:

![](https://i.imgur.com/EOIj3pK.png)

This is jQuery's way of saying: this element does not exist.

**Solution:** Add in the window onload, and put your js in there. Your js will wait to run until the DOM has loaded.

![](https://i.imgur.com/454zPmf.png)

<br>
<hr>

# Top container

* Inside the top container, create the following structure:

![](https://i.imgur.com/zMgb7ex.png)

* Next, by adding/adjusting the `couleur` class in the css file, make it so the three divs are `dimgrey` with a width and height of 200px each, and inline block.

![](https://i.imgur.com/26L1nQP.png)


* Next, by adding more classes, make it so the three divs are red, white, and blue.

![](https://i.imgur.com/jSbUCGQ.png)

Note: colors used in the example are **firebrick**, **ivory**, and **cornflowerblue**.

<br>
<hr>

# Bottom container

Make it so the bottom container has the following HTML structure, and displays any picture (from the internet) of 'Lumpy Space Princess'

![](https://i.imgur.com/wJf6heD.png)

![](https://i.imgur.com/1868Y8l.png)

<br>

# Continuing with jQuery:

* change the 'trois coulers' title to English

![](https://i.imgur.com/3uuJoKT.png)

<br>

* change the second square to black using the jQuery `.css()` method on the element.

![](https://i.imgur.com/nVhgVnr.png)

<br>

* change the third square to orange using the `.css()` method on the element, and change the title to reflect the colors:

![](https://i.imgur.com/Dx6ZgCn.png)

<br>

# BONUS Challenge

* swap the positions of the top container and the bottom container. This is probably simpler to do than you think! When you append an existing element, it is not copied, it is moved.

_Make sure that one is not inside the other in the Elements tab_

![](https://i.imgur.com/FaOAc7u.png)

<br>

* change the image of lumpy space princess to any image of 'The Ice King', and change the title to 'The Ice King'

![](https://i.imgur.com/cxZb2XG.png)

<br>

* Remove the container that holds the three colors and the text.


<br>

* Remove the container that holds the Ice King and the text.

<br>

* Add a paragraph to the empty page that says "the ice king waz here"

![](https://i.imgur.com/LG2mokN.png)

<br>
<hr>
# BONUS BONUS Challenge

- explore some new jQuery methods and use them, we already saw `hide` and `show` - what arguments can you add?  What other methods can you find that would add some excitement to your page?
**end**














