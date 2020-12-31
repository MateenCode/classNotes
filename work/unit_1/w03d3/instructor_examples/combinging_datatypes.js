// console.log('combos yay!')


// an object with an array
//
// const foo = {
//   someArray: [1,2,3],
//   someObject: {
//     someProperty: 'oh hai'
//   },
//   someMethod: () => {
//     console.log('oh hello')
//   }
// }

// access the array
// console.log(foo.someArray[0])

// access the object
// console.log(foo.someObject.someProperty)

// call the function
// foo.someMethod()

// const fooArray = [
//   {someProperty: 'weee'}, 2, 3,
//   () => {
//     console.log('fun!')
//   }
// ]

// access the object and its property
// console.log(fooArray[0].someProperty)

// const foo2DArray = [
//   [ '0,0' , '0,1', '0,2'],
//   [ '1,0', '1,1', '1,2'],
//   [ '2,0', '2,1', '2,2']
// ]

// access each item in the 2D array
// for (let i = 0; i < foo2DArray.length; i++) {
//   // console.log(foo2DArray[i])
//   for (let j = 0; j < foo2DArray[i].length; j++) {
//     console.log(foo2DArray[i][j])
//   }
// }

// access each item in the 2D array
// for (let row of foo2DArray) {
//   // console.log(row)
//   for (let element of row) {
//     console.log(element)
//   }
// }

// access an item that is in an array that is in an aray
// console.log(foo2DArray[1][2])

// call the function in the array
// fooArray[3]()

// loop over array inside of an object
// for (let i = 0; i < foo.someArray.length; i++) {
//   console.log(foo.someArray[i])
// }

// iterate over items
// for (let element of foo.someArray) {
//   // gives actual items in the array
//   console.log(element)
// }

// iterates over keys in an object
// for (let element in foo.someArray) {
//   // gives index positions
//   console.log(element)
// }

// OOPS! Returns undefined
// const fooFunction = () => {
//   return
//   {
//     someProperty: 'howdy'
//   }
// }

// const fooFunction = () => {
//   return {
//     someProperty: 'howdy'
//   }
// }
//
// console.log(
//   fooFunction().someProperty
// )


// const fooFunction = () => {
//   return [
//     'apple',
//     'banana',
//     'pear'
//   ]
// }

// get the banana!
// console.log(
//   fooFunction()[1]
// )


// const fooFunction = () => {
//   return {
//     someArray: [
//       'fun',
//       'awesome',
//       'sweet'
//     ]
//   }
// }

// console.log(
//   fooFunction().someArray[1]
// )

// const fooFunction = () => {
//   return {
//     "Some Object" : {
//       someProperty: 'some value'
//     }
//   }
// }

// console.log(
//   // fooFunction()['someObject'].someProperty
//   fooFunction()['Some Object']
// )


// const fooFunction = () => {
//   return {
//     someMethod: () => {
//       // returns nothing
//       // therefore the return value is undefined
//       console.log('oh hai!')
//     }
//   }
// }
//
// // console.log(
//   fooFunction().someMethod()
// // )

// const fooFunction = () => {
//   return () => {
//     console.log('whaaaa?')
//   }
// }

// returns our anonymous arrow function
// console.log(fooFunction())

// fooFunction()()


const foo = {
  someMethod: () => {
    return {
      someProperty: 'some value',
      someArray: [
        'peach',
        'apple',
        'pear'
      ],
      someObject: {
        someProperty: 'some value'
      },
      someMethod: () => {
        // console.log('both methods can have the same name')
        return () => {
          console.log('wowie this is deep')
        }
      }
    }
  }
}

// console.log(
  // foo.someMethod().someProperty
// )

// get to the pear
// console.log(
//   foo.someMethod().someArray[2]
// )

// get to some value

// console.log(
//   foo.someMethod().someObject.someProperty
// )

// log of 'both methods can have the same name'
// console.log(
  // foo.someMethod().someMethod()()
// )

const fooArray2 = [
  1,
  'apple',
  () => {
    return {
      someProperty: 'some value',
      someArray: [
        'cat',
        'dog',
        'baboon'
      ],
      someObject: {
        someProperty: 'some value'
      },
      someMethod: () => {
        return () => {
          console.log('Party Otter is my fav emoji')
        }
      }
    }
  }
]

// console.log(
//   fooArray2[2]().someProperty
// )

// console.log(
//   fooArray2[2]().someArray[2]
// )

// console.log(
//   fooArray2[2]().someObject.someProperty
// )

// console.log(
//   fooArray2[2]().someMethod()
// )

// console.log(
  fooArray2[2]().someMethod()()
// )
