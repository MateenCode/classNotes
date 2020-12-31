![ga](/ga_cog.png)

# Grids and Pyramids

---
Title: Grids and Pyramids<br>
Type: Lab <br>
Duration: 45 - 60 mins<br>
Creator: Thom Page <br>
Topics: jQuery, JS control flow<br>

---

# GRIDS

In `student_labs` make a directory `grids`. Make your files in `grids`.

* index.html
* app.js
* style.css

Use jQuery.

#1 

Run a function that generates 64 squares that alternate colors:

![](https://i.imgur.com/y2p7C6N.png)

You can perform these steps in order:

* Generate 64 divs
* Give each div a class that will provide size and color
* Give each alternating div a different class somehow
* Constrain the number of squares on each row by putting them all in a container of fixed width.


#2 - challenge

Make your grid a perfect checkerboard

![](https://i.imgur.com/7UfIlHR.png)

* The checkerboard alternates colors on each row _and_ each column.

* Remove the whitespace between rows (if it exists).

<br>
<hr>

# BONUS: PYRAMIDS

In `student_labs` make a directory `pyramid`. Make your files in `pyramid`.

* index.html
* app.js
* styles.css

Use jQuery.

Make a six-tiered pyramid made out of triangles that looks like this:

![](https://i.imgur.com/S0zDk0h.png)

After you have made the pyramid, make it so you can run a function and input the number of 'tiers' or 'rows' of the pyramid to be displayed.

Row one will have one triangle, row two will have two triangles ... row twenty will have twenty pyramids, etc.

When it is complete, you can have a result like this:

```javascript
generatePyramid(16)
```

![](https://i.imgur.com/O2IeAu6.png)

Triangle CSS:

```css
.triangle {
  display: inline-block;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid red;
}
```

You can use `text-align: center` on each row to center the triangles:

```css
.row {
  text-align: center;
}
```
