![](/ga_cog.png)

---
Title: Responsive Mockup / Pair Programming <br>
Type: Warmup Exercise <br>
Duration: "0:45"<br>
Original creator: Matt Huntington<br>
Adapted by: Kristyn Bryan, Karolin Rafalski<br>
Competencies: HTML, CSS, Responsive design <br>
Prerequisite Videos:

#### Responsive Design
1. Watch [this video](https://www.youtube.com/watch?v=BsuCBmzLf_U&index=21&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) an introduction to responsive design.
1. Watch [this video](https://www.youtube.com/watch?v=iQIj7Lu64M4&index=22&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about mobile first design using min/max-width/height
1. Watch [this video](https://www.youtube.com/watch?v=GYygtVolViM&index=23&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about media queries.

---

# Warm Up Exercise

## Pair Programming
You will be pair-programming to solve today's warm up exercise. You have already been working in pairs in groups in a more informal manner. Coding with others is a skill. It takes practice. Some interviews involve pair programming. Some companies use pair programming over individual programming. Start getting into good habits now.

You can choose who will take on which role, if you'd like an arbitrary way to choose who will be the driver, add the numbers in your zip code. Higher number gets to be driver. ie 10010 = 2 and 90210 = 12. 90210 is the driver!

### Driver
- You will be the person who is typing during this exercise.

- You should share your screen with your partner. Before you code anything, you should **vocalize** what you are doing and ask your partner for their opinion.

- Share the code that was written (via Github or Slack) with your partner once the exercise has ended.

### Observer / Passenger
You will be watching as your partner writes the code. It is your job to be vocal with your ideas, but you won't be dictating the code.

You should think about it at a higher level and ask things like "How would this piece of code handle this type of situation?" and "What are we outputting?", or "What are we trying to achieve?"

#### Further Reading

[Pair Programming Article 1](https://www.wikihow.com/Pair-Program)

[Pair Programming Article 2](http://anh.cs.luc.edu/170/Kindergarten.html)

## Responsive Design: `@media` queries

Fluid layouts and flexbox have taken us a long way to making our site responsive and look good at different widths. But there tends to be a point (or two or three), where our fluid layouts look silly (way too much white space) or unreadable (text way too small).

What we want to do is write different rules for our css when the page gets to a certain breakpoint.

Often, the displays of elements is changed (`inline-block` to `block`), but we can change whatever rules we want.

Let's look at a quick demo.

The html has one div and inside of it an h1 element with some text.

The css:

```css
@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Josefin+Slab');

.a {
  background: lemonchiffon;
  width: 100%;
  height: 400px;
  box-shadow: 4px 4px 10px black;
  border-radius: 1em;
  font-family: 'Indie Flower', cursive;
}

h1 {
  text-align: center;
  line-height: 5em;
}


@media (min-width: 600px){
  .a {
    background: plum;
    height: 200px;
    font-family: 'Josefin Slab', serif;
    text-shadow: 1px 1px 3px magenta;
  }
}
```

When the width is less than 600px - the div is lemonchiffon and the font is `Indie Flower`.

When the width is greater than 600px, the background color of the div is now plum, and the font has changed. The border radius has cascaded down into the media query. We have been able to add a magenta text shadow.

It is generally recommended to build the mobile version first.


## Setup

Use the three `index.html`s and `main.css`s inside your `responsive_mockups` folders in your `warm_up_exercise` folder for today. Each `index.html` already has boiler plate and the css linked (body background is different for each - feel free to change/remove this once you have confirmed that the files are linked)

Using divs, create the layouts (see below). Remember: divs have a height of `0` when they have no content, so be sure to set `height` or `min-height`. Use `background` and set different colors for the divs to help visualize your work. [Get some color codes here](http://htmlcolorcodes.com/).

Set one breakpoint, in px for your `@media` queries i.e .`600px`. There is a lot of of different options, but overall, we are still focusing on practicing layouts today.

<hr>

## Create These Three Mockups

Each mockup has a full screen view and a mobile view.


![Mockup](https://i.imgur.com/NZ0moP0.png)

When solving these, don't worry about perfecting margins, getting the ratios exactly right, ending up with too much white space on the bottom or other fine details. Get the layouts first, move on to the next one, if there is time, refine.

ie: First Mockup

![first mockup desktop](https://i.imgur.com/wqtUtak.png)

![firstmockup mobile](https://i.imgur.com/AUjBZ1V.png)
