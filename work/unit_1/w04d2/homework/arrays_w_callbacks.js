// Section 3 Array Methods with Callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
'The', 
'quick', 
'brown', 
'fox', 
'jumps', 
'over', 
'the', 
'lazy',
 'dog']

//  Determine if every number is greater 
// than or equal to 0
// 1
 const greater = (number) => {
return number >= 0;
 }
 console.log(nums.every(greater));

//  2 determine if every word shorter than 8 characters

const updatedPana = panagram.map((size) => {
    return size.length < 8;
});

console.log(updatedPana);

// FILTER////////

// 1/
// filter the array for numbers less than 4

const numbers = nums.filter(((num) => {
    if(num < 4) {
        return  num;
    }

}));

console.log(numbers);

// filter words that have an even length
// 2

const even = panagram.filter(((word) => {
    if(word.length % 2 === 0) {
        return word;
    }

}))
console.log(even);

// FIND///////

// Find the first value divisible by 5
// 1

const five = nums.find((even) => {
    return even / 5;
});
console.log(five);

// 2  find the first word that is longer than 5 characters

const long = panagram.find((words) => {
    return words.length >= 5;
});
console.log(long);

// FIND INDEX/////
// 1 find the index of the first number 
// that is divisible by 3

const index = nums.findIndex((num) => {
    return num / 3;
});

console.log(index);

// 2  find the index of the first word
//  that is less than 2 characters long

const smallWord = panagram.findIndex((sm) => {
    return sm.length < 2;
})

console.log(smallWord);

// FOR EACH/////

// 1 console.log each value of the nums array multiplied by 3

nums.forEach(function(number,index) {
console.log(`${index * 3}`)
}) 

// console.log each word with an 
// exclamation point at the end of it

panagram.forEach(function(word,index) {
    console.log(`${word + "!"}`)

})

// MAP///

// 1 make a new array of each number multiplied by 100

const oneHundred = nums.map((number) => {
    return number * 100;
})
console.log(oneHundred);

// 2 make a new array of all the words in all uppercase

const upperCase = panagram.map((uc) => {
    return uc.toUpperCase();
})
console.log(upperCase);

// SOME///////

// 1 Find out if some numbers are divisible by 7

const divisibleBySeven = (element) => element / 7;
console.log(nums.some(divisibleBySeven));

//  2 Find out if some words have the letter a in them

const letterA = panagram.some(function(wooord) {
    return wooord
})
console.log(letterA);

