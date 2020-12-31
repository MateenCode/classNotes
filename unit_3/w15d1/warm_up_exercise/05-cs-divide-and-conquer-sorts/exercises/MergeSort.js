function mergeSort(arr) {
  // YOUR CODE HERE

  // Define the base case

  // Find the mid point in the array

  // Split the array in two and on each side keep dividing down 
  // untill you have multiple arrays of size 1

  // Return the merged arrays
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

const arr = [10, -1, 50, 2];
console.log(mergeSort(arr))

