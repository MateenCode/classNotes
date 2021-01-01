
---
**Title:** Introduction to SVG (Scalable Vector Graphics)
**Type:** Morning Exercise 
**Duration:** "0:45"
**Creator:** Karolin Rafalski
**Course:** WDIR-HOPPER
**Competencies:** SVG basics
**Prerequisites:** HTML, CSS, JavaScript<br>

---



# SVG - Scalable Vector Graphics
![SVG logo](https://www.w3.org/Icons/SVG/svg-logo-h.svg)


## Lesson Objectives
1. Learn what SVGs are
2. Learn to draw simple SVGs with a text editor
3. Through drawing via text editor, gain an understanding of the basic properties and behaiviors of SVG


## Intro

There are two major systems for representing graphic information on computers:

**Raster Graphics** - images are represented as rectangular arrays of pixels. Examples are typically: photos, bitmaps, JPEG, GIFs PNGs and more. Pros: complex images. Cons: difficult to scale (up or down)

**Vector Graphics** - images are represented as geometric shapes that are drawn by the viewing program. Examples are CAD (computer assisted drafting), Adobe Illustrator, Sketch, and Macromedia Flash. Pros: can scale up or down (from the size of a postage stamp to a billboard) - without loss of image quality. Cons: difficult to make ultra complex images (like photos) in SVG, at this time.

Vector graphics are scalable. Let's look at some examples from [SVG Essentials on O'Reilly Commons](http://commons.oreilly.com/wiki/index.php/SVG_Essentials/Getting_Started)

SVGs are part of HTML web standards (and have been since the late 90s). This allows SVGs to be adapted for many purposes. SVGs are written with XML tags and have attributes (and thus can be manipulated by CSS and JavaScript to be even more dynamic, interactive and awesome).



### Getting Started

#### Check out some SVGs in an HTML page
- Open the `svg-example.html` file
- Open Chrome Developer Tools
- Inside the `div` with the class `container` are two SVGs
  - The first one is a pie chart that is created with D3 (Data Driven Documents). It is a jQuery-like library that was developed by Mike Bostock, who worked at the New York Times, where he lead the development of complex data-visualization projects. It takes the data given and renders it into a pie chart. [More D3](https://d3js.org/)
  - The second one is the legend for the pie chart created in Sketch. Sketch is a drawing program (similar to Adobe Illustrator)
- This is a lot of complex code! We're going to build our very own modern art project that is going to deconstruct some of the basic components of SVGs so that we can understand them and be able to use them effectively

- Bonus - excellent read on learning D3/Learning how to code anything. [ starting a project and letting the goal inform your technical needs](https://medium.com/@enjalot/how-do-you-learn-d3-js-ccffc151419b)


#### SVG Basics

There are some common shapes for:

- Rectangle
- Circle
- Line
- Text
- Ellipse `*`
- Path - more complicated shapes - like triangles or outlines of countries/states `*`

`*` We will not cover these today

We're going to learn about SVG and these shapes, but using an investigational approach.

Go ahead and open `modern-art.html`

<details><summary>Final Outcome</summary>

![modern art](https://i.imgur.com/NMmUYLZ.png)

</details>

## SVG

The first thing to do is to add an svg element.
Below the `<h1>` tag add `<svg></svg>`

`⌘S` and open `modern-art.html` in your web browser

<details><summary>Expected Appearance</summary>

![browser appearance](https://i.imgur.com/YetcUU6.png)

</details>

Where is the svg? Open Chrome Developer tools `⌘ ⌥ I`

It is there, but it is not visible. Make it visible by adding the attribute of a border

```
<svg style="border:1px solid blanchedalmond;">

</svg>
```
Remember: SVGs are based on web standards, so we can use html attributes, including inline-style CSS.

Let's set a height and width of 500 pixels. Height and width are two attributes of SVGs (you could also set this with CSS, but the convention is to set them as attributes).

```
<svg style="border:1px solid blanchedalmond" height="500px width="500px">

</svg>

```

It is important to also think of the SVG as having a coordinate system, like a graph.

For example (using the first coordinate as the x and the second as y):

- position 0 , 0 is the upper left corner
- position 0 , 500 is the bottom left corner
- position 500, 0 is the upper right corner
- position 500, 500 is the bottom


```
<svg style="border:1px solid blanchedalmond" height="500px" width="500">

</svg>
```

Notice, that if you don't include units(like the above example with width), it will default to pixels, but you can use `em` or other web standard measurements to size your SVG element.

We can add more CSS attributes, let's move the element over so it isn't right up against the left side of the browser:

```
<svg style="border:1px solid blanchedalmond; margin-left:100px;" height="500px" width="500">

</svg>
```

## RECTANGLES
Inside the SVG element add
```
<rect/>
```

As you can see, the element appears in Chrome developer tools, but without any properties set it doesn't show in the browser.

Let's give it a width and height:

```
<rect width="200" height="200"/>
```

Before we jump into the next part. It is important to take note of the behaviors of this shape

Where did the rectangle go?

<details><summary>Answer</summary>

Upper left corner - the upper left corner of the rectangle matched with the coordinate of 0,0 in the SVG element.

</details>

What color is the rectangle?

<details><summary>Answer</summary>

The default color is black

</details>

Let's go ahead and change the color of the rectangle.
In order to do that, we have to use an attribute called `fill`

We can use any web-standard colors (names, hexadecimal, rgb, rgba, hsl...)

For this demo, let's just use some names

```
  <rect height="200" width="200" fill="hotpink"/>
```


<details><summary>Example Appearance</summary>

![SVG with hot pink rectangle](https://i.imgur.com/whFpwKj.png)

</details>

  What happens when we make a second rectangle?

  Above our first rectangle let's make a second rectangle, with the same height and width of 200px. Then give it a color of `gold`.

  <details><summary>Sample code</summary>

  ```

    <rect height="200" width="200" fill="gold" />

    <rect height="200" width="200" fill="hotpink"/>



  ```

  </details>

  What happened?
  <details><summary>Answer</summary>

The hot pink rectangle is on top of the gold one. We cannot see the gold one at all

</details>

Let's move our gold rectangle over a bit, by adding x and y coordinates

```
  <rect height="200" width="200" fill="gold" x="100" y="100"/>

```

 Looking good! The hot pink rectangle is overlapping on top of the gold one.

 Let's swap the order or our gold and hot pink rectangles

 ```
  <rect height="200" width="200" fill="hotpink"/>
  <rect height="200" width="200" fill="gold" x="100" y="100"/>  

 ```


 Let's add a third rectangle, and let's make the fill `lightsalmon`. Same width and height, but let's give it negative coordinates of x="-100" x="-100" and let's put it after the gold rectangle.

  <details><summary>Sample code</summary>

  ```
  <rect height="200" width="200" fill="hotpink"/>
  <rect height="200" width="200" fill="gold" x="100" y="100"/>
  <rect height="200" width="200" fill="lightsalmon" x="-100" y="-100"/>
  ```

  </details>



Can we have negative coordinates? Where will the rectangle go?
<details><summary>Answer</summary>

Yes, you can have negative coordinates. The rectangle is placed above and to the left beyond the border of the SVG. The parts that extend past the SVG are not visible, but you can mouse over them with the element selector from Chrome Developer Tools.

</details>

  <details><summary>Example Appearance</summary>
  ![SVG with three rectangles](https://i.imgur.com/X3VjALL.png)
  </details>

  Another property of rectangles is the border, which is created using an attribute called `stroke`
  Let's add a `darkorange` border to our gold rectangle

  ```
    <rect height="200" width="200" fill="gold" x="100" y="100" stroke="darkorange"/>
  ```

  It defaults to 1px in width. We can increase the width by adding a property of `stroke-width=""`
 Start by making the width 1px, then 2, then 4, then 10, then 20 and finally 50

 What happens with the stroke? Does it stay within the confines of the size of the rectangle? Does it extend past it? Look at how the overlap changes with the dark salmon rectangle. Before adding the stroke the gold and dark salmon rectangles were touching. Are they still touching or are they overlapping?

 Next let's add some transparency to our shapes. You can add transparency with the opacity attribute, which properties ranges from 0-1. You can also apply transparency using rgba() colors or hsla() colors. The benefit of using rbga() or hsla() is that you can change the opacity of the fill and the stroke separately. When using the attribute `opacity` it applies to the whole element.

 add `opacity=".9"` to the gold rectangle
 and `opactiy=".5" `to the hot pink rectangle

 Which one is more opaque? Which one is more transparent?

 Finally, let's add a transform. Just like CSS, you can rotate, skew, translate etc. SVG elements.

 let's add the following to our gold rectangle `transform="rotate(45, 175 , 275)"`

 <details><summary>Example Appearance</summary>

![rectangles complete](https://i.imgur.com/4mutJiS.png)

</details>

## Lines

Lines are another basic SVG shape.


Let's add two lines *on top of* our rectangles.

Does that mean the line elements should go before or after the rectangles?

Lines require a start and end point. Therefore they need 4 coordinates.
The starting coordinates are
 x1="" y1=""
 The ending coordinates are
 x2="" y2=""

 So to draw a line from the upper left corner, down to the bottom left we would do:
 ```  
 <line x1="0" y1="0"
            x2="500" y2="500"
            />
```

When we add this element and reload the browser, we should see - nothing. Unlike rectangles, lines have no default color. Because lines have no fill. Lines are made up of the `stroke` attribute, which by default does not appear.  

Go ahead and try to add `fill="silver"` This will not have any appearance. Because lines do not have a fill.

Instead, let's add `stroke="silver"` to our line. We should now have a nice line running through our art.

Let's add a second line that runs from the bottom left up to the upper right. What would the coordinates for that be?

  <details><summary>Answer</summary>

      ```<line x1="500" y1="0"
                  x2="0" y2="500"
                  stroke="black"
                  />```
</details>

We can modify the stroke color, opacity and width.
Let's add

```
stroke="#111"
   stroke-width="5"
   opacity=".5"/>
```

## Circles
Circles are very similar to rectangles. But rather than having a height or width, they have a radius. Also, their coordinates are set by the center of the triangle which is represented by `cy=""` and `cx=""` rather than x, y.

Let's put all of our SVG knowledge together to draw a circle that is
-  on top of all our other elements
-  centered in the middle of our SVG
-  set the radius to 25px.
-  give it a fill color of `RGBA(255, 218, 185, .1)` and
-  a stroke color of `stroke="RGBA(219, 112, 147, .5)"`
-  change the stroke width to 10px

  <details><summary>Answer</summary>

```
      <circle cx="250" cy="250" r="25" fill="RGBA(255, 218, 185, .1)" stroke="RGBA(219, 112, 147, .5)" stroke-width="10"/>
```
</details>

## TEXT
We are going to investigate one final element together

The text element is not self closing. It has an opening and closing tag. The text style is inherited from the html document/css. You can change it by using `font-family` and `font-size`

You can place the text where ever you'd like by using x and y coordinates.

Let's add the following to our SVG:

```
<text x="300" y="400" text-anchor="middle" transform="rotate(15)"
      font-size="50" stroke="indigo" opacity=".5">My Art</text>
```

One new thing that is added is the text-anchor attribute. This allows for us to help align our text. [For more info](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)

There are many more things you can do with text.

## NEXT
SVGs are simple, yet very powerful. It is unlikely that you'd build SVGs by hand. If you wanted to draw an SVG, you'd likely use Sketch or Illustrator. If you would want to use SVGs to visualize data, you would do so programatically, using something like D3.

### Options

- Figure out how to add another shape to your art (elipse? path? more text?)
- Change the shapes to answer questions you may still have about the SVG behavior
- Explore the D3 gallery
- Go back to the svg-example.html
	- change the data and see how the shape updates
	- see if you can change the colors of some of the elements
	- ~line 138 is commented out - comment it back in- what does it do?
