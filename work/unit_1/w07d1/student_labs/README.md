# SHAPE CLICKER

---
Title: Shape Clicker<br>
Type: Lab<br>
Duration: 45<br>
Creator: Thom Page <br>
Adapted by: Sonyl Nagale <br/>
Topics: jQuery `event.currentTarget`<br>

---


### Setup

We provide you with starter code in the `shape_clicker` folder that has some shapes hardcoded into the html, and some classes in the css file. You don't need to adjust these files, just work primarily in the app.js file.

### Shape Clicker

In app.js, write the code to perform the following:

_The page starts out like this_

![](https://i.imgur.com/X3y7Uqn.png)


First, clicking on any shape turns the shape you clicked on into a circle:

![](https://i.imgur.com/udRczSn.png)

Second, clicking on any shape turns the shape you clicked on into a square:

![](https://i.imgur.com/Tu1As1l.png)

Third, clicking on any shape turns the shape you clicked on into an upside down triangle

![](https://i.imgur.com/dxoLFSD.png)

Fourth, clicking on any shape turns the shape you clicked on into an octagon

![](https://i.imgur.com/iL3vdfs.png)

Fifth, clicking on any shape turns the shape you clicked on into a heart

![](https://i.imgur.com/2GEK936.png)

The next click should then start the process from beginning, turning the shape you clicked on into a triangle

![](https://i.imgur.com/mB2xpLi.png)

Then the next click will be a circle again, then a square, etc. The process can repeat indefinitely.

Use `$(event.currentTarget)` to target the clicked shape. Use the provided classes to give the shapes ... shape.


# Hungry for More?

- Dynamically generate the initial triangles using jQuery, and set the event listener (once) in the loop
- Set a ‘mouseenter’ event on the shapes that changes the color of the shape to black
- Set a ‘mouseleave’ event on the shapes that changes the color of the shape back to red

<br>
<hr>
