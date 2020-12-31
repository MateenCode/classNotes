![](/ga_cog.png)

---
Title: Corgi Carousel<br>
Type: Warm Up Exercise<br>
Creator: Jerrica Bobadilla<br>
Adapted From: Madeline O'Moore<br>
Competencies: CSS, HTML, jQuery

---

# CORGI CAROUSEL

![](https://imgur.com/pq7zXBJ.png)

Carousels are essentially slideshows used to cycle through a series of content. Today, we'll be building a very simple one to cycle through a set of images using HTML/CSS/jQuery. 

## Setup

Starter code has been provided for you with all the files linked together and the jQuery library.
  1. `git pull upstream master`
  1. Navigate to the `warm_up_exercise/corgi-carousel-starter` folder for today.
  1. Open the entire folder in atom to follow along and create a carousel with cute little corgis.
  1. Open the `index.html` in your browser.
  
## CSS

Before we can move onto the javascript file to give our carousel buttons some functionality, we need to hide all content of the carousel except the very first one. This way, the user only sees the first image when they first load the page. 

1. In the `css/style.css` file, hide all the images in the carousel by adding `display: none` to `.carousel-images img`
1. Show just the first image in the carousel by adding:
  ```
  .carousel-images img:first-of-type {
    display: block;
  }
  ```
   > :dog: See more on [:first-of-type selector](https://css-tricks.com/almanac/selectors/f/first-of-type/)
   
 ## JQUERY
 
##### First, don't forget to include the document ready function!
 
##### Now, let's just get our "next" button working
 
 
 1. Add event listener/handler onto our 'next' button 

  ```
   $('.next').on('click', () => {
    // stuff will go here 
   }
   ```
1. Keep track of what image is currently showing by setting a global index counter variable: 
  `let currentImgIndex = 0;`
1. Back inside the event handler for our next class, select the currently showing carousel image with:  
  `$('.carousel-images').children().eq(currentImgIndex)`
1. Hide that currently showing carousel image by tacking on `.css('display', 'none')`
1. Increment the currentImgIndex so that we cycle to the next image: `currentImgIndex++` 
1. Show the new currentImgIndex image by using: `$('.carousel-images').children().eq(currentImgIndex).css('display', 'block')`
> :dog: Read more on the [.children](https://api.jquery.com/children/) and [.eq](https://api.jquery.com/eq-selector/) jQuery methods by sifting through the docs!


##### Great, now our next button works and we can cycle through all the images -- but then it breaks when we reach the last one! Let's fix that!


1. Define another global variable named `highestIndex` so we can count the highest index of images we have in our carousel by using: `$('.carousel-images').children().length - 1` 
    - :red_circle: Remember! `.length` gives us an exact count of how long an array is, but indexes in JavaScript start counting from 0, so we need to account for that by subtracting 1 from the value .length gives us
1. Back inside our event handler for our next class, let's write an if/else statement so that if we go above the amount of images we have, it'll reset the currentImgIndex back to the first one 
    - :red_circle: Remember to watch where you place this if/else statement! Should it go before you hide the current image or after?
  ```
   if(currentImgIndex < highestIndex) {
    currentImgIndex ++
   } else {
    currentImgIndex = 0
   }
  ```
  
##### Now let's do the same thing for the "previous" button! 

1. Add the event handler:
  ```
   $('.previous').on('click', () => {
    // stuff will go here 
   }
  ```
1. Add the hide/show code like we did for the next button:
  ```
  $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
  $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  ```
1. For our previous button, we want to _decrement_ the image index this time. So, write an if/else statment that says, as long as currentImgIndex is greater than 0, we can keep decrementing. But once it hits 0, reset the currentImgIndex back to the _last_ image index: 
    - :red_circle: Remember again to watch where you place this!
  ```
  if(currentImgIndex > 0) {
    currentImgIndex --
  } else {
    currentImgIndex = highestIndex
  }
  ```

## BONUS

:dog: Some of this code isn't quite DRY, try to dry it up! 
