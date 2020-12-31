
# Intro to Control Flow

### Lesson Objectives
_After this lesson, students will be able to:_

- Explain why we would use 'control flow' in our programs
- Use conditionals and booleans
- Write a simple if statement
- Write an if / else statement
- Write a for loop with a conditional inside

<br>
<hr>

# Control Flow

Control Flow is the order in which individual statements or instructions are executed.

:door: **Example**

You want to enter a house.

You have to walk through the door to get inside.

If the door is open, you walk through, else if the door is closed, you must take steps to open the door and then walk through

Control Flow lets you specify **when** and **which** lines of code get executed

There are three forms of Control Flow:

- **Conditionals** - skip lines of code
- **Loops** - repeat lines of code
- **Functions** - save and later deploy lines of code

Let's start with *conditionals*

<hr>

## Setup
1. Navigate to your `student_examples` folder for **today**
2. Create a file called `conditional_practice.js` in the `student_examples`.
3. Open your `conditional_practice.js` file in your text editor.


# Conditionals

We can set up a branching tree-like structure and control the flow of our code. Though, our code will look less like a tree and more like:
```
if (BOOLEAN EXPRESSION){
  // run this code
};
```
If the boolean expression within our condition is `true`, a branch will execute. If it is `false`, it will not execute. This is an example of `control flow`.

![control flow wd40](https://i.imgur.com/v4W1xwD.png)

Before we write in some control flow, let's take a closer look at the boolean logic that will drive our conditionals.

<hr>

# Booleans

* Booleans allow us to set `true` and `false` values. With true and false values, we can control the flow of our programs.

:door: **Example**

Let's say you love M&Ms, but you hate the green ones. You might do the following

- Choose an M&M from the bag
- `if` color equals `green` is `true` hurl it across the room
- `else` eat the M&M

If we were to code it, we might write

```js
// chose an M&M
let isMMColorGreen = true;

// Decide what to do based on M&M color
if (isMMColorGreen){
  console.log('Eiw! I am hurling this gross green M&M across the room.');
} else {
  console.log('Yum! M&Ms are so tasty!');
}

```

Remember: In your terminal, run the command `node conditional_practice` to run the code that is inside your file.

Let's do one more.

Let's say we want to do something fun tonight

`if` there is a party let's go to it.
`else if` we have coupon for glow in the dark mini golf let's do that.
`else if` a sale at the mall, let's go there.
`else`, let's bake some Speculoos cookies


```js
const isPartyTonight = false;
const miniGolfCoupon = false;
const saleAtTheMall = false;


if (isPartyTonight) {
  conosle.log("I am going to party like it is 1999")
} else if (miniGolfCoupon) {
  console.log("Hole in one! Woo!")
} else if (saleAtTheMall) {
  console.log("When you buy more, you save more!")
} else {
  console.log('I love cooking cookies')
}

```

Let's run that.

Now let's update each Boolean starting with saleAtTheMall

```js
const saleAtTheMall = true;
```

What happens? What do we end up doing tonight?

Now let's update miniGolfCoupon

```js
const miniGolfCoupon = true;
const saleAtTheMall = true;
```

What happens?

Do we go to mini golf and the mall?

Do we go to the mall or mini golf?

Why?

Finally:

```js
const isPartyTonight = true;
const miniGolfCoupon = true;
const saleAtTheMall = true;
```
What do we end up doing tonight?

<hr>

## Not
- `!` **not** sometimes called a `bang`: changes Boolean value to its opposite.

```js
let hungry = true;
let thirsty = false;

console.log(hungry) // true
console.log(thirsty) // false
// use not/bang
console.log(!hungry) // false
console.log(!thirsty) //true

```

### Not Again

Another use case for toggling would be determining whose turn it is in a game. Let's say you are playing a game of chess against a computer

```js
// start with the player's turn
let playerTurn = true;

console.log("Is it the player's turn? " , playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? " , playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? " , playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? " , playerTurn);

```
**Look at that!** :eyes: <br>
You can reassign values with a variable's own value (a little bit of a brain bender)!

<hr>

## Truthiness

**All** values in JavaScript have an implicit 'truthiness'. They can be evaluated as either true or false. In effect, every value in Javascript is converted into a Boolean when it is checked as an expression of truth.

##### All of the following become false when converted to a Boolean

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

[Here is a great table for equality, strict `equality` and `if statements`](https://dorey.github.io/JavaScript-Equality-Table/)

<br>

### Let's Investigate :computer:

JavaScript has a built-way to convert things to Booleans: `Boolean()`. Put the following inside the parenthesis of `console.log()` to see the result.

```js
Boolean("");
Boolean(null);
Boolean(0);
```
<br>


##### All other values are implicitly true

### Let's Investigate :computer:

```js
Boolean("hi");
Boolean(1);
Boolean(true);
```

<br>  
<hr>


There is a simple way of verifying the thruthiness or falsiness of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a boolean. So if you add two `!` then you'll get the boolean value of the original one:

#### Let's investigate!
Copy and paste the following and write which you think will evaluate to true, and which ones to false. Then let's test them together.

```javascript
!!1

!!0

!!-1

!![]

!!{}

!!null

!!""
```

## Equality operators

`==`, `!=`, `===`, `!==`

Equality operators are **not** the same as the _assignment_ operator `=`

- `==` **equality**: compares left-hand and right-hand and checks if they are the same. Returns a Boolean value.
- `!=` **inequality**: compares left-hand and right-hand and check if they are not the same. Returns a Boolean value.

```js
true == true
```

```js
true == false
```

&#x1F535; **Examples**

Booleans:

```js
false == false
```

```js
true != true;
```

```
true == !true
```

Numbers:

```js
1 == 1

```

And with strings:

```js
"hello world" == "hello world"
```

### Strict

- `===` **strict equality**: same as equality, but does not coerce
- `!==` **strict inequality**: same as inequality, but does not coerce

```js
5 == '5';
```

```js
5 === '5';
```

Generally, it is best to use **strict equality** unless you have a reason to not use it. Sometimes, you can get some unexpected results with using two equal signs.

[Again, don't memorize - just look it up: here is the table comparing and contrasting results of](https://dorey.github.io/JavaScript-Equality-Table/) `==`, `===` and `if()` (use tabs along the top)

### Let's Investigate :computer:

1) Is the number 1 equivalent to the number 1?

2) Is the string "beans" equivalent to the string "Beans"?

3) Is (5 + 5 * 3) equivalent to ((5 + 5) * 3)?

