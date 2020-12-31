// // an object with an array

// const foo = {
//     someArray: [1,2,3]
// }
// console.log(someArray[[0]]);

// // You can create a property for an object that is an object

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// foo.someObject.someProperty;

// // You can create a property for an object that is a function (method)

// // Acces the array
// // console.log(foo.someArray{0})
// // acces the object
// // console.log(foo.someObject.)

// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };

// foo.someMethod();

// // You can store an object in an array

// const fooArray = [
//     {someProperty:'weee'}, 2, 3
//     () => {}
// ];

// console.log(foo[0].someProperty);

// // You can store an array in an array

// const foo2DArray = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];
// console.log(foo2DArray[1][2]);

// // write a nested for loop to iterate over our 2D array

// for(let i = 0; i < foo2DArray.length; i++) {
//     for(j = 0; j < foo2DArray[i].length; j++) {
//         console.log(foo2DArray[i][j]);
//     }
// }
// // use for of syntax
// for(let row of foo2DArray) {
//     console.log(row);
// }


// // You can loop over an array in an object

// // v1
// const foo = {
//     someArray:[1,2,3]
// };

// // v2

// for (var i = 0; i < foo.someArray.length; i++) {
//     console.log(foo.someArray[i]);
// }

// // v3
// for(element of foo.someArray){
//     console.log(element);
// }

// // for of itterates over items gives actual items in array

// // for in loop itterates over objects and gives index positons


// // log a property from a returned object
// const foo = () => {
//     return {
//         sameProperty: "howdy"
//     }
// }
// foo();
// foo().sameProperty;


// const fooFunction = () => {
//     return [
//         "apple",
//         "banana",
//         "pear"
//     ]
// }
// // get the banana
// console.log(fooFunction()[1]);

// const fooFunction = () => {
//     return {
//         someArray: [
//             "fun",
//             "aws",
//             "sweet"
//         ]
//     }
// }
// console.log(fooFunction());

// You can create an object that has a method 
// that returns an object that has an object

// const fooFunction = () => {
//     return {
//         someMethod: () => {
//            console.log("oh hai") 
//         }
//     }
// }
// fooFunction().someMethod()

// function that returns a function


// const fooFunction = () => {
//     return () => {
//         console.log("waaaa")
//     }
// }

// retuurn and object
const fooFunction = {
    someMethod: () => {
        return{
            someProperty: "some value" ,
            someArray: [
                "p",
                "a",
                "p"
            ],
            someObject: {
                someProperty: "some value"
            },
            someMethod: () => {
                console.log("both can have th same name")
            }
            
        }
        
    }
}
// go to someMethods someMethod
// if there is no return value you willl get undiefined so remove second console log
fooFunction.someMethod().someMethod();

// console.log(fooFunction.someMethod().someProperty);
// console.log(fooFunction.someMethod().someProperty);


const fooArray1 = [
    1,
    "aoole",
    () => {
        return {
            someProperty: "some value",
            someArray: [
                "c",
                "d",
                "b"
            ],
            someObject: {
                
            }
        }
    }
]
// console.log(fooArray1[2]().someProperty);
console.log(fooArray1[2]().someArray[2]);
