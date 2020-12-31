
Title: Fluid Layout and Floats <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Instructor:Karolin Rafalski<br>
Creator: Karolin Rafalski
Competencies: CSS <br>
Prerequisites: Basic HTML, CSS

---
# Morning Exercise

## Fluid Layout Intro


When the web started, monitors were all fairly similar. Even when CSS was created and implemented, the way people viewed websites was still quite similar.

Because of this, CSS was designed to have features similar to print and newspaper layouts and many things were set by pixel size and the goal was to have a design be 'pixel perfect'

As monitor technology improved, more widths and sizes became available. Browser technology also advanced in many ways, including allowing for browsers to be resized to nearly any size. Finally, mobile devices were introduced that were not only  much smaller than a typical monitor, they also had two possible orientations.

## Can I use?

As new technologies arise in HTML and CSS, some browsers are faster to adopt them than others. In the past, IE was often the least able to adapt changes.

To check whether a certain feature is compatible in a browser, we can check a web site called [`Can I use`](https://caniuse.com)

Let's search for `flexbox` (you'll learn about it in a later lesson). As you can see it is fully compatible in all browsers except for IE, where it is partially supported.  


## Should I Prefix?

If you find a feature that is not supported, or not fully supported, you can go to [`Should I Prefix`](http://shouldiprefix.com/)

There is a list of CSS features that either no longer require a prefix (coded in green). Or are in blue. If they are blue, you can expand them and see how you would write the vendor prefixes, so you can have compatibility across browsers.

Things are always changing, but right now a feature called `appearance` requires vendor prefixing. You can see an example below.

For the appearance feature, you would write the property three times. Two times would include the vendor prefix so that it can be used in different browsers.

As you look at older code, you may see vendor prefixes for features that no longer require it. It's ok! It won't break anything. But you won't need to include those vendor prefixes on new work.

![vendor prefix](https://i.imgur.com/OCHkMlT.png)

You can also use a CSS prefixer to write the prefixes for you, then just copy paste [Pleaeease.io](http://pleeease.io/play/)

##  Fluid Layouts and Floats Intro

In order to build web sites that look good on any browser, can be resized, in any orientation, CSS had to have new features added.

Unfortunately, numerous responsive solutions were not compatible with Internet Explorer (IE), a major browser used by a large population for many years. Therefore web developers had to write some complicated CSS rules. You may still see them as you check out older projects.

In this lessson, we'll be looking at how to use fluid layouts and floats in a modern way, and save other layout techniques that are better suited for newer technologies (like flexbox) for later lessons.


## Fluid Layout Build
We're going to build a website about some of the craziest code dreams,  using everything we've learned so far and using fluid layout techniques and floats

![finished](https://i.imgur.com/JgQGfy1.png)

## Get started

- Navigate to morning exercise folder
- open `index.html`
- You should see HTML content. The background should be blue This lets us know that the HTML and CSS files are properly connected.

## Add Borders and Some Color

Let's get started by adding colors to our main elements and a universal border (we'll get rid of this border later -  but in the meantime it will help us see where one element ends and the next one begins)

```css
* {
  border: 1px solid gold;
}

body {
  background: #255C7D;
}

.half, .third {
  background: ghostwhite;
}

```
Expected appearance:

![body blue, dream divs ghost white](https://i.imgur.com/Bda2dNY.png)

## Setting Width with Percentages

Rather than using pixels or the contents inside to determine the width of an element. We can use width and percentages. There are three ways to set it

- `width` - always this width
- `min-width` - can be larger than this width, but cannot be smaller
- `max-width` - can be smaller than this width, but cannot be larger

Note: You can also set `height` in the same way. It is unusual to set fluid layouts based on heights. We'll address one use case later.

`.container` is a commonly used class name for elements that hold the main content of a page. Often the width of this container is smaller than the whole page.

With fluid layouts, margins are not typically used, but rather implied by setting a width that is smaller than 100%. The element can be centered using `margin-auto`

```css
.container {
  width: 90%;
  margin: auto;
}
```
Expected appearance:


![set container width and center](https://i.imgur.com/XjcMDQB.png)

## Set two block elements to be next to each other

Let's put Kono and Vashti's dreams next to each other. Both are divs have a class of `half` (we'll also include a lot of the same rules to the dreams with a class of `third`)

First we have to set the display to `inline-block`, since divs have a default display of `block`. Then we'll set a width of `49%` so that we have a little bit of space between the two divs

```css
.half, .third {
  background: ghostwhite;
  display: inline-block;
  width: 49%;
}

```

 ![featured dreams sized inline-block](https://i.imgur.com/nyEMsFC.png)

 ## Setting Width of Images using Percentages

 Right now our images are a bit too large for the divs. We can use the same width property with percentages to set a responsive size to our images. The height will adjust to stay proportional to the original. You could also set the height as well, but sometimes that can cause the image to stretch in an undesirable way.

 Let's also be careful to only affect the images that are inside a class of `half`

 ```css
 .half > img {
   max-width: 50%;
 }

 ```
![featured dreams half images sized](https://i.imgur.com/AejAF5m.png)

## Intro to Floats

The property of `float` allows an element to be floated out of it's default alignment and other elements will float around it. An excellent use case for floats is to use them to get text to wrap around an image.

The float property has four possible values: `none` (default), `left` , `right`, `inherit`

Because floats take elements outside of their normal alignment, strange things can happen with the rest of your elements. Floats are an early feature of CSS, and were once used in many places. There are newer and more elegant ways to achieve some other responsive layouts that floats used to achieve. You'll learn about them in a later lesson.

## Tricky Floats! Tricky!

Let's take step away from our project to look at a simple example of floats. You have these examples, but just watch me code them out.

![3 Block elements](https://i.imgur.com/s4ishmp.png)

We'll start by floating the `main` element left

```css
main{
  width: 68%;
  height: 200px;
  background: teal;
  float: left;
}
```

Our `main` is now floated left, but the `aside` and `footer` look strangely merged.

![3 Block elements weird aside footer merged](https://i.imgur.com/KOtQOhW.png)

Let's float the `aside` right

```css
aside {
 width: 28%;
 height: 150px;
 background: orange;
 float: right;
}
```
OK! That helped, a little, now the footer is in a strange place.


Expected Apperance:
 ![2 Block elements floated footer in strange place](https://i.imgur.com/OpSvvnH.png)


It has to `clear` the floats so it can be below them. `clear` is a sister property to float and it can have the following common values: `left`, `right`, `both`, `inherit`
Let's add `both` to our `footer`

```css
footer {
  width: 100%;
  height: 100px;
  background: dodgerblue;
  clear: both;
 }
```

Expected Apperance:
 ![3 Block elements floated and cleared](https://i.imgur.com/Tq5nLxh.png)

As you can see, floats can have a domino effect on other elements. So we have to be thoughtful about how and where we use them, and how we'd lay out other elements


## More Tricky Float Stuff !

If you have an element that contains only floats, it will collapse

Imagine that you would like the four divs with the class of `card` to be floated in this example:

 ![before float](https://i.imgur.com/sMvDmnS.png)

Go ahead and add a float:

```css
.card {
  width: 100px;
  height: 50px;
  background: thistle;
  margin: 10px;
  float: left;

}
```

This is probably not the layout you would want:

![collapsed container div - thanks floats](https://i.imgur.com/2v85WuF.png)

### Clearfix for floats

There isn't really an intuitive and clean way to solve this. Thankfully, other people have solved this and you can just use their solution. You can solve this problem by using that is typically referred to as `clear fix` or `clearfix`


```css
.container:after {
  content: "";
  display: table;
  clear: both;
}
```

Expected Apperance:
![clearfix](https://i.imgur.com/a7noT8z.png)

What this does is adds a pseudoclass of `after` to the collapsed div, and 'tricks' it into having a display and content in a way that it no longer is collapsed, and instead contains the floated elements. If you have furrowed your brow with worry and feel confused, it is ok!  In the project we are building, we'll be adding other text within our element that contains a floated element, so we won't have to worry about using a clearfix and we'll introduce you to other layout methods that are cleaner, simpler to understand and more modern. However, `floats` were one of the most popular methods for creating layouts and many people still use them, so it is good to be introduced to the basics.


## A Good Use Case for Floats

Given the above trickiness of floats, they are best avoided. Modern CSS has much more elegant and simple solutions (we'll learn about them in upcoming lessons). It is good to know because there is a lot of legacy code out there and you'll definitely see these things.

Let's get back to our mini-project:

There is a nice and simple use cse for floats, and that is to wrap text around an image in a way you'd find in a newspaper or magazine. Let's go ahead and do that for the content inside our divs with a class of `half`

```css
.half > img {
  max-width: 50%;
  float: left;
}

```
Expected appearance: You can see that Kono's and Vashti's dreams have text wrapping around their images.

![float image](https://i.imgur.com/ykwiXds.png)

Our text is now floated around our image, but it is right up against our image. Let's put some space between the image and text

```css
.half > img {
  max-width: 50%;
  float: left;
  margin-right: 5%;
}
```

The content inside our dream divs (`half`, `third`) expands right to the edge. Let's add some padding all around to space things out.

```css
.half, .third {
  background: ghostwhite;
  display: inline-block;
  width: 49%;
  padding: 2%;
}
```

Uh oh! While we got some space around the inside elements, the divs are no longer next to each other! What happened?

 ![added padding elements no longer aligned](https://i.imgur.com/5Ko8CSY.png)


 ### Box Sizing

 By default, most the size of elements are measured by their content only. Padding, borders, and margins are not considered in the calculations.

Rather than trying to figure out the exact size of each of these elements, you can change how the size of the elements are measured by changing the `box-sizing` property.

```css
.half, .third {
  background: ghostwhite;
  display: inline-block;
  width: 49%;
  padding: 2%;
  box-sizing: border-box;
}
```

![fixed unexpected sizing with box-sizing property](https://i.imgur.com/tr3vFqA.png)

Super! But why is Najee's dream now being 'pushed' downwards?

### Vertical Alignment of Inline-block Elements

Many times, as you add to elements it pushes other elements away. But in this case, if we look carefully, Najee's dream container (class: `third`), aligns perfectly with the bottom of Salina's dream


 ![fixed unexpected sizing with box-sizing property ](https://i.imgur.com/tr3vFqA.png)

This is because the default is for it to be aligned with the bottom. Let's change it to be aligned with the top

```css
.half, .third {
  background: ghostwhite;
  display: inline-block;
  width: 49%;
  padding: 2%;
  box-sizing: border-box;
  vertical-align: top;
}
```

 ![aligned element to top, rather than bottom ](https://i.imgur.com/H2eMGbi.png)

 ### Applying Styles to Another Element

We have been able to compare and contrast how the floated image has affected the divs with a class of half, but now we also want to apply the same styles to the images with a class of third:

```css
.half > img , .third > img {
  max-width: 50%;
  float: left;
  margin-right: 5%;
}
```
Expected Appearance:

![applied same styles to images in divs with a class of `third`](https://i.imgur.com/NQHosLd.png)


### Changing Styles Between Similar Elements

We really like the styles we added to our divs. But we have three with a class of third, that we would like to have a width of 32%.

We can set that easily, if we override the rule where it is set at 49%. We just have to select the class of third and change it below the initial rule.

Najee's dream is the shortest, but we also want his `div` to be just as big as Salina and Luis's dreams. Let's set a min-height of 280px too

```css
.third {
  width: 32%;
  min-height: 280px;
}
```


Expected Appearance:
![applied same styles to images in divs with a class of `third`](https://i.imgur.com/3I03AG5.png)

### Polishing Our Site (and review)

Let's update our site with some fonts, colors, margins and more to remind ourselves of what we've learned in past units and give our site a more polished look.

First up, let's comment out our gold borders

```css
/* * {
  border: 1px solid gold;
} */
```

Let's add bottom margins to our divs with classes of `half` and `third`

```
.half, .third {
  background: ghostwhite;
  display: inline-block;
  width: 49%;
  padding: 2%;
  box-sizing: border-box;
  vertical-align: top;
  margin-bottom: 16px;
}
```
Expected Appearance:

![removed universal border and updated margin bottom for divs](https://i.imgur.com/t1b6q4B.png)

Let's add some google fonts and style our fonts

```css
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Poiret+One');

body {
  background: #255C7D;
  font-family: 'Poiret One', cursive;
  color: steelblue;
}

h1, h2 {
  font-family: 'Comfortaa', cursive;
  color: black;
}

h2, h4 {
  text-align: center;
}

p {
  text-align: justify;
}

```
Expected Appearance:

![Updating font styles](https://i.imgur.com/p08wUtt.png)

Almost there! Remember most text elements (`h1`- `h6` , `p` have a default display of `block`). Let's change that for our navigation area.

```css
nav > h1 {
  display: inline;
  font-size: 3em;
}

nav > h3 {
  display: inline-block;
  width: 15%;
  text-align: right;
  color: ghostwhite;
}
```


###  Now Add the following css

```css

html {
  background: #255C7D;
}

body {
  background: #255C7D;
  font-family: 'Poiret One', cursive;
  color: steelblue;
  background: linear-gradient( #f8B195 5%, #f67280 10%, #C06C84 20%, #6C5B7B 30%, #255C7D);
  margin: 0;
}
```

Great! You can now expand and shrink your browser and see that this site looks pretty good for a variety of sizes. It still breaks when it gets too narrow or too wide, that's ok! We're going to learn even more about making a page look good at all sizes in later lessons.  

Expected Appearance:

![Finished look](https://i.imgur.com/RwtDWJd.png)


----------------------------------

References:

[Can I use](https://caniuse.com/)

[Should I prefix](http://shouldiprefix.com/)

[Pleaeease.io](http://pleeease.io/play/)

[All About Floats](https://css-tricks.com/all-about-floats/)

[Solving Clearfix](https://css-tricks.com/snippets/css/clear-fix/)

[linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
