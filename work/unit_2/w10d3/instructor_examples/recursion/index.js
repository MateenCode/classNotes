//10! = 10 x 9 x 8 ... x 1
// Step 1 : Write our function and define
// a base case
// Step 2 : Write our recursive logic
// Step 3 : Analyze our Function and see if there
// is a means to terminate the function early
// Step 4 : Test your answer with various inputs
const factorial = (n) => {
    if (n === 0){
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(10))
console.log(factorial(9))
console.log(factorial(1))
console.log(factorial(0))
console.log(factorial(5) === (5 * 4 * 3 * 2 *1))