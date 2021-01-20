// Write a function called largest that accepts an
// array and returns the largest value in the
// array.
// largest([12, 40, 8]) should return 40
// largest([43, 90]) + largest([8, 2]) should compute 98
// largest([-100, -80, -40]) should return -40
function largest(a) {
  // handle empty arrays.
  if (a.length === 0) {
    return null;
  }
  
  // have a variable that keeps track of the
  // largest thing we've seen so far.
  var largest = a[0];
  
  // use a for loop to look at every single element
  for (var i = 0; i < a.length; i++) {
    // test each element against the largest we've seen
    if (a[i] > largest) {
      // update the largest if something beats it
      largest = a[i];
    }
      
  }
  // return the largest value
  return largest;
}

console.log(largest([12, 40, 8]));
console.log(largest([24, 53, 2, 92]));
console.log(largest([43, 90]) + largest([8, 2]));
console.log(largest([-100, -80, -40]));
console.log(largest([]));
console.log(largest([]) + largest([16, 32]));

