// FREQUENCY COUNTER APPROACH/////

// function////////
const findWordFreq = (str) => {
   // Create string variable///
 const sentArr = str.toLowerCase().split(' ')
 // Create empty object ///
 let letterCount = {}
  
 // Loop through every word in the string///

 for(let word of sentArr) {
     if(letterCount[word]) {
         letterCount[word]++

     } else {
         letterCount[word] = 1
     }
 }
 return letterCount
}

 const findHighestFreq = (obj) => {
          let highestValue  = -Infinity
          let highestValueKey
          for(let value in obj) {
              if(obj[value] > highestValue) {
                  highestValue = obj[value]
                  highestValueKey = value
              }

          }
         return {[highestValueKey]: highestValue}
        }
console.log(findHighestFreq(findWordFreq('i love love code')));




//  for(let i = 0; i < findWordFreq.length; i++) {
       // If the letter is a key inside the object///
    //  if(letterCount[findWordFreq[i]]) {
         // Add 1 to the counter///
        //  letterCount[findWordFreq[i]] += 1
    //  } else {
         // Otherwise, create a new counter for that new letter///
        //  letterCount[findWordFreq[i]] =1
    
  

    //  const findHighestFreq = (obj) => {
    //       let highestValue  = -Infinity
    //       let highestValueKey
    //       for(let value in obj) {
    //           if(obj[value] > highestValue) {
    //               highestValue = obj[value]
    //               highestValueKey = value
    //           }

    //       }
    //      return {[highestValueKey]: highestValue}

    //  }
    //  findWordFreq('i love code');
    
//  }
//  console.log(letterCount)


//    }

//    let findHighestFreq = 0; {
//     for(word in letterCount) {
//         if(letterCount[word] % 2 === 0) {
//             findHighestFreq ++
//         }
    // }
//     console.log(findHighestFreq)
// }







// let findHighestFreq = {object}



