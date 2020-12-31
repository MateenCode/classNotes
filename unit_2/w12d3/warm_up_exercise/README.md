![](/ga_cog.png)

---
Title: Longest Valid Parentheses<br>
Type: Warm Up Exercise <br>
Duration: "0:45"<br>
Creator: Madeline O'Moore<br>
Competencies:  Arrays, Loops, Breaking down a problem into smaller steps<br>
Prerequisites: JavaScript<br>

---

### Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

##### Example:

__Input__: `()`
__Output__: `true`

#### Example 2:

__Input__: `()}`
__Output__: `false`

<br>
<hr>

#### Starter Code

```
const str = "(()";

validParen(str); // false
```
<hr>
<br>
<br>

### Longest Valid Parentheses

Given a string containing any characters between the numbers a-b and the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
<br>

##### Example

__Input__: `(a()`
__Output__: `2`

__Explanation__: The longest valid parentheses substring is "()"


```
const str = "(a()";

longestValidParen(str); //2
```

<hr>
<br>

### Time Complexity & Space Complexity
- Write down what you can tell us about the time complexity of your solution. Is there a way to improve the solution?
- Write down what you think about the space complexity of the solution. Is there a way to improve your solution?


**Still ar Hungry?**
Sign up for [codewars](https://www.codewars.com) and choose a code challenge (in JavaScript) or three and solve them. Found a fun one? Share it in slack!
