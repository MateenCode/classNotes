
Title: Intro to CSS Animations<br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
    Creator: Karolin Rafalski<br>
    Course: WDIR Space Ghost<br>
Competencies: CSS animations<br>
Prerequisites: CSS, HTML <br>

---

### Objectives

Intro to CSS rules:
- Transform
- Transition
- Animation



Transform is static - it immediately changes the element and it stays that way.

Transition - You determine the start and end state, the computer handles the tweening (the states in between the beginning and the end).

Animations - You determine as many states as you want (beginning, end and in-between) - the computer still tweens between those steps

## Transform

When you enter the transform property in VSCode, it'll pop up a helper menu that shows you the options for transform

![atom helper transform](https://i.imgur.com/FhBc8zu.png)

There are many, we'll look at four of these:
translate, rotate, scale, and skew


Open the `index.html` inside of `warm_up_exercise/css-animations-intro/index.html`

you'll see one div with a color of `thistle` inside a div with a class of container.

Let's get to transforming!

In the `main.css` add to the `.transform` class
- `transform: translate(100px)`
- refresh your browser to see the changes
- now try `transform: translate(100px, 100px)`

Note that this div escapes the container div. There are no reflows (reflowing of other CSS elements during animations - this allows the animations to go faster and be smoother).

Notice that the text in the container won't be affected by our transformation.

Comment out the transform and let's try
- `transform: rotate(45deg)`

Comment out the transform and let's try
- `transform: scale(2)`
and swap that for
- `transform: scale(.2)`

One more!
- comment out the previous transform
- `transform: skew(20deg)`

Can we chain them? What if we uncomment all the transforms?



Let's try:

- `  transform: skew(10deg) rotate( 45deg) translate(50px , 50px) scale(.5);`

Notes:
- Watch your units!
- Skew and rotate use `deg`
- translate takes `px` or `em`
- scale takes no units
- there cannot be a space between the function name and the first `(`
    - `skew (25deg)` - will not work
    - `skew(25deg)` - will work
<br>
Also, the order in which you place these can have different effects
<br>
Gotcha do not put commas in between!
<br>



## Transitions

Transitions have a start and end state. You can trigger them by partnering your css selector with a another rule with a pseudo-selector.

While you choose the begin and end state, CSS handles the tweening (the in between states). Tweening is a term from animation. CSS animations are built on a lot of foundations and principles of animations.

Sweet bonus - CSS can utilize a computer's graphics card, which can allow for smoother animations than what JavaScript can handle.

[Draw with JavaScript](https://codepen.io/paulirish/full/nkwKs) - add a bunch of macbooks, gets kinda slow and wonky

<br>

[Draw with CSS](https://codepen.io/paulirish/pen/LsxyF) - stays sweetly smooth!

<br>

Let's code!
Comment out our `transform` div and comment in the div with  class of `transition`. It should be a red div

Comment out the rule `border: 1px solid gold;` in the `.container` rule.

In our CSS file, we see that `.transition` has it's regular selector and a pseudo-selector of `:hover`

On hover - the div turns blue - instantly.

We can add some transition properties to change this

![transition properties, thanks atom](https://i.imgur.com/7FJZ8oO.png)
- Let's try in `.transition` `transition-duration:4s;`

- hover over the div to see it transition from red to blue, mouse away from the div to see it transition back

Faster!

- `transition-duration:2s`



We can add another property to transition
- in `.transition`, add `transform: translate(0); `
- in `.transition:hover`, add `transform: translate(300px);`

Look carefully, and you'll see that the translation starts slow, speeds up and then slows down again.

We can change that behavior by changing the  `transition-timing-function` value

In `.trasition`
- `transition-timing-function: linear`

- There are many possibilities. You can go to [easing.net](http://easings.net/) - when you hover over the different graphs you can see the behavior of a red arrow. At the bottom, the site discusses ways to implement the different behaviors.

You should see that the square maintains the same speed throughout the transition

## Animations

Finally, animations allow us to designate intermediates from beginning to end.

Rather than using a pseudo-selector, animations have a partner rule called `@keyframes`

Animations happen on page load. The number of iterations can be determined.

If you want an animation to start based on some activity (click on a button), you can, with JavaScript. On a click (or whatever the event listener is placed upon) - add the class of the element. To stop or switch animations, remove the class and put on a new one.

Let's code it out.

In index.html
- comment out our div `.transition` and comment in our `.animation` div

In `main.css` in `.animation` add:
- `animation-name: black-to-white`
- `animation-duration: 2s`

- add the following keyframes

```css
/*simple start*/
@keyframes black-towhite{
  0% {background: black}
  100% {background: ghostwhite}
}
```

Test it: reload the page - this animation will happen once.

Let's have it repeat, you can choose an integer between 1 and `infinite`

- `animation-iteration-count: 2;`

Even more times!
- `animation-iteration-count: infinite;`

let's see what more steps look like

Change:
- `.animation` `animation-name` to `rainbow`
```css
/*just colors*/
@keyframes box-step {
  0% { background: black; }
  10% { background: crimson; }
  25% { background: hotpink;}
  30% { background: coral;}
  40% { background: lightyellow; }
  50% { background: palegreen; }
  60% { background: mediumaquamarine; }
  75% { background: steelblue; }
  80% { background: darkviolet;}
  90% { background: black; }
  100% { background: ghostwhite; }
}
```

We can add more transitions

```css
/*colors and movement*/
@keyframes rainbow-move {
  0% {background: black; left:0%; top:0%;}
  10% {background: crimson; }
  25% {background: hotpink; left: 75%; top:0px;}
  30% {background: coral;}
  40% {background: lightyellow;}
  50% {background: palegreen; left: 75%; top: 10em; }
  60% {background: mediumaquamarine; }
  75% {background: steelblue; left:0%; top:10em;}
  80% {background: darkviolet;}
  90% {background: black; }
  100% {background: ghostwhite; left:0px; top:0px; }
}
```

and we can even rotate and change the div's shape

```
/*colors, movement, shape change, and rotation*/
@keyframes rainbow-move-change {
  0% {background: black; left:0%; top:0%;}
  10% {background: crimson; }
  25% {background: hotpink; left: 75%; top:0px;}
  30% {background: coral;}
  40% {background: lightyellow;}
  50% {background: palegreen; left: 75%; top: 10em; transform: rotate(600deg)}
  60% {background: mediumaquamarine; }
  75% {background: steelblue; left:0%; top:10em;}
  80% {background: darkviolet;}
  90% {background: black; }
  100% {background: ghostwhite; left:0px; top:0px; }
}

```

We can also set the `animation-timing-function` to `linear` if that suits us.


We can comment back in our other divs in for a whimsical flair.
