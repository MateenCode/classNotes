// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const multipleSum = (n) => {
    let sum = 0
    for(let i = 0; i < n; i++) {
        if(i % 3 === 0 || i % 5  === 0) {
            sum += i
        }
       
    }
    return sum
}
// console.log(multipleSum(1000))
let T = [73, 74, 75, 71, 69, 72, 76, 73]
const dailyTemp = (t) => {
    for(let i = 0; i < t.length; i ++) {
        if(t[i] > t[i])
    }
}

console.log(dailyTemp(T))