4) Is 9 strictly unequal to false?

5) Is NaN equivalent to NaN?

6) Explain what is happening in the following code
  - first, walk through it and guess what should happen
  - run the code
  - is it what you expected?
  - how can we change this code to run as expected?

```js
let mmColor = 'blue'

if (mmColor = 'green') {
  console.log('Eiw! I am hurling this gross green M&M across the room.')
} else {
  console.log('Yum! M&Ms are so tasty!')
}

```

<hr>


## Comparison Operators

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These work for both strings and numbers. This is both useful, and can be the source of frustration for some developers, since most languages do not implicitly convert strings to numbers the way that JavaScript does.


### Let's Investigate :computer:
Copy and paste the following expressions, guess which will evalutate to true and which will evaluate to false. Then we'll work through these together.

To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

In other words, strings are compared letter-by-letter.

For example:

```javascript
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

```

The algorithm to compare two strings is simple:

* Compare the first character of both strings.
* If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
* Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
* Repeat until the end of either string.
* If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.


##### Not a real dictionary, but Unicode order
The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.

For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). 

To see the code unit for a particular string you can use `charCodeAt()` to find that index.

```javascript
'a'.charCodeAt(0);
```

##### Comparison of different types
When comparing values of different types, JavaScript converts the values to numbers.


#### Your Turn

```javascript
"A" > "a"

"b" > "a"

12 > "12"

12 >= "12"

'a' > 'b'

'z' > 'abc'
```

1) Is -10 greater than or equal to -100?

2) Is "McDonald's" greater than "Burger King?"

<br>
<hr>

## Logical operators

