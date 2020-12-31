// recursion steps//

/*define base case to make sure 
we dont have infinite loop*/ 

// 10 x 9 x 8 ..... x 1 ///

/*define base case to make sure 
we dont have infinite loop*/ 

// step 1: write function and define base case//
// step 2: write recursive logic///
// step 3: analyze ou function and see if there is a means to terminate function early
// step 4: test answer with various inputs
// const factorial = (n) => {   //base case
//     if(n === 0) {
//         return 1               //base case
//     } else {
//         return n * factorial(n-1)

//     }
// }
// console.log(factorial(10));
// console.log(factorial(9));
// console.log(factorial(1));
// console.log(factorial(0));
// console.log(factorial(5) === (5 * 4 * 3 * 2 * 1));

arr = [1,2,3,4,5];
function max(array) {
    if (array.length === 01) {  // Step1: set up your base case
        return array[0]
   } else {  
       return Math.max(array.shift(), max(array)) // Step2: rec case
   }
  }
//   console.log(max(1,3,4,3));
  console.log(max(arr));

  function string_recurse(active, rest) {
    if (rest.length == 0) {
        console.log(active);
    } else {
        string_recurse(active + rest.charAt(0), rest.substring(1, rest.length));
        string_recurse(active, rest.substring(1, rest.length));
    }
}
console.log(string_recurse("tgf","abc"));
