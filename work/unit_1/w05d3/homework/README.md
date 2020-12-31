
Title: jQuery Magic<br>
Type: Homework<br>
Duration: "4:00"<br>
Creator: jQuery Magic:Karolin Rafalski<br>
Competencies: create, append/remove elements in the DOM using jQuery, traverse the DOM, add/remove attributes, html tables <br>
Prerequisites: JavaScript, HTML, CSS <br>

# jQuery Magic
## Intro

You are now a wizard and you will no longer hard code html during your time at Hogwarts (or the duration of this assignment) <br>
You will make things appear and disappear (and more) with the magic of jQuery!<br>
This homework is recommended to be done with a Harry Potter theme. But if you are unfamiliar with Harry Potter, that's cool, you can make up all your wizard details.

## Setup - Get Ready to Make So Much Magic

- Make a folder inside your `homework` folder for w5d03 called `hogwarts`.
- `cd` into the `hogwarts` folder
- `touch index.html`
- `touch main.css`
- `touch app.js`
- `code .`

#### In main.css

```
body {background-color: #F8F7FF}/*or any color of your choosing*/
```
-  Don't forget to  `⌘S`

#### In app.js

```

if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file!')};

```


-  Don't forget to  `⌘S`

#### In `index.html`
- `html` + `tab` set up boilerplate html
- Add a title inside the `<title>`tags (where will this title appear?)
- Inside the `<head>` tag:  
  - `<link rel="stylesheet" href="main.css">`

- Inside the `<body>` tag:
  -  `<script type="text/javascript" src="app.js"></script>`
-  Don't forget to  `⌘S`

#### In terminal
- `open index.html`

#### In the browser
- `⌘ ⌥ I` - to open Chrome Dev Tools
- Check: did your background-color for your page load? Do you see your title in the tab? If not, fix it now.
- Check: did your console.logs log?

#### In index.html

- Add a `<div id="container"></div>` inside the `<body>` tags

Add jQuery (where? Does it matter? Not sure? Test it!):

 ```
 <script
src="https://code.jquery.com/jquery-3.2.0.min.js"
integrity="sha256-JAW99MJVpJBGcbzEuXk4Az05s/XyDdBomFqNlM3ic+I="
crossorigin="anonymous"></script>
```

- don't forget to  `⌘S`


#### In the browser
- `⌘R` to refresh/reload the page
- Check: console.log logging correctly? If not, fix it now


#### In app.js
- comment out or delete your console.logs, now that you know everything is linked and loaded correctly.
- Set up your workflow, you will be going between your `index.html` `app.js` files, your browser and these instructions - make it so you don't need to move your windows every time you need to change
- Nice work!


<hr>
&#x1F534; The commit message should read: <br>
"Commit 0 - All my files are linked and loaded"
<hr>




## Year 1

**Important** : You are encouraged to comment out console.logs that you no longer need. There will be no further prompts for this advice.

- [Open up your jQuery Cheatsheet](../../../../../wiki/JQuery-Cheatsheet-as-Tables )- for reference

- Make sure that your pages loads completely before you start using magical jQuery by adding

#### In app.js

 -
```
 $(() => {
	// put jQuery in here
});
```
- Query for your div with the `id` of `container` and set it to a variable named `$container`
- console.log `$container`
- Create an `<h1>` element and set it to a variable called `$h1` and console log it
- Add some text inside the `h1` element. Example text: 'Hogwarts'
- Why isn't your `$h1` it appearing on your page?
<details><summary>Hint</summary>

 It needs to be appended

 - Append your `$h1` to your `$container`

</details>

- **It's magic! Isn't it?**

-  In your `main.css` file, add a css rule where all text will align center inside the `body`

<details><summary>Test yourself</summary>

