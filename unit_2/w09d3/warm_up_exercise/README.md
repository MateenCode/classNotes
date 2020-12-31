![](/ga_cog.png)

---
Title:WORD FREQUENCY<br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator: Thom Page<br>
Competencies:  Problem Solving, <br>
Prerequisites: JavaScript or Ruby Fundamentals<br>

---



# WORD FREQUENCY

## 1

Write a function `findWordFrequencies` that takes in a sentence (string), and returns an object with each word as a key, with a value of how many times that word appears in the sentence.

eg: `{ I: 1, love: 1, lamp: 1 }`

Make it work just for sentences without commas, apostrophes, and periods. Capital letters and lowercase letters should be treated as equals: 'The' and 'the' are the same word.

## 2

Write a function `findHighestFrequency` that takes in an object and returns an object with the key that has the highest value. With this function we can see which word appeared in the sentence with the highest frequency.

If there is a tie between the two most frequent words, the first appearing one is returned.

## Examples

**"The world is all that is the case"**

```javascript
const freqs = findWordFrequencies('The world is all that is the case'));

console.log(freqs);
```

> => { the: 2, world: 1, is: 2, all: 1, that: 1, case: 1 }


```javascript
const freqs = findWordFrequencies('The world is all that is the case');

console.log(findHighestFrequency(freqs));
```

> => { the: 2 }

**"That that is is that that is not is not"**

```javascript
const freqs = findWordFrequencies('That that is is that that is not is not');

console.log(freqs);
```

> => { that: 4, is: 4, not: 2 }

```javascript
const freqs = findWordFrequencies('That that is is that that is not is not');

console.log(findHighestFrequency(freqs));
```

> => { that: 4 }

**"hi"**

```javascript
const freqs = findWordFrequencies('hi');

console.log(freqs);
```

> => { hi: 1 }


```javascript
const freqs = findWordFrequencies('hi');

console.log(findHighestFrequency(freqs));
```

> => { hi: 1 }


## Hungry for More

#### Try these Kata

[Coin Calculator](https://www.codewars.com/kata/calculator-coin-combination)

[Bob's Short Forms](https://www.codewars.com/kata/bobs-short-forms)
