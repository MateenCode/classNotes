// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const  bubbleSort = (arr) => {
let swaps = Infinity
while(swaps > 0){
  swaps = 0
  for (let i = 0 ; i < arr.length; i++){
    if( arr[i] > arr[i+1] ){
      const temp1 = arr[i]
      const temp2 = arr[i+1]
      arr[i] = temp2
      arr[i+1] = temp1
      swaps +=1
    }
  }
}
return arr;
}

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentNum = arr[i]
    let j = i - 1
    while(currentNum < arr[j]){
      const checkValue = arr[j];
      arr[j] = currentNum;
      arr[j + 1] = checkValue;
      j--;
    }
  }
  return arr
}

console.log(insertionSort([10,30,99,1,456,22]))



function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}
function quickSort(arr){

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge, insertionSort, quickSort };
