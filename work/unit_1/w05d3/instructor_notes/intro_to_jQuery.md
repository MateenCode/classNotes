
<br>
Title: Intro to jQuery<br>
Duration: 1.5 hours<br>
Creator:  Karolin Rafalski<br>
Topics: DOM manipulation with jQuery<br>
Associated files: folder `jQuery_intro` => `app.js`, `index.html`, `main.css`


---
# Lesson Objectives

_after this lesson, students will be able to:_
- load jQuery from a CDN (Content Delivery Network)
- Perform basic jQuery commands

<br>
<hr>


## Bye, Vanilla DOM

We've been using 'Vanilla' DOM commands to

* Demonstrate that the HTML is represented as **JavaScript objects with useful methods on them** in the browser.
* Show you the DOM commands that are native to the browser
* Get you familiar with common patterns for interacting with the DOM.

---
![jquery logo - write less, do more.](https://i.imgur.com/wNTIz8u.png)



Check out that logo! `jQuery : write less, do more.`

This sums up why many devs choose jQuery over 'Vanilla' JS and why we'll spend the rest of this unit focused on jQuery, rather than native JS DOM commands.

## Code Library

A **library** is a third-party code we can reference in our projects.

By adding a library we can leverage functionality that someone else has created and use it, so we can write less and do more.

We don't ever need to look at the library code or tinker with it. It just sits there invisibly.

There is still challenge in learning to search and use the documentation, so you can make the most of the library you have imported.



## What is jQuery

jQuery:

* Is a _library_ of code that you include in the same way you include your own js scripts
* The browser loads in the jQuery code, which will allow us to use jQuery commands to interact with the DOM
* The library will **translate** our jQuery commands into ones that the browser will recognize as 'vanilla' js commands.
* Provides a _shorthand_ method of manipulating DOM elements.


## Use jQuery

To use jQuery, we can use `jQuery()` (after jQuery has been linked correctly) , but that isn't really in the spirit of jQuery, we want to do less writing and get more done. jQuery has a shortcut name `$` so all we have to do is type `$()` to access jQuery.jQuery commands always begin with the `$` symbol

![](https://i.imgur.com/WiUrxnG.png)

<br>

Some examples of how to write jQuery commands vs Vanilla. The jQuery commands are translated to vanilla 'under the hood'

| jQuery command | 'Vanilla JS' | Brief Description|
|:--------------:|:------------:|:----------------:|
|`$('#idName');` |  `document.querySelector('#'idName')`   |Grab an element by id|
|`$('.someClass');` |  `document.querySelector('.someClass') `|Grab an element(s) by class|
|`$('<div>');` | `document.createElement('div')`| Create an element |
|`$('body').append(someElement);`| `document.body.appendChild(someElement)` | append `someElement` to the `body`|
|`$('h1').css('color', 'cadetblue')`| `document.querySelector('h1').style.color = 'cadetblue'`|changes an `h1` element's text color (note with vanilla js this only works if there is one `h1` element)|





# DATATYPES

A common question is:

* Can I use jQuery and 'vanilla' JS in the same file?

The answer is yes. However, you shouldn't. For consistency, readability and testability, stick to either 'vanilla' JS _or_ jQuery.

Additionally, there is a risk of 'mixing datatypes' and coming up with annoying errors.

**jQuery objects are not native js objects**. You cannot mix your datatypes: 'vanilla' js commands cannot be performed on jQuery objects and vice versa.

* **vanilla js methods will not work on jQuery objects**

* **jQuery methods will not work on vanilla js objects**

We'll work through a demo of this below

<br>


### Activity

Use the files in the in the `student_examples` folder `jQuery_intro` for starter code

#### Get Started
 - `code .` all the files in the `jQuery_intro` folder
 - `open index.html`
 -  The index page should look like this:
 ![groceries index page start](https://i.imgur.com/FmoWOvK.png)

 - upon inspection, we see we have 4 `div`s with different classes, that are either `meat` , `dairy`, `vegetable` and `fruit`. These `divs` are in the `body`

 ![HTML OF STARTER CODE](https://i.imgur.com/BlIT8az.png)

 #### Let's Add jQuery

 - There are a few ways to add jQuery. The two most popular are to download the file and link to it from your project  and the other is to link to a CDN (Content Delivery Network). There are pros and cons to both,  we'll be using a link to a CDN

 - go to [https://code.jquery.com/](https://code.jquery.com/)
 - select the minified version of the latest jQuery
 - Copy the whole script tag in the popup
 - put it in the `head` of your `index.html`, ABOVE the `script` tag that links the `app.js`

 - Open up dev tools - there should be a console.log confirmation if you have successfully linked jQuery and your `app.js` (you can comment out the console log or delete it, when you are set up)

 - if you just `console.log( $ );` -it should give you something like
 ![jQuery Linked](https://i.imgur.com/L6uuz1A.png)

 ##### or (depending on your version of Chrome/jQuery)

 ![jQuery Linked](https://i.imgur.com/KuOUVN1.png)

 - if you get undefined, then you are still not set up correctly:

 ![jQuery NOT linked](https://i.imgur.com/Zj9wobr.png)


 #### Create an Element
 In `app.js`
- Let's create a div and store it in a variable
 - we're going to write our variable div with a `$` at the start, so we know this is a jQuery object and we can do jQuery methods on this variable. the `$` as part of the variable doesn't give it any special powers. You could skip it and it would work just fine. But for readability, it's really nice to quickly identify which variables can have jQuery methods applied.


 - `const $div = $('<div>');` - this is saying 'Hey jQuery, make me a jQuery div object and store it in a variable'
 - let's take a look at what that object looks like
 - `console.log($div);`
  - Expected appearance ![jQuery div in web dev tools](https://i.imgur.com/99ITYHQ.png)
  - This is NOT what we want ![no div found](https://i.imgur.com/na79lFb.png)`
  - Nor this: ![forgot <> and selected instead of created](https://i.imgur.com/Wf0ZEND.png)

  This has selected the divs on the page, rather than creating a new one <br>
  **IMPORTANT** when you are creating an element you MUST use the `<>` around the element name.

- Let's inspect a little bit when we open up the arrow we find that this jQuery object has a LOT of properties

![jQuery object properties](https://i.imgur.com/YTZQePJ.png)

AND

- it has a LOT of methods!

![jQuery object Methods](https://i.imgur.com/60dHf36.png)

- You don't need to learn or memorize anything in here, the main takeaway is that jQuery/jQuery objects is/are loaded with tons of functionality!

- Finally, just really quickly, if we juse 'vanilla js' - the object created is totally different:
![vanilla js different object](https://i.imgur.com/l1yZhn9.png)

Once more:
  - we're going to write our variable div with a `$` at the start, so we know this is a jQuery object and we can do jQuery methods on this variable. the `$` as part of the variable doesn't give it any special powers. You could skip it and it would work just fine. But for readability, it's really nice to quickly identify which variables can have jQuery methods applied.

 As we can see, NOT using the `$` as part of the variable name still gives us a jQuery object (same as below)
 ![no $ in variable naming](https://i.imgur.com/JtotwUG.png)


- So. We successfully made a div - is it visible on our web page?

<summary><details> No, because we didn't append it to the document/html </summary>

</details>

 #### Append an Element

 - We don't see our div because we didn't append it anywhere.
 - We'll append it to the body
 - to select an element we can do `$('body')`
 - let's see if we grabbed it `console.log($('body'));`
 - Success looks like this: ![success body object in dev tools](https://i.imgur.com/GR3fCBr.png)

**GOTCHA!**

#### Making sure the web page is loaded before using jQuery

Everyone probably got this instead:
 ![did not find body](https://i.imgur.com/JNDXyJI.png)

 This pesky thing is telling us 'oh hey, I couldn't find that element you wanted, here is this other jQuery object instead.'

 But, we can inspect our html and 100% for sure, there is a `body` element. What happened?

 - our app.js ran the query for the `body` FASTER than the web page could load. Therefore when it queried it, the body was not yet there.
 - we need a way to tell jQuery to wait until the page is fully loaded and ready to go.

 - a common way to do it is to put the script tag right next to the closing `body` tag. That way the rest of the page has time to load.
  - BUT! This isn't foolproof, a slow internet connection or something loaded up with ads and other  fun stuff will likely still take longer than just putting the `script` tags down there. So we need a more fool-proof way

- jQuery handles this for us with a method called `document.ready` also referred to as `window.onload` (yes these are slightly different, but they are close enough for us) - googling either will help you find the right code to use.
- But again, that's a lot of typing and jQuery has a shorter way

```js
$( () => {
  //jQuery code goes here
});

```

When you write your code inside of this function, it will only execute once the page has fully loaded.

Let's try it out

- add the `document.ready` function to your `app.js`
- move your code inside this function
- success in querying for the `body?`
 ![success body object in dev tools](https://i.imgur.com/GR3fCBr.png)

- **YES!**

#### Back to appending our new `div` to the `body`

To append the new `div` (stored in a variable we named `$div`) to the `body` we just do
In `app.js`

- `$('body').append( $div );`
- We should see a new white div at the bottom ![new div](https://i.imgur.com/2V1Jq2D.png)  - note the css gives all divs a min height of `100px` so we can easily see our new divs


- Let's try to break it down some

`$('body').append( $div );`

- `$( 'body' )` jQuery - find me the element(s) that are `body`
- `.append( $div )` - jQuery - use the append method to put my new div (that is stored in a variable ) after the last element inside the body

#### Adding a Class to an element

- so even though we appended our new `div`, we still want to do more to it. Luckily, we stored it as a variable, so we can still access it easily.

- `$div.addClass('meat');`
- this should have made our new div a ruby color

#### Create and Append another element that has text

Let's add a meat to our div

- `const $h3 = $('<h3>');`
- `$h3.text( 'Ostrich' );`
- `$div.append( $h3 );`

That seems kinda long... jQuery let's us chain things together. Let's refactor to make the first two lines into one

- `const $h3 = $('<h3>').text( 'Ostrich' );`

#### Your turn! ~ 10 minutes
- add another `div` with a food class and an `h3` element with text of the food item
- good practice - typically, appending an element is the last step. Reorder the steps so the appends are happening last
- stretch yourself! See if you can chain some more of the steps together
- stretch even more! See if you can figure out how to prepend your new div, so it is the top div inside the body

#### Grabbing multiple elements

- We can imagine a situation where we are planning a surprise dinner and we want to hide our `divs`
- first we need to query for our divs
- `const $divs = $('div');`
- success? `console.log($divs);` ![grabbed all the divs](https://i.imgur.com/hRvGJms.png)<br>
 - `$divs.hide();`
 - Whoa, that happened fast, let's slow it down
 - Let's go to the documentation and learn more about this method [.hide()](http://api.jquery.com/hide/)

  -`$divs.hide( 'slow' );`
  - let's comment out this line, we won't need it any more

#### Grabbing elements by class

- Our guest of honor has gone vegetarian. Let's remove the meat items.
- `const $meat = $( '.meat' );`

**GOTCHA** when selecting by class, you have to use a `.` - just like a css class. If you were to select by id you would need to use a `#` at the start of your id name.

- you can choose to keep the meat or remove it, whatever feels good


#### jQuery Cheatsheet

- We've been covering a lot of things with a lot of little details. No need to memorize, [just keep this cheatsheet handy](../../../../../wiki/JQuery-Cheatsheet-as-Tables)! or [this one](../../../../../wiki/jQuery-Cheatsheet) - they have the same information but are formatted differently, use the one that is easier for you to read


#### Activity

- prepend this image to the body `https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`
- use the cheatsheet, google, jQuery docs and more
- remember an image goes in an `img`, tag it requires an attribute of `src`, the value of the `src` should be the link provided
- it's also good to add another attribute `alt` with a value of some text that is descriptive of the image.

Almost Final result :
![almost finished](https://i.imgur.com/EqVXKfZ.png)

#### jQuery - accessing a specific Element in a Group of elements

We've already grabbed all the `divs` with jQuery with `const $divs = $('div');`

When we console logged that we got

![and array? of jQuery](https://i.imgur.com/Wf0ZEND.png)

Cool, that looks like an array! Let's grab that 3rd element

- `console.log( $divs[2]`

- Should be ![the bad way to access a jQuery collection item](https://i.imgur.com/qytlieB.png)

- Let's grab the children of this element

- `$divs[2].children();`

- And we get:

![jQuery children error](https://i.imgur.com/gIcU026.png)


- Why?

- jQuery has given us a `collection` , rather than an array. This collection is array-like, which allows us to grab a part of it. But when we just use the  `[2]`, it is returning an element from the collection, but it isn't generating a new jQuery object for us to be able to manipulate

- In order to get a jQuery object we have to us a method called `.eq()`

Let's try again

- `console.log($divs.eq(2).children());`

![using .eq() returns a jQuery Object](https://i.imgur.com/Qckjo4X.png)

Cool, that looks like a jQuery object AND we could call the method `.children()` on it!

Looks like we are getting an `h3` element back. Let's change it's text

-  `$divs.eq(2).children().text( 'Kohlrabi');`

- success*!

![edited text of 2=3nd jQuery collection item](https://i.imgur.com/uyMLWSc.png)

* if you have prepended an item, the item you selected may be different. No worries!


### Activity

Let's do it again, a little differently

- Create a new $h3 element
- and add some text to it (ie. 'wine' or 'cheese' etc.)
- Let's grab the 2nd div
- and `empty` the contents of this div out
 - you'll have to research how to do it
- If you have succeeded, you should still have a div, but the original `h3` element should be gone
- Next, append your new `h3` element

Important takeaway: there are many ways to achieve what you want to do with jQuery

#### One more! Let's add some CSS on the fly

- Let's give our body a `1em solid black` `border` using the `.css()` method
