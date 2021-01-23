# Intro to Big O Notation


### Objectives
* Understand what big O notation is
* Understand examples of
  * O(1)
  * O(n)
  * O(n<sup>2</sup>)
  * O(log n)


As we work through different examples today, try to think of a python or javascript implementation that applies to one of them and write it down somewhere.
=====

![](https://i.imgur.com/AHLnEHd.png)
image from: https://www.bigocheatsheet.com

### Starter task

Imagine that you're trying to dry a bunch of shirts using a washing line outdoors. (Assume you have an infinite backyard - lucky you!)

* How long will it take to dry one shirt?  

* How about five shirts?

* What about a million shirts?


---

Now imagine you have some dishes to wash. 

* How long does it take to wash one dish? 

* How about five dishes?

* What about a million dishes?

---

## Opening



### Big O Notation

We are going to be introducing more computer science concepts. These will suit you the best for interviews and further into your career. It's important to study and learn them and a number of these concepts are rather complicated and will take time to come together for you. At GA our focus is projects and skills first, rather than focusing on theory. We believe building things is one of the best way to learn to code and become a developer. However, it's important to set aside some time to learn core computing concepts so that you can continue to grow as a developer.

What may be a little confusing is that we are going to start talking about optimization. But as you remember from unit 1, one of the biggest pieces of advice we gave was: Don't optimize too early! This is still true for your work. Focus on building first and then optimization.

Still: what does optimization mean? We're going to look at what it means through the lens of Big O this morning.

Big O notation is a function which determines the efficiency of another function. It is used to describe the execution time required by an algorithm for the worst case scenario. For example, if a function is looking for a value in an array, it could be the first value, allowing the function to finish quickly, but in the worst case scenario it would be the last value, so the function would take longer to run.

Big O of Algorithms is measured by:
- **Time complexity** - the amount of time it takes to execute. It is measured in the number of steps an algorithm takes rather than measures of time like seconds or minutes.
- **Space complexity** - the amount of memory (RAM) required an algorithm needs to run.

Each complexity can be described with notation like O(n): Where n represents the number of elements.

Additionally, Big O can be represented visually with the execution time/memory on the y-axis and input size on the x-axis.

Here's a graphical representation of some different growth rates:

![](https://therecyclebin.files.wordpress.com/2008/05/time-complexity.png)

### Constant `O(1)`

ex. Get the first song from a playlist given an Array

```js
const getFirstSongFromPlaylist = (array) => {
  console.log(array[0])
}
```

This algorithm has a Big O complexity of `constant`. No matter the size of the array 1 or 1 million, this always takes the same amount of time and memory to execute.

This type of complexity is considered highly efficient.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/8-Input-Size-Run-Time-Graph.png)

### Linear `O(n)`

ex. Given an album(array) of song names, for each song in a album print out the name 

```js
const printSongs = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}
```

This algorithm has a Big O complexity of `linear`. For each added song to the array, the amount of time it takes to complete this is increased by 1 step.

If the array (or playlist) has 1 item, it will take 1 step to complete. If the array has a million items it will take a million steps to complete.

This type of complexity is considered pretty good efficiency.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/6-Input-Size-Run-Time-Graph.png)



### O(n<sup>2</sup>)

ex give all albums from an artist print every song from each album

```js
  const PrintSongsWithinAlbums = (twoAlbums) => {
    for (let i = 0; i < twoAlbums.length; i++) {
      for (let j = 0; j < twoAlbums[i].length; j++) {
        console.log(twoAlbums[i][j])
      }
    }
  }
```

This algorithm has a Big O complexity of `quadratic`. For each added item to the array, the amount of time it takes to complete this is increased by n to the n power!

Imagine you wanted to print every song by an artist. The above function would loop through each album and then within each album, loop through each song. For each album the complexity doesn't increase just by 1 step, but by each album times each song on the album.

As we think of the worst case scenario if every album has ten songs, if we have 10 albums, we go through the steps 10 times for the albums and then times for each song so for a collection of 10 albums we go through the algorithm 100 times. If we had 100 albums and still 10 songs, we'd go through this algorithm 1000 times...

If we were to also have to go through artists, and now every artist has 10 albums and each album has 10 songs.

More complexity:

```
  const PrintSongsWithinAlbumsByArtist = () => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        for (let k = 0; k < arrarray[i][j].length; k++) {
          console.log(array[i][j])
        }
      }
    }
  }
```

Now we have a collection of artists, as we gain each artist with 10 albums and ten songs each artist will have 10 albums. Each time we add an artist we get 10 songs and 10 albums. With 10 artists we get 10 x 10 x 10 = 1000 steps. 

