
---
Title: Alien Dictionary <br>
Type: Exercise <br>
Duration: 1+ hrs <br>
Creator: Facebook<br>
Adapted by: Madeline O'Moore<br>

---

# Alien Dictionary

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different `order`. The `order` of the alphabet is some permutation of lowercase letters.

Given a sequence of `words` written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

## What you should do after we read the problem:

1. Pseudo code the solution
2. Once your pseudo-code is written, write code that will solve each section of your pseudo-code and return the final result.

<hr>

```js
EXAMPLE 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: `As 'h' comes before 'l' in this language, then the sequence is sorted.`

```

```js
EXAMPLE 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: `As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.`
```

```js
EXAMPLE 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: `The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).`
```


## TIPS
<details>
1. Could you do this iteratively?
<br>
2. Do you need to check each word against the next? What would be the false case between each word? 
</details>
