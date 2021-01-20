function arrayToString(a) {
  if (a.length === 0) {
    return "[]";
  }

  var result = "" + a[0];
  for (var i = 1; i < a.length; i++) {
    result += "," + a[i];
  }
  
  return "[" + result + "]"
}

console.log(arrayToString([42, 12, 90]));
console.log(arrayToString([]));

