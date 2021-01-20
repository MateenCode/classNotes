// Write a function called isUnique that uses a nested
// for loop to compare each element with every other
// element. The function should return false if there
// are any two identical values at different indexes of
// the array.
function isUnique(a) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (i !== j) {
        if (a[i] === a[j]) {
          return false;
        }
      }
    }
  }
  return true;
}

if(isUnique([2,2,3])) {
  console.log("yup.");
}

if(isUnique([1,2,3])) {
  console.log("yup.");
}
