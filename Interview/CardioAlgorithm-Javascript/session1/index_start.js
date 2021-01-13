// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
  return str.split("").reverse("").join("");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str) {
  const revStr = str.split("").reverse().join("");
  return revStr === str;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(int) {
  return int.toString().split("").reverse().join("");
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((char) => char[0].toUpperCase() + char.substring(1))
    .join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let arr = str.split("");
  let count = {};

  for (let val of arr) {
    count[val] ? count[val]++ : (count[val] = 1);
  }

  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
// Call Function
const output = maxCharacter("javascript");

console.log(output);
