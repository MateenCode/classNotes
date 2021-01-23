![ga](../../../../ga_cog.png)

# Warm up for Big O Notation

Lets Solve a couple warm up questions before we hop into Big O notation

1) ## Remove First and Last Character
    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
```
function removeChar(str){

}
```
```
removeChar("Facebook") // --> "aceboo"
removeChar("Apple) // --> "ppl"
removeChar("Charizard") // --> "harizar"
```

2) ## Count the monkies
    You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

```
function monkeyCount(n){
  
}
```
```
monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
```

3) ## Counting Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

```
function duplicateCount(text){
  
}
```

```
duplicateCount("abcde") // --> 0 no characters repeats more than once
duplicateCount("aabbcde") // --> 2 'a' and 'b'
duplicateCount("Indivisibilities") // --> 2 'i' and 's'
duplicateCount("indivisibility") // --> 1 'i'

```