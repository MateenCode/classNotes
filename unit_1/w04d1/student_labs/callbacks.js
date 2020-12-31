// 1
// const newNumber = (num) => {
//    return num + 1;
// }

// console.log(newNumber(8));

// 2
// const secondFunction = () => {
    // return "hi i am" + " " + newNumber(8);
    
// }
// console.log("hello", secondFunction(2) + "years old");

// 3
// console.log(newNumber(secondFunction));

// 4

// () => {
    // return "hi i am" + " " + newNumber(8);
// }

// 5

// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }
// const baz = (param) => {
//     console.log(param.toUpperCase());
// }

// foo(baz, 'hello');


// electric mixer

// 1
// const electricMixer = attachment => {
//     console.log("This mixer is now" + attachment);
//     return "spiralizing";
// }
// electricMixer("spiralizing");

// const spiralizer = () => {
//     return "spiralizing";
//   }

// const slicerDicer = () => {
//     return "slicin' and dicin'";
// }
// electricMixer(spiralizer);
// electricMixer(slicerDicer)

// const dicer = attachment => {
//     console.log("Who loves to use a" + " "  + attachment)
//     return "dicer"
// }
// dicer("dicer");


// // create a function that holds two parameters
// functionName(CALLBACK, MILLISECONDS)
// // create a high order function with an annynomous function that logs hi
// // after 2 seconds
// setTimeout(() => {
//     console.log('hi');
//   }, 2000);

// //   create a function with an annynomous function that logs hi after a 2 second delay

// setInterval(() => {
//     console.log('hi');
//   }, 2000);

//   write a function that increases by one every second


const time = () => {
    for(let i = 0; i < 10; i++);
    console.log()
}

setInterval((num) => {
  for(let sec of time)
    return  num +=1;
}, 1000)

setInterval(1);