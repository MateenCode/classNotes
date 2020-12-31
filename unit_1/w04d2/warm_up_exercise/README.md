![](/ga_cog.png)

---
Title: Introduction to Flexbox<br>
Type: Morning Exercise <br>
Duration: "0:45"+<br>
Creator: Karolin Rafalski<br>
    Course: WDIR-Space-Ghost<br>
Competencies: CSS, Flexbox<br>
Prerequisites: HTML, CSS basics<br>

---



# Flexbox
![Flexbox logo](https://i.ytimg.com/vi/JVYVDpdvdMo/maxresdefault.jpg)




## Intro

### A Very Brief History
Once upon a time, monitors were square and monochrome. As display technology advanced, monitors got bigger, more colorful, and wider. Browser technology also improved, allowing browsers to be resized to nearly any size the monitor would allow. Finally, mobile devices came on the market, providing not only new sizes and proportions but also for the display to rotate and change orientation. This provided new challenges for layouts with CSS.

Flexbox was introduced as part of CSS3, it has been around since ~2008. Despite being a technology that has been around for nearly ten years, it lacked consistent browser support (until recently) and thus developers have often had to fall back on floats and relative positioning to solve the kind of layout challenges that flexbox was built to solve.

### Can I use flexbox?
Flexbox, currently has near universal support from all major modern browsers. You can find out what browsers support by going to [caniuse.com](http://caniuse.com/) , this website also documents support for just about anything else you might want to put in the browser, inclulding HTML and JavaScript. If you are wondering if you should be using `vendor prefixes` (looks like the code below) and how to write them, a great resourse is [shouldiprefix](http://shouldiprefix.com/):

```
.page-wrap {
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
}
```

In this course we are only worrying about modern browsers (or just one browser, in the interest of time for hw assignments/labs) (we don't worry about supporting any version of IE, and currently Safari is in version 10.1+, so you would only need the vendor prefixes above **IF** you needed to support older browsers).

TLDR; - we don't need to write any vendor prefixes for flexbox for this lesson because everything we are going to do is supported by Chrome.

Also, there are a lot of tools out there to write your vendor prefixes for you like [pleeease.io](http://pleeease.io/play/). Later, when you learn React/Webpack, you can also learn to automatically have your CSS compile with all the prefixes needed!

### Flexbox is its own thing
Flexbox is built with its own logic, seperate from floats and other layout properties. Rather than noodling around with numbers, flexbox properties are more descriptive like `justify-content: space-between;` or `flex-direction: column;` with the spacing and resizing being calculated under the hood for you. This resizing happens live on browser resizing or even rotating a mobile device. See the section [Basics & Terminology](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Flexbox has just two types of elements. Parent, or better known as `flex container` elements and children, or better known as `flex items`. Each have their own properties.



### Use Case for Flexbox
One great use case for flexbox is a layout pattern that is often reffered to as `cards`. Cards are often used for online shopping.


Wide:
![cards in online shopping cole haan large example](https://i.imgur.com/56uik0T.png)

Narrow:
![cards in online shopping cole haan small example](https://i.imgur.com/LwYtndU.png)

Here are some commonly desired layout patterns:
- even spacing between cards
- The number of cards wraps to another row if it doesn't fit the width
- The cards are all the same size
- The first and last element align with other elements on the page to provide uniformity and overal page layout cohesion. No matter the width, the cards behave in a certain way that is expected and generally desired.

### What We Are Building Today
We will be building cards that just have a single letter on them. As we build we will learn about some properties of Flexbox and their behavoirs.
![Final build](https://i.imgur.com/TFc73Sf.png)



### Getting Started

#### Starter-Code Directory

- Navigate to the starter-code directory
- Inisde are four files and a folder:
	- The folder `metropolis` contains font files (don't worry about them! They are good to go!)
	- `index.html` - it is already set up for you
	- `app.js` - this has functionality to help us add and remove divs on the press of a button so we can focus on writing CSS, rather than HTML - it is already set up for you
	- `starter.css` - a little bit of css to get us started - it is already set up for you
	- `main.css` - this is the **ONLY** file that you will be coding in for this morning's exercise

- `open index.html` to open the file in your browser. It should look like this:
- ![stater index.html apperance](https://i.imgur.com/A6nxcmv.png)
- The buttons should add and remove a letter `card`
- `code main.css` to open the `main.css` file that you will be coding in.
- Set up your workflow. Set up all the different windows you will be working in, in a way that helps you have a smooth work flow, so you are limiting the amount you have to minimize and resize your work and you can instead just focus on coding, ,Here is my layout for this lesson. Different layouts will work with different lessons. But always take a minute to try to find a good workflow. ![Karolin's workflow](https://i.imgur.com/gsk0jCz.png)

#### Flexing the cards
- Let's add a border to all of our elements so we can see their sizes and layouts. Add the following to the `main.css` file:
- `* { border: 1px solid gold}`
- As we add cards (using the `+` button on the `index.html` page), we can see that they are being added as block elements
- Let's open up Chrome Dev Tools, so we can see where the cards are being added and their html
- The letters are inside of a div that has a class of `card`
- The `card` divs are inside a div with a class of `flex-container`
- Let's make the cards flex items by adding the following code:

```
.flex-container {
  display: flex;
  background-color: #e9ece5;
}
```
- The cards now should all add onto one row

#### Styling the cards
- Right now our letters look like plain text, let's make them look more like cards
- We'll change the color of the text, the background, and give some padding and margins, lastly we'll center the letter in the card
-
```
.card {
  color: white;
  background-color: #b3c2bf;
  padding: .5em;
  margin: .3em .3em;
  height: 200px;
}
```

#### Styling the flex container
- The flex-container can have any regular properties or it can be a flex item of another container. In our case, its relation to its parent element is non-flex.
- It would be nice if the container was a little narrower than the `header` and would stay centered on resizing. We can achieve this by adding:

```
.flex-container {
  display: flex;
  background-color: #e9ece5;
  width: 90%;
  margin: auto;
}
```
expected apperance:
![dd](https://i.imgur.com/HFKeM1i.png)



- we can see that our cards can move outside of the parent container causing an unexpected and unappealing look
- By default, flex items only stay on one row. In this case it is possible for them to overflow their container. We can make it look better by making the overflow `hidden` which will not allow the user to see the overflow or allowing the user to `scroll` the overflow content. Let's scroll!


```

.flex-container {
  display: flex;
  background-color: #e9ece5;
  width: 90%;
  margin: auto;
  overflow:scroll;
}
```

- Flexbox also will let you wrap content into another row, so let's add that

```
.flex-container {
  display: flex;
  background-color: #e9ece5;
  width: 90%;
  margin: auto;
  overflow: scroll;
  flex-wrap: wrap;
}
```

**Bonus:** `flex-wrap` can have a value of `wrap-reverse` how does that orient the cards?

#### Flex-basis

Something looks off, instead of neat rows and columns, we seem to have a bit of a skew from row to row:
![](https://i.imgur.com/SSAhahH.png)

- By default, Flex items grow to fit their content and no more. These letters all have different widths (quick compare: `H`, `I`, `J`), sometimes, this look is desirable. In our case it isn't. Let's set the minimum width using flexbox's `flex-basis` property

```
.card {
  color: white;
  background-color: #b3c2bf;
  padding: .5em;
  margin: .3em .3em;
  flex-basis: 1em;
}
```

- Yay! But wait! now our letters are off to the left and no longer centered! Let's fix that using the `text-align:center;` property

```
.card {
  color: white;
  background-color: #b3c2bf;
  padding: .5em;
  margin: .3em .3em;
  flex-basis: 1em;
  text-align: center;
}

```
- Now that we are set with sizing, let's comment out or remove our gold borders rule

#### Flex-direction
By default, the `flex-direction` is `row`, but we can play around with the order of our `flex-items` by changing the `flex-direction` property of the `flex-container`
Note: we will need to add a `height` in order to see multiple columns

```
.flex-container {
  display: flex;
  background-color: #e9ece5;
  width: 90%;
  margin: auto;
  overflow: scroll;
  flex-wrap: wrap;
  flex-direction: column;
  height: 400px;
}
```

That was fun, but not quite what we want, so let's set flex-direction back to `row`

#### Justify Content
The `justify-content` property is jam packed with great responsive layout options.

- Right now, as we add cards, they add from left to right. But we have other really nice options
- Let's start with center:

```
.flex-container {
  display: flex;
  background-color: #e9ece5;
  width: 90%;
  margin: auto;
  overflow: scroll;
  flex-wrap: wrap;
  flex-direction: row;
  height: 400px;
  justify-content: center;
}
```
- Take a moment to play around with it, it adds a single centered card and then with each card moves them outwards until the row is full, and then wraps into the next row, where the centering begins again.

Center:
![](https://i.imgur.com/WFQl4Sz.png)

- Right now the elements are clustered in the middle. What if we wanted them centered, but just have ... more space around?
- Flexbox has a `space-around` property! Let's give it a whirl

Space-around:
![](https://i.imgur.com/s3InQM7.png)

- Ok! That's cool, but what if you want the start and end to align with the edges and then any additional elements to have even space between?
- Yes flexbox can! Witht he `space-between` property

Space-between:
![](https://i.imgur.com/TSCzomg.png)

**Bonus:** read https://css-tricks.com/fighting-the-space-between-inline-block-elements/ - one of the best articles on how to work through challenging css problems.


#### Vertical Centering
Another gnarly challenge of responsive design is vertical centering/positioning. This isn't an issue with our alphabet cards because they all have the same height, our .flex-container sizes based on its content and we're already going for flexbox's default. But if you need it, flexbox has it! Look into `align-items`

#### Adding Flex Properties to Individual Flex-Items
Right now, all of our elements are uniform in size and color. This isn't visually intersting and sometimes we need to give it a bit more flair.

##### Set Up `selected` cards
Built into our site, is the ability to toggle a class of `selected` on our cards. All you have to do is click on the card. Right now though, it will only show in the dev tools.

Let's make our selected cards stand out.

```
.selected {
  background-color:  #fae596;
  color: #40A69A;
}
```

Now when you click on them they should toggle between their new look and old look!

#### Flex-grow/Flex-shrink
Sometimes we do want our cards to be different widths. Unlike the default which was based on letter width and lacked conventional proportions, we can make the cards be proportional to each other. Each `flex-item` starts with a `flex-grow`/`flex-shrink` value of 1.

- Add a `flex-grow` value of 2 to our `seleted` cards

```
.selected {
  background-color:  #fae596;
  color: #40A69A;
  flex-grow: 2;
}
```

- This will get grow the selected cards out proportionally, but if there is not enough space, it will allow for the items to grow but not overflow their container

#### Flex-order
You can also change the order of the flex items. Let's say we want our `selected` cards to be featured on the left

```
.selected {
  background-color:  #fae596;
  color: #40A69A;
  flex-grow: 2;
  order: -1;
}
```

![](https://i.imgur.com/2aYPXWC.png)


#### Final Thoughts
Flexbox's intuitive design and descriptive properties are both powerful and easy to learn.

There are a handful of things this lesson did not cover. Below is the CSS-Tricks `A Complete Guide` - indeed, it is complete and quite short which is a beautiful reflection of the elegance and utility of flexbox.

#### References

CSS-Tricks: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Flexplorer: http://bennettfeely.com/flexplorer/

#### Hungry for More (choose any):
- Read the three articles in this README.md
- Continue to experiment with flexbox properties and update the cards to something that suits your taste
- Check out Flexbox's other great solves like sticky footer: https://philipwalton.github.io/solved-by-flexbox/