Your HTML structure should look like this ![image of dev console elements](https://i.imgur.com/IXlUnOO.png)

</details>


<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 - I added my first element and it was fun"
<hr>

## Year 2
Following what you did in Year 1, add the following:
- `h2` element with your name
- `h3` element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
- `h4` element with your pet's name
	- this `h4` element should have a class with a value of your pet type (owl, cat, toad, etc)
- `h4` element with your wand (You can make it whatever you want. Need help coming up with one? Here is one of many websites to help you find your wand [playbuzz.com](http://www.playbuzz.com/terryraynor10/which-wand-would-you-be-given-in-the-world-of-harry-potter) )
- In your `main.css` add an attribute of `font-family: fantasy;` to all elements that have a class that matches your pet's class

 <details><summary>Test yourself</summary>

  Your HTML structure should look like this

  ![image of dev console elements](https://i.imgur.com/5rFQeod.png)

 </details>


<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - I added more elements. My power grows with my dedication and hard work"
<hr>

## Year 3
Following what you did in previous years, add the following into an unordered list (with the attribute of `storage` and a value of  `trunk`):
  - list items of
    - butter beer
    - invisibility cloak (add a class of secret)
    - magic map (add a class of secret)
    - time turner (add a class of secret)
    - leash (for your pet, be sure to give this list element the same class as you gave your pet)
    - Bertie Bott's Every Flavor [Jelly] Beans.
    - append the unordered list to your container div
   - In your `main.css` file, give the items with a class of secret an attribute of `opacity: 0.5;`

   - In your `main.css` file, remove the bullet points from the list items

<details><summary>Test yourself</summary>
Your HTML structure should look like this

![image of dev console elements](https://i.imgur.com/obTO6qD.png)

</details>

<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - I added list elements. That code didn't seem very dry. I wonder if there is something I could do about it in the Hungry for More section"
<hr>

## Year 4


You want to show off how many classes you are taking

- Make a table

**Hint:** Look under `More Examples`, `<p>Simple table with header</p>` at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) to see the correct HTML element layout
  - Right above your table add an `h5` that says 'Spring 2017'
  - Inside the table add a `thead` element
  - Inside the `thead` element add two `th` elements
  	- in the first `th` add the text `Day`
    	- in the second `th` add the text `Classes`
  - Create a `tr` element and add two `td` elements inside.
  	- in the first `td` add the day Monday
	- in the second `td` add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
  - Create more `tr` elements with `td`s inside so that you have Monday - Friday and classes each of those days
  - In your `main.css` file, add a gray 1px solid border around your `table`, `th` elements and `td` elements
  - In your `main.css` file, add a rule that will center your `table` on the page


<details><summary>Test yourself</summary>

Your HTML structure should look like this

![image of dev console elements](https://i.imgur.com/Ic4hfy7.png)

</details>



<hr>
&#x1F534; The commit message should read: <br>
"Commit 4 - I realize I can make things that are ever increasingly more complex with greater ease. Adding order is always more effort than causing chaos"
<hr>

## Year 5

Things get interesting

- Break your wand! (select the element that contains your wand and remove it)
- Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
- Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
- Make your new wand stand out by adding a `color` of `indigo` (or whatever color you like). But do it with magic (jQuery): Don't add this css in your `main.css` file
- Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside `unordered list`)
- Have your pet come back (remove your pet from the DOM, put it back in its original location)

<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - The days go by slowly and the years go by too fast"
<hr>

## Year 6

School is so fun!

- Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
- Nosey roommate falls asleep 2 seconds later (chain the jQuery method `delay` on your `hide` method (give argument of at least `2000`) to prevent showing your secret elements too soon.
- Use jQuery method `show` to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
- Accident! You transmogrified your pet's leash into half cabbage
  - add the class cabbage to your pet's leash. Do not replace your pet's leash's original class.  Your pet, which also has the same class should remain unaffected
  - add an attribute of `color:CHARTREUSE;` in your `main.css` for all elements that have a class of cabbage
- Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)

<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - A cauliflower is a cabbage with a college education - Mark Twain"
<hr>

## Year 7

Though your time at Hogwarts is nearly over, your journey of learning has just begun

- Update your class schedule to read 'Fall 2018'
- Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of `trunk`
- Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of `trunk` with a new property of `chest`
- Add some CSS to your page. Feel free to experiment and make this page your own
- Take a screenshot of your page and add it to your homework folder

<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - I am getting more comfortable with ambiguous instructions"
<hr>



## Post-Graduation (Hungry for More - choose any)
- Research how to and then [add a Favicon](https://bitsofco.de/all-about-favicons-and-touch-icons/)  (ok to hard code this in your `index.html`)
- Refactor your code. Make it more dry. Are there places you could have used a for loop? Functions you could have created? Any jQuery functions you could have chained?
- Clean up your code. Check indentation be sure you have plenty of comments
- Add more delays to show your pet leaving and coming back from its mission Get inspiration [here](https://youtu.be/7GjssFdiUNw)
- Add CSS animations. We havn't covered them yet. Get inspiration [here](http://animista.net/)


## Technical Requirements
1. Your JavaScript files MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines

- Submit your homework via your github fork (to the remote fork) and please don't forget to fill out this [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform)!
