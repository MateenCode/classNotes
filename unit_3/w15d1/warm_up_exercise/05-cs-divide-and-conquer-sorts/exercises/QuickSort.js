function quickSort(arr) {
  // YOUR CODE HERE

  // Base Case

  // Define the pivot
  pivot = arr[0]

  // define sides of arr
  left = []
  right = []

  // loop through array and add values to left and right partition
  for(let i=1;  i< arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
      // console.log(left)
      
    } else {
      right.push(arr[i])
    }
  }
  // make sure to not add the pivot!


  // Return the sorted arrays and pivot!
  return quickSort(left).concat(pivot, quickSort(right))
}

const arr = [10, -1, 50, 2];
console.log(quickSort(arr.slice))

