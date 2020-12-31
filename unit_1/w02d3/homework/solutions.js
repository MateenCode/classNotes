// What is the difference between a parameter and an argument?
// // // A parameter is is the input of the function and 
// // // the argument specifies the value of the parameter
// Within a function, what is the difference between return and console.log?
// // // return sends the value of your function immediately. Console.log records the data from the function

// const checkPalindrome = (str) => {
// const words = str.split('');
//     // // console.log(words);
//     const reversed = words.reverse();
//     // // console.log(reversed)
//     // let a = words.join('');
//     let b = reversed.join('');
//     // console.log(words.join(''));
//     if( b === str) {
// return true 
//     } else {
// return false
//     }

// }
// console.log(checkPalindrome("Radar"));

// // // // Sum Array

// // // let numArray = [1,2,3]
// // // let sum = 0 

// const sumArray = (Array) => {
//     let sum = 0;
//     for(let i = 0; i < Array; i++) {
//         sum += Array[1]; 
//     }
// }
// console.log((sumArray([1,2,3,4,5])))
// // //         return (n1 + n2 +  n3)
// // //     }
// // // }

// // // // console.log(sumArray(4,5,6));
// // let i = 0; i < Array => {
// //     sum =+ Array[i]
// // }
// // const sumArray = (Array) => {
// //     let sum = 0
// //     for(let )
// // }

// // // Prime Number
// // // let squareRoot = Math.floor(Math.sqrt(num));

// const checkPrime = (num) => {
//     for(let i = 2; i <= num; i++) {
//         if( num % i === 0) {
//             return false;
//         }
//     } 
//     return true; 
// }
// console.log(checkPrime(3));

// const printPrimes = (num1) => {
//     for(let i = 2; i <= num1; i++) {
//         if(checkPrime(i)) {
//             console.log(i)
//         }
//     }

// }
// printPrimes(5)

// //  write function that returns random answer

const randomMove = () => {

//     // assign a random number value
    
    const rps = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * (rps.length));
    return rps[random];
}   
let user = randomMove();
let computer = randomMove();

let workScissors = prompt("did you cut with scissors today", "yes/no"); 


    console.log(user);
    // Math.random will only Return a random number 
    //// between 0 (inclusive) and 1 (exclusive): values must be less than one
    // for(let i = 0; i < rps; i++) {
      
    // }
        
       
    
    // console.log(rps[random]);

