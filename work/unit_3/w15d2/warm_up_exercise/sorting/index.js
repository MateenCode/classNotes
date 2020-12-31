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
//base case
if(arr.length <= 1) {
  return arr
}

//find center of array
const center = Math.floor(arr.length/2) 
//create two arrays left and right
const left = arr.slice(0,center);
const right = arr.slice(center);

//implement recursion you always want to return something
return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const results = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
return[...results, ...left, ...right]
}

//[3,7,2,5, 13,22]

//4[]              //4[]
//2] 2[]           //2[] 2[]
//1[] 1[] 1[] 1[]  //1[] 1[] 1[] 1[]
function quickSort(arr){
  //base case
  if(arr.length < 2) {
    return arr
  }

 
  const midIndex = Math.floor(arr.length/2)
   //pivot
   const pivot = arr[midIndex]
   const myLeftArr = [];
   const myRightArr = [];

   for(let i = 0; i <arr.length; i++) {
     //skip the pivot
     if(i !== midIndex) {
       arr[i] < pivot ?
       myLeftArr.push(arr[i]) :
      myRightArr.push(arr[i])
     
   }

}
return [...quickSort(myLeftArr), pivot, ...quickSort(myRightArr)]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge, insertionSort, quickSort };
