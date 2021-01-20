function isAscending(a) {
  // start the for loop at 1 and run it to the end of the array.
  // this gives us one space to look behind every current index
  // and guarantees we won't access an array beyond it's bounds.
  for (var i = 1; i < a.length; i++) {
    // the last value must be less than or equal to the current value.
    if (a[i - 1] > a[i]) {
      return false;
    }
  }
  
  return true;
}

var a1 = [1, 2, 3, 4, 8, 10];
var a2 = [1, 2, 3, 4, 8, 6, 10];
if (isAscending(a1)) {
  console.log("a1 is ascending!!");
};

if (isAscending(a2)) {
  console.log("a2 is ascending!!");
};