If there are even more nested iterations, the growth rate can become O(n<sup>3</sup>), O(n<sup>4</sup>), O(2<sup>n</sup>) etc. If you are writing code with multiple nested iterations, it's best to refactor to increase performance as much as possible. 

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/10-Input-Size-Run-Time-Graph.png)


### Logarithmic Complexity `O(log(n))`

Imagine we are calling out to our favorite voice assistant to play a song for us. There are millions of songs out there. Let's say we're looking for `Good Vibrations - Marky Mark`

How is our assistant finding our song?

Is it going randomly through every single song in the database?

Is it looking by artist then by song (again without any organization)?

In either scenario, you'd have to consider the worst-case scenario which is that the song you ask for is always the absolute last song found.

What if the songs were organized alphabetically?

Then we could perform a binary search.

We would start at the middle and then check if there is a match. If it matches we're done!

But with Big O we're always thinking about the worst case scenario and that our song will be the last song found.

So we start in the middle, let's say that this middle is songs that start with the letter `M`, if our song starts with the letter `I` we can eliminate all the songs that start with M or further in the alphabet. Now we've cut down the number of items we must search by half.

Let's set our next midpoint to be the middle of the remaining songs, and we get songs that start with the letter `F`. Since our song starts with the letter `I`, we can stop searching through songs starting with A - F, and have again, cut our search down by half.

We would keep repeating, removing half of the songs we are looking through until we found our song. This more complicated process is more efficient than looking through every single song and can be represented

```js
function binarySearch(arr, item, first = 0, last = null) {
    if (!last) last = arr.length
    let midpoint = Math.floor((last - first) / 2) + first
    if (arr[midpoint] === item) return midpoint
    if (arr[midpoint] > item) return binarySearch(arr, item, first, midpoint)
    if (arr[midpoint] < item) return binarySearch(arr, item, midpoint, last)
}
```

In this way, if we have 16 songs, the number of steps would be 4 Log(2) of 16 = 4.

If we have about 1.126 million songs, the number of steps would be just 50!

This type of complexity is considered highly efficient.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/9-Input-Size-Run-Time-Graph.png)

### Factorial Complexity `O(n!)`

Factorial means the product of all positive integers less than or equal to n.

```
    const factorial = n => {
    let num = n;

    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
        num = n * factorial(n - 1);
    };

    return num;
    };
```

```
factorial(1); // 2 Milliseconds
factorial(5); // 3 Milliseconds
factorial(10); // 85 Milliseconds
factorial(12); //  11,942 Milliseconds

```
Examples

- 3 factorial is 3 x 2 x 1
- 7 factorial is 7 x 6 x 5 x 4 x 3 x 2 x 1

The complexity of an algorithm that is factorial increases faster than any other example. While there are real world examples of these types of algorithms, due to their complexity, they are not typically asked in coding interviews for jr positions and thus we won't include an example.

This type of complexity is considered inefficient.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/7-Input-Size-Run-Time-Graph.png)

## Summary

We can look at this chart in myGA to look at how efficincy changes as input increases across the different types of classes of complexity.


![](https://i.imgur.com/CExCK8P.png)

Again, we can see that in most cases, when we are looking at 600 or less items, our computers can work through them quickly and our primary concern in this course should not be efficiency or optimization.

Early optimization is problematic because it can be overwhelming to think about as you start to solve a problem or build an app and can prevent you from building a prototype in a reasonable amount of time.

Additionally, as you build your app with optimization in mind you will inevitably try to solve problems you won't really have, which is bad for things like deadlines. And also since you don't yet know what all your problems will be, you must build in order to learn what you'll need to solve.

We'll be having a lesson on agile development; which is an approach to developing software where requirements and solutions evolve through short deadlines and small goals. This allows developers to account for the necessary pivots as they develop applications.

The approach that will serve you best in this course, and likely well into your career is by a quote from Addy Osmani

```
First do it,
then do it right,
then do it better
```

Again focusing on just solving your problem first and foremost. Then going and finding the right way to do it and finally, finding ways to do it better.


#### Continued Practice

If you want a deeper understanding of big O notation, check out [this course](https://www.khanacademy.org/computing/computer-science/algorithms) on Khan Academy.

Here is a [Big O Cheatsheet](http://bigocheatsheet.com/).

## Next

Feeling like you need to hear it all again?
- Go to myGA and study

Ready to work through figuring out some Big O?
- See the `big-o-activity` markdown
