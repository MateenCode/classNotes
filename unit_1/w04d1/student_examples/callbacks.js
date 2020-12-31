// setTimeout(()=> {
//     console.log("hello world")
// }, 0.001)

// // prints log after one second and has two parameters.

// const socky = () => {
//     console.log("I will happily iron your socks")
// }
// // socky();

// const foodie = () => {
//     console.log("I will sort you M&Ms so that uou encounter a green one");
// }

// const pr = () => {
//     console.log("i will make sure everyone know you are the best boss ever");
// }

// // employee is the parameter if just one parameter you don't need the ()
// const boss = employee => {
//     console.log(" I am the boss and you will do as I say!");
//     employee();
//     // invoke callback
// }

// boss(()=> {
//     console.log("all closed down for the night")
// });

const capitalize = word  => {
    return  word[0].toUpperCase() + word.substring(1);
}

console.log(capitalize("khoury"));


const excitedWords = word => {
    return word + '!'
  }
  console.log(excitedWords("khoury"));

  const allLowerCase = word => {
    return word.toLowerCase();
}


  const handleWords = (str, cb) => {
    const arr = str.split(' ')
    const newArr = [];
    debugger;
    for(let word of arr) {
        newArr.push(cb(word));
        

    }
    debugger;
    return newArr.join(' ');
    console.log(newArr);
  }
  console.log(handleWords("HELLO how are you?", allLowerCase));


