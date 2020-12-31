

# Arrays & Conditionals

## Setup
1. Navigate to the `student_examples` folder for today.
2. Create a file called `array_practice.js` to use for practice code.
3. Open it in your text editor. Add a console log and run your code to confirm that you can see the output in your terminal.

<hr>

### Lesson Objectives
- Describe what is an array
- Declare an empty array
- Check the `typeof` an array
- Access array elements
- Learn about array method `.length`
- Change and element in an array
- Use expressions to access elements
- Use `Math.` methods to get integers for accessing array elements
- Access each element of an array with a loop
- Use arrays inside conditional statements
- Use array methods and research more methods on their own
- Use expressions with the square brackets to access elements
- Access elements in a multi-dimensional array
<br>
<hr>

## What is an Array?

- An array is a data structure and like a number or string, you can assign an array to a variable.

- An array is a list. All list items go between square brackets:


- Declare an empty array

  - `const arr = [];`
- Console.log it:
  - `console.log(arr)`


  - Arrays contain `elements` separated by commas `,`

  - `Elements` can be any datatype (string, number, Boolean, another array...)
    - Usually all elements in an array are of the same datatype


```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

## Type Checking

Let's check the types of some things

```js
const num = 0;
const str = 'strings are cool';
const bool = true;
const arr = [];


console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(Array.isArray(arr))
```

**GOTCHA:** An array has a type of object! We'll learn more about objects soon. For now, if you want to check for an array, use the method `Array.isArray()`


### Let's Investigate :computer:

* Make another array `faveFoods` that contains a list of your top three favorite foods
* Console.log the array of your favorite foods

**GOTCHA:** make sure your favorite foods are all strings (surrounded by quotes)

How could you console.log just one food?

<hr>


### Accessing Elements

Each element in the array has a numbered `index`. The first element has an index of 0.

* Access elements by putting the `index number` in square brackets.

Access the first element in an array:

```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

console.log(list[0]);
=> "chair"
```

Access the second element in an array:

```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

console.log(list[1]);
=> "table";
```
<br>


### Let's Investigate :computer:

```js
const ghostBusters = ["Venkman", "Spengler", "Stantz",
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];
```

* Console.log the first element in the array
* Console.log the third element in the array

<hr>

## Array Method: `.length`
Methods are functions that are built into JavaScript that can be used on certain data types. We're going to be looking at an **array method** that will help us with iterating through an array.


We can use the `.length` method to find out the number of elements in an array

```js
console.log(ghostBusters.length);
=> 7
```

```js
const ghostBusters = ["Venkman", "Spengler", "Stantz",
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];
```
* Console.log the first element in the array
* Console.log the last element in the array




&#x1F535; **Ask**

Length gives us the number 7, but is there an element in the `ghostBusters` array with index position 7?

How can we get the last element of an array?

Can we do

```js
console.log(ghostBusters1984[4-1])
```

Let's find out!

### Changing Elements

* To change an element in an array, first access the element, and then assign a new value:

```js
const veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];
```

```js
veggies[1] = "spinach";
=> "spinach"
```

```js
console.log(veggies);
=> ["red pepper", "spinach", "pumpkin", "cauliflower"]
```

<br>


### Let's Investigate :computer:

* With the following array:

```js
const numbers = [21, 18, 5, 3, 2, 1, 1];
```

* Change the third element of the array to `null`, and console.log the array to confirm. (The third element is the number 5)


**FIGURE IT OUT**

* Change the first element of the array to equal **itself** times ten using the compound operator `*=`.


<br>
<hr>

### Using expressions to access elements

We can put an `expression` between the square brackets to access array elements.

```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[2 * 2];
=> "magnifying glass"

```

In an array with an **even** number of elements, we could find the element that comes right after the middle:

```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[list.length / 2];
=> "map"

```


To access the last array element:

```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[items.length - 1];
=> "rupees";
```

### Getting Mathy with Arrays!

What if we wanted the middle element from an array with an odd length?

```js
const shortArray = ['first', 'middle', 'last'];
```

Our array has a length of 3, 3/2 = 1.5

We can't have an element at a position of 1.5! Only integers are allowed.

How can we round up or round down?

We'll have to reach for some built in JavaScript methods!

We have 3 `Math` methods that could be helpful to us

`Math.ceil()` - this method will always round up (ceil is short for ceiling)

```js
shortArray[Math.ceil(shortArray.length/2)]
```
That gave us the last element. Let's try another method

`Math.round()` - this will round up or down to the nearest integer

Let's try it

```js
shortArray[Math.round(shortArray.length/2)]
```

Ok! That rounded it up! We really need to be able to round down

Let's try one more method

`Math.floor()` - this one always rounds down

```js
shortArray[Math.floor(shortArray.length/2)]
```

Excellent! We did it!

[A list of all the math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)


<br>

### Using Variables to Access Elements in an Array
We can also use variables in our square brackets, as long as the variable references a whole number:

```js
const index = 1 + 1;

