var a1 = [1,1,1,1,1,2,2,2,2,7,9,9,9,9,9,9,12,12,99,99,99,99];
var a2 = [1,2];
var a3 = [1,4,4,4,4,4, 6,6,8,8,8,8,8];

// Write a function that accepts an array as a parameter
// and returns a new array containing only even numbers.
function getEvenNumbers(a) {
  // create a new array
  var result = [];
  
  // look at every element in the first array.
  for (var i = 0; i < a.length; i++) {
    // test for even numbers
    if (a[i] % 2 == 0) {
      // add any even number to a result array.
      result.push(a[i]);
    }
  }
  
  // use a for loop to look through the original array
  
  // return the new array
  return result;
}

console.log(getEvenNumbers(a1))
console.log(getEvenNumbers(a2))
console.log(getEvenNumbers(a3))