`&&`, `||`

- `&&` **and**: evaluates to `true` if both sides are true. It does not check for equality! Rather, **and** evaluates the truth of the statement, and will return the value of one of the operands.

```js
true && true
```

```js
false && false
```

In these examples, each side is the same (they are equivalent), but in this case, both sides do not both evaluate to `true`.
If an `&&` statement begins with `false`, it automatically evaluates to false.
Both sides must evaluate to true to && to result in true.

```js
true && false
```

```js
const a = true;
const b = false;

a && b
```

<br>

- `||` **or**: evaluates to true if _either_ side is true.

```js
true || false
```

```js
false || false
```

Short Circuiting - we can use the `or` operator to return a valid value to use as a default

```js

username = ''

let user = username || 'Bob Bobby Bob'

console.log(user)

```


### Boolean order of evaluation

Order of evaluation matters! When you have a complex statement, be sure to remember the order things will be evaluated

1. `>, <, >=, <=`
2. `==, ===`
3. `&&`
4. `||`

[Don't memorize, just look it up when needed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

<br>

### Let's Investigate :computer:

Try to guess the result before you check it. If it is not what you expected, try to find out why not

* Check: `!false && true`
* Check: `false || true`

```js
const a = true;
const b = false;
```
* Check: `a && a == b`
* Check: `!true || !false && !false`
* Check: `8 > 1 && true || false`

<br>
<hr>


## Modulo
_Modulus as conditionals_

The **modulo** operator (also referred to as modulus) is represented as a `%` in JavaScript. The Modulo returns the remainder of Euclidean division (Don't worry! It's not as scary as it sounds! Let's investigate together!)

**Examples**
 - `4 % 2` // 0
 - `5 % 2` // 1
 - `8 % 3` // 2

 In this course, our typical use case for the modulo operator is to determine if a number is evenly divisible by another, so don't worry if you don't fully understand what `26%7` should return.

Check for even numbers:

```js
if (5 % 2 === 0) {
    console.log('number is even');
}
```

Check for odd numbers:

```js
if (5 % 2 !== 0) {
    console.log('number is odd');
}
```

Check for numbers divisible by 7:

```js
if (49 % 7 === 0) {
    console.log('number is divisible by 7');
}
```

**Let's add an `else` to our `if` statement**

### If / else with Modulus

```js
if (5 % 2 == 0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}
```

### Further Reading

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## Best Practices

### Indentation
Reading material for [JavaScript code conventions](http://javascript.crockford.com/code.html).

As we have mentioned before, indentation denotes hierarchy in your code. When writing code in JavaScript, you should indent code that is being run inside other code. Here's an example:

**Correct:**

```js
if (5 % 2 == 0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}
```
Note that the console.log that will be run inside the *if* portion is tabbed over once to denote that it should be run if this portion of the code is executed.

**Incorrect:**

```js
if (5 % 2 == 0) {
console.log('Number is even');
} else {
console.log('Number is odd');
}
```

Note that this code will still run, but it is hard to read! This will make your coworkers (and instructors) :confused: . You want to make it as easy as possible for others to know what you are doing, so please show the relationships with indentation! Also note, this is an easy case, imagine if you had 30 lines of code, figuring out where you are missing a curly brace or need to move things around gets nearly impossible with improper indentation.

### Semantic naming
when naming your variable, be explicit! Skip naming your variables `x` or `y` when you can name them `timeTracker` or `uncleRoysChickenCount`

Remember, JavaScript naming convention is *camel case*. This means, the first word in the name is lowercase and any additional words in the name are connected (no spaces between words) and the first letter is capitalized `camelCase` or `thisIsCamelCase`.

In contrast, a language like Python uses `snake case` which uses underscores like so `snake_case`. HTML uses `sausage-case` or it is also known as `kebab-case`.

### Case Sensitivity
Be aware that names are case sensitive. That means: `const redcow` is **not** the same as `const redCow`.

---

Duration: 1.5 hrs<br>
Adapted from: Thom Page's `Conditionals`
Topics: Intro to Conditionals & Loops, Control Flow <br>