console.log(shortArray[index]);
=> "Faulkland"
```


## LOOPS: Iterate over an array

Let's use a for loop to iterate over all of the items in an array and print them out.

`const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];`

We know that to access an item in the array, we have to use the name of the array and square brackets with the index number. To access the first item in the array `kitchenSink`, we would write:

`kitchenSink[0]`

If we want to print out all of the items, we can make a for loop which will increase that index number for us programmatically:

```js
for (let i = 0; i < kitchenSink.length; i ++) {
  console.log("This is in my sink: " + kitchenSink[i]);
};
```

>Output:
```
This is in my sink: Dirty spoon
This is in my sink: sponge
This is in my sink: plate with gunk
This is in my sink: soap
This is in my sink: water
```

What if I only want to print *every other* element? There are a few ways to do this, but let's focus on adjusting the incrementation in our control panel.

```js
for (let i = 0; i < kitchenSink.length; i += 2) {
  console.log("This is in my sink: " + kitchenSink[i]);
};
```
Note: In the 3rd section of our for loop control panel, we are reassigning the variable `i` and increasing it's value by *2* each time.

>Output:
```
This is in my sink: Dirty spoon
This is in my sink: plate with gunk
This is in my sink: water
```

Only the items with the index 0, 2, and 4 were printed.

### Let's Investigate :computer:
With the following array:

```js
const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch",
              "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
```

* Console.log all of the elements in the array
* Console.log the odd numbered index items in the array
* Console.log the index number and the item of every odd numbered index items (on separate lines)

<br>

<hr>

## Using conditionals to select elements in array

We can use **conditionals** to select elements an array.

- Let's start with the condition of the index number. If we want to print the items in the array, but only if the index number is even:

```js
const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];

for (let i = 0; i < foodSelections.length; i ++) {
  if (i % 2 === 0) {
    console.log(foodSelections[i]);
  }
};
```

- We used a modulus `%` to see that the remainder of an index divided by 2 would return 0 (meaning that it's an even number).

>Output:
```
pizza
seaweed
tea
```

- We can add **multiple conditions** to select array elements.

- If we want to print the items in the array, but only if the index number is even **OR 5**:

```js
const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream", "sushi", "tacos"];

for (let i = 0; i < foodSelections.length; i ++) {
  if ((i === 5) || (i % 2 === 0)) {
    console.log(foodSelections[i]);
  }
};
```

- We used a modulus `||` to set an **or** condition.

>Output:
```
pizza
seaweed
tea
ice cream
```

- If we want to print the items in the array, but only if the index number is divisible by 2 AND 3 (do not use `% 6`, make the right 'conditions') :


```js
// log the element index that is divisible by 2 and 3
for (let i = 0 ; i < foodSelections.length; i++){
  if ( i % 2 === 0 && i % 3 === 0 ){
    console.log(foodSelections[i]);
  }
}
```

### Let's Investigate :computer:
With the following array:

```js
const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
                        "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
```

* Console.log the even numbered items in the array using a conditional statement.
* Console.log the even numbered items in the array and the item with the index of 3 using a conditional statement.
* Console.log the odd numbered index items in the array using a conditional statement.


<br>
<hr>



**FIGURE IT OUT - Bonus!**

* When querying the array, put an expression between your square brackets that accesses a _random_ element of the array

<br>
<hr>



### Research Array Methods :books:




#### ARRAY METHODS: Adding and Removing Elements

##### Activity

- Let's make an array together called `favMovies` and put everyone's favorite movie in there
- We'll share the array in slack and break off into small groups for about 10 minutes and each group will research and give us an explaination and a code example of the following methods

##### Methods - each group gets one
1. index of
1. push
1. pop
1. reverse
1. unshift
1. shift
1. slice
1. splice
1. sort



<br>
<hr>



### Multi-dimentional Arrays

Array elements can be other arrays.

```js
const pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];
```

The `pairs` array has `2` elements. Use `pairs.length` to verify.

- The element at 0 is `["Snoopy", "Linus"]`
- The element at 1 is `["Peppermint Patty", "Woodstock"]`

We can go deeper to retrieve the elements of these inner arrays. To do this, we keep adding square access brackets. To get `Peppermint Patty` from the pairs array:

```js
pairs[1][0]
```

- multi-dimensional arrays are useful for nested information and grid layout
- 9x9 grid:

```js
const grid = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8]
            ];
```

Changing elements in a multi-dimensional array is the same process as with a regular array

```js
const confectionary = [["mounds", "almond joy"], ["lindt truffles", "easter egg", ["kitkat bar 1", "kitkat bar 2", 'kitkat bar 3', "kitkat bar 4"]]];

confectionary[1][0] = "musketeer";

confectionary;
=> [["mounds", "almond joy"], ["musketeer", "easter egg"]]
```

**Bonus:**
How would you access `kitkat bar 3`?

### Hungry for More?

Want to take on some bigger array challenges, sign up for a LeetCode account and check these out:
- https://leetcode.com/problems/degree-of-an-array/description/
- https://leetcode.com/problems/max-area-of-island/description/
- https://leetcode.com/problems/non-decreasing-array/description/

Or, continue solving the Project Euler problems: https://projecteuler.net/archives
