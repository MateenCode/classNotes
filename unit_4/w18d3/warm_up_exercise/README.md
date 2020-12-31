
Title: Introduction to Sass (Semantically Awesome Style Sheets)<br>
Type: Morning Exercise <br>
Duration: "0:45"+<br>
Creator: Karolin Rafalski<br>
Competencies: CSS, Sass basics: variables, errors, expand, import, partials, mixins<br>
Prerequisites: CSS, Terminal<br>

---



# Sass - Semantically Awesome Style Sheets
![Sass logo](https://www.interactivesearchmarketing.com/wp-content/uploads/2014/04/sass.png)



## Intro
Sass is a ruby-based CSS preprocessor. Sass lets you use features in CSS that don't exist yet; like variables, nesting, mixins, and more! [More info at the Sass Website](http://sass-lang.com/guide)

Sass files have a suffix of `scss`. Browsers can't understand `scss` files. These files have to be _translated_ into plain CSS in a file with an extension of `.css`, so that the browser can read them.

*Note:* Sass can be written with two different syntaxes! The original syntax is known as Sass, and looks quite different from css syntax (no curly braces, no semi-colons). The other syntax is SCSS it is very similar to the CSS syntax. Today's lesson will use SCSS syntax. [Read more here](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better)


### Getting Started

#### Install Sass

*In terminal* (any location - gems are installed globally)

- `gem install sass` - to install

- `sass -v` - check that it installed
<details><summary>Expected Output</summary>
 ```Sass 3.4.22 (Selective Steve)```
 </details>


#### Set up Sass with the Morning Exercise Project

#### IMPORTANT! File organization matters! Makes sure you are working in the correct file/folder/building your files in the correct location

<details><summary> Expected File Struture </summary>

![file structure after bourbon bitters install](https://i.imgur.com/2nhN9Tf.png)

</details>




 - make sure you are in the morning exercise, on the same level as the `index.html` file.
 - `touch css/main.scss` to create a `.scss` file inside the `css` folder
 - open a new tab at this level and type
 - `sass --watch css/main.scss` - this will watch for changes and update - much like `nodemon` for node!
 - fun rumor - the creator of Sass chose `Sass --watch` as the command name because of its similarity to the word `Sasquatch`


<details><summary> Expected output </summary>

```

>> Sass is watching for changes. Press Ctrl-C to stop.
      write css/main.css
      write css/main.css.map

```


</details>



 - go back to your other tab (don't cancel `sass --watch`) and
 - `code .`

 - you should now see some new files/folders
  - folder: ` .sass-cache`
  - inside the `css` folder there should now be
    - `main.css`
    - `main.css.map`
    - `main.scss` (already there, you just made it)
- *Investigate* - which file should the `index.html` link to: `main.scss` or `main.css`. Why?
- `open index.html` - Whoa - Space Ghost is huge! Let's reduce his size!

#### Write some Sass, see it compile into CSS
*In VScode, in the `main.scss` file:

```
img {
  width: 100px;
}
```
- `⌘S`

- open `main.css` it should look like this:

```
img {
  width: 100px; }

/*# sourceMappingURL=main.css.map */

```



- refresh your browser and space ghost should have shrunk



*Note:*  Everything in the `main.css` file should be compiled from `main.scss` - do not write directly into `main.css`.

##### Close `main.css` right now so you don't accidentally work in this file.




### Errors!
Have you ever pined for errors in css? Sass will give you errors!

Check out this one that I got!

![Sass error](https://i.imgur.com/dOcRLUz.png)

- Go ahead and mistype something in `main.scss` save it and reload your browser

- Fix it, save it, reload it!

### Variables

Have you ever dreamed that you could use variables when writing css? Now your dreams can come true with Sass!

This comes in really handy for choosing colors and reusing them, and for setting many properties and reusing them.

Let's set some color variables. Space Ghost's color scheme is fantastic - let's be sure we can easily reuse those colors

*In atom, in `main.scss`, starting on line 1 add:


```
$sg-grey   : gainsboro;
$sg-black  : #515358;
$sg-white  : #FCFCFC;
$sg-yellow : #FFCF73;
$sg-red    : #F1534E;

```

Now let's apply our $sg-black color to all the text and set a background color of `$sg-grey`

```
body {
  background-color : $sg-grey;
  color            : $sg-black;
}

```
- save the file and reload the browser

### Functions
Yes, it's true! SCSS has funcitons. You can use some built in ones or write your own! We could probably spend days learning about all the awesome stuff about Sass. But for today we will just use the `ligthen()` and `darken()` functions, which allow us to lighten and darken colors on the fly!


Let's set up the container div first. We'll make it a flex container and let's just quickly change the color so we can see our div.

```
.featured {
  display: flex;
  width : 98%;
  margin : auto;
  justify-content: space-around;
  background-color : darken($sg-grey, 30%);
}

```


### Nesting


Additionally, we're going to want our beef log and cheese log featured product divs to have the same width. Do we want 50%? 45%? 30%? Oh gosh! We just don't know yet! Let's set it to a variable we can change.

Put it at the top, with our other variables

```
$featured-content-width: 35%;
```


Our beef log and cheese log divs are inside the `.featured` div - there are a few ways we access this in regular css. Some more verbose than others. Some more readable than others.

But with Sass we can nest it! Writing it this way can be more readable and maintainable.

First, let's add a border to see what our elements look like (feel free to change the border color to whatever works for. you, we'll just be using it for testing):

```
* {
  border : 1px solid gold;
}
```

Now let's target our divs inside .featured

```
.featured {
  display: flex;
  width : 98%;
  margin : auto;
  justify-content: space-around;
  background-color : darken($sg-grey, 30%);

  div {
    width : $featured-content-width;
  }
}

```

- Let's refresh our browser to see the changes

Maybe, that's a bit narrow for our divs. Let's update our variable

```
$featured-content-width: 40%;
```

Neato!

### Extend/Inherit

Our beef log and cheese log divs are going to be similar in a lot of ways, but we want them to be a little different too.

We can write some nice DRY css code by using extend/inheritance.

Let's write the shared properties

```
.featured-content {
  border: 1px solid rgba (200, 200, 200, .5);
  box-shadow: 0 0 8px silver;
  background-color: lighten($sg-grey, 50%);
  text-align: center;
  padding: .5em;
}

```


*Note:* Your page should **NOT** have changed with this CSS, yet.


Let's give these properties to the beef-log div

```
.beef-log {
  @extend .featured-content;
}

```

- refresh your browser and you should see just the beef-log div has changed

Now, let's give the same properties to the cheese log div

```
.cheese-log {
  @extend .featured-content;
}
```

Let's make the Beef Log and Cheese Log divs look different

```
.beef-log {
  @extend .featured-content;
  color : $sg-red;
}

.cheese-log {
  @extend .featured-content;
  color: $sg-yellow;
}

```

Nice work!


### Import/Partials

#### Adding a CSS Library (or two)

Modularizing your CSS has many benefits. It helps organize code and it can allow teammates to work in different files.

CSS has an @import feature. But each @import is another get request to the server. You can use Sass to compile all your partials into one file first.

This also allows us to to integrate CSS libraries quite easily. Let's import some style from `bourbon.io`
We will need two modules(called gems - similar to `node_modules` , however they will be installed with Ruby), `bourbon` and `bitters`.


*In terminal*
- make sure you are in your css folder you may need to
  - `cd css`
- `gem install bitters`
- `gem install bourbon`
- `bitters install`
- a folder called `base` should appear in your css folder

- `bourbon install` - a new folder inside of your css folder should have been created called `bourbon`

- <details><summary> Expected File Struture </summary>

![file structure after bourbon bitters install](https://i.imgur.com/2nhN9Tf.png)

</details>

*Note:* Order matters. Bitters and Bourbon rely on each other. If you install bourbon before bitters you may get errors. If you get errors - delete the folders/files created with `bourbon install` and `bitters install` and run those two commands in the correct order

*In vscode, `main.scss`*
- at the very top (line 1) add
- `@import "bourbon/bourbon";`
- save and reload your index.html
- no news is good news - if you get an error, fix it

*In vscpde, `main.scss`*
- after the line `@import "bourbon/bourbon";` put
- `@import "base/base";`

- if you refresh your browser the most noticeable changes will be to the font and the buttons should be much bigger now, and blue

#### Add Your own Partial

*In terminal, in the `css` directory:*
- `touch _fonts.scss`

*In vscode, open the `_fonts.scss` file*
- Let's bring in some fonts from our `assets` folder

```
@font-face {
  font-family: "Afta-Sans";
  src: url("../assets/fonts/afta-sans/AftaSansThin-Regular.otf") format("truetype");
}

@font-face {
  font-family: "Chunk";
  src: url("../assets/fonts/ChunkFive/Chunkfive.otf") format("truetype");
}

@font-face {
  font-family: 'Speck';
  src: url("../assets/fonts/Speck-Display.otf") format('truetype');
}
```
*In `main.scss`: put the following with the other `@import`*
- `@import "fonts";`

*Note*: Partial files start with an `_` but when you `@import` them, do not include the `_`

Fantastic! Now let's add our new fonts!

- update the body font:

```
body {
  font-family      : "Afta-Sans";
  background-color : $sg-grey;
  color            : $sg-black;
}
```
- update the h1 font and center it

```
h1 {
	font-family: "Speck";
  text-align : center;
}
```
- update the h3 font inside the `.featured` div

```
.featured {
  display: flex;
  width : 98%;
  margin : auto;
  justify-content: space-around;
  background-color : darken($sg-grey, 30%);

  div {
    width : $featured-content-width;
  }

  h3 {
    font-family: "Chunk";
  }
}
```
### Adding another partial!

- Let's make our page a little more refined
- comment out or remove
```
* {
  border: 1px solid gold;
}
```

- After the other `@import`s
- `@import "finishing_touches";`

Fantastic! We did a lot of CSS and kept it organized and DRY!


## Hungry for More

### Keep on using Sass to update this page more
- You can remove the `finishing_touches` partial and work on your own finishing touches
- Or build on top of the `finishing_touches` partial - warning - that file has some naughty worst practices in there - you may want to check it out/rewrite it/ first

### Explore Mixins

##### Mixins - another super powerful feature of Sass

Mixins are similar to @expand. However, they can take arguments.

The short version of good practices of when to use @expand and when to use @mixin: @expand should be used for related elements (similar divs in a container). @mixins should be used for unrelated elements, for example, a header and a button or if you would like to pass an argument(s). [More info](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)

Inside `_finishing_touches.scss` You'll find a mixin at the bottom:

```
@mixin float( $translate ){
  0% {
      transform: translate(0px);
  }
  20% {
    transform: translate($translate , -$translate ) scale(1.01) ;
  }
  40% {
    transform: translate(- $translate , - $translate ) scale(.99);
  }
  60% {
    transform: translate ( 0px  ,  $translate ) ;
  }
  80% {
    transform: translate( - $translate , 0px ) scale(.99);
  }
  100% {
    transform: translate(- $translate, - $translate ) ;
  }
}

```
As you can see, these are properties of an `@keyframes`.

By passing in a variable, it can be customized for different elements.

In this case, I have used this to give the h1 a floating in space animation moving 14 pixels. The buttons will also float, but only on a hover, and only 2px.

```
@keyframes float {
  @include float( 14px )
}

@keyframes float-button {
  @include float ( 2px )
}
```
### Write Your Own Sass Function
You can create your own functions!

From the Sass Docs:
```
@function my-calculation-function($some-number, $another-number){
  @return $some-number + $another-number
}
```
[Learn more](http://thesassway.com/advanced/pure-sass-functions)
