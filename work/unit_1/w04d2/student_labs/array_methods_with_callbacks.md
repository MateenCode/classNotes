![](/ga_cog.png) 

# Minion Callbacks 

![](https://cdn-images-1.medium.com/max/1200/1*tv6jdV17yusTsuzgxPz0Aw.jpeg)

##### Learning Objectives

- Getting comfortable with array methods that use callbacks

##### Prerequisites

- JavaScript (Functions, callbacks, array methods)

---

## Getting Started 

1. If you haven't already, research all the array methods listed at the bottom of the lecture notes before starting this lab
1. In today's `student_labs` folder, create an `array_method_callbacks.js` file and do your work in that file

---

## Messing with the minions

With the given array of minions...

```js
const minions = ['bob', 'kevin', 'stuart', 'dave', 'jerry', 'mark', 'tim', 'phil', 'carl'];
```

Gru, the mob boss, wants to test out some array methods with callbacks. Let's go ahead and help him out. 

### forEach

First, he wants to test out `forEach` to check who's present. So as he goes down the array of minions, they should `console.log` that they're here. 

<details><summary><strong>Expected output:</strong></summary><p>
  
   ```js
   bob - here
   kevin - here 
   stuart - here
   // and so on and so forth all the way down to carl
   ```
  
 </p></details>
 
### map

They're all here -- great! But Gru has noticed something off about the array of minions: their names aren't capitalized. He might be a mob boss, but he does care about correct grammar! So let's go ahead and fix that for him using the `map` method. 

  -  Using the `map` method, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called `capitalizedMinions`
  - <details><summary><strong>Expected output:</strong></summary><p>
  
       ```js
       Bob
       kevin
       Stuart
       // and so on and so forth all the way down to Carl
       ```

     </p></details>

### every

In order to check whether or not that previous map worked, Gru wants to try using the `every` method instead. So, using `every`, check whether or not every minion in `capitalizedMinions` are actually capitalized.

  - Create a function called `isCapitalized` that accepts a minion as an argument and checks whether or not the first letter of the minion's name is capitalized
  - Now using both the `every` method and the `isCapitalized` method you just wrote, check whether or not all the `capitalizedMinions` are capitalized 
  - <details><summary><strong>Expected output:</strong></summary><p>
  
       ```js
       false
       ```

     </p></details>

### filter

Uh oh! Not every minion was capitalized. Gru's not feeling too happy about that, so now he wants to test out the `filter` method to filter out the sneaky minion who didn't get capitalized. 

  - Use `filter` to filter out minions that are not capitalized and save the correctly capitalized minions to an array called `actuallyCapitalizedMinions`
    - <details><summary><strong>Expected output:</strong></summary><p>
  
       ```js
       // if you console.log actuallyCapitalizedMinions, kevin should be gone and you should see..
       Bob
       Stuart
       Dave
       // and so on and so forth all the way down to Carl
       ```

     </p></details>
  - Use `every` again, but this time on your new `actuallyCapitalizedMinions` array, to check if they're all capitalized now
     - <details><summary><strong>Expected output:</strong></summary><p>

         ```js
         true
         ```

       </p></details> 
       
### find

Great! We filtered out the non-capitalized minion, but while we know it was kevin, Gru didn't know that. So, he wants to find out which minion escaped his map earlier by testing out the `find` method. 

  - Using `find`, find which minion is not correctly capitalized in the original `capitalizedMinions` array and save it to a variable called `uncapitalizedMinion`, then console log it
  - <details><summary><strong>Expected output:</strong></summary><p>

       ```js
       kevin
       ```

     </p></details> 

### findIndex 

Aha! Now that Gru's found out which minion escaped him, he wants to find out what index in the original array he was at so he can fix him up later.

  - Using `findIndex`, find what index kevin is in the original `capitalizedMinions` array 
      - <details><summary><strong>Expected output:</strong></summary><p>

           ```js
           1
           ```

         </p></details> 
  - Now that he's found him, he can just use `capitalizedMinions[1]` to select kevin and capitalize his name. 
  - Once that's done, check again using `every` whether or not `capitalizedMinions` is all capitalized correctly 
      - <details><summary><strong>Example output:</strong></summary><p>

           ```js
           true
           ```

         </p></details> 
         
### reduce

Sweet! Now that that's all sorted, Gru can just have some fun testing out the remaining array methods he wanted to learn, starting with `reduce`. Out of curiority, he wants to know what the sum of all his minions' name lengths is. Use `reduce` to find out 
  
  - First, using `map` create a separate array called `minionNameLengths` that maps out the minions' name lengths
    - <details><summary><strong>Expected output:</strong></summary><p>

           ```js
           // if you console logged minionNameLengths, you should get
          [ 3, 5, 6, 4, 5, 4, 3, 4, 4 ]
           ```

         </p></details> 
  - Use `reduce` to sum up the `minionNameLengths` array
     - <details><summary><strong>Expected output:</strong></summary><p>

         ```js
         // the sum should be 38
         ```

       </p></details> 
       
 ### some
 
 Now Gru wants to test out the `some` method, so let's go ahead and do that a few times.
 
 - Check whether or not some of the minion's name lengths are 6 or above. How about 7 or above? 
 - Lowercase Kevin's name again inside of the `capitalizedMinions` array, then check whether or not some of the minion's names are capitalized using some. How about it any are lowercased? 
 
### sort
 
Great, now Gru has had some practice with array methods that require callbacks. Now it's time to do some bad guy stuff. Before he can do so by sending his minions out to do his bidding, he wants to sort them in ascending order of their name lengths. Because why not? 

- Use `sort` to order the minions within the `capitalizedMinions` array by order of name length.
- Hints: you'll need to write your own `compareMinions` function first to pass in as a callback to `sort`
- <details><summary><strong>Expected output:</strong></summary><p>

   ```js
   // if you console log capitalizedMinions after sorting, you should get 
  [ 'Bob',
  'Tim',
  'Dave',
  'Mark',
  'Phil',
  'Carl',
  'kevin',
  'Jerry',
  'Stuart' ]
   ```

 </p></details> 

---

#### Hungry for More :
 - [Array Methods w/ Callbacks Practice](4_array_method_callbacks.md)

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
