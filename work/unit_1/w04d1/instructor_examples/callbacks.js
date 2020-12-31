

// setTimeout(() => {
//     console.log("hello world")
// }, 0)


// const socky = () => {
//     console.log("I will iron your socks!");
// }

// const foodie = () => {
//     console.log("I will sort your M&Ms so that you encounter a green one");
// }

// const pr = () => {
//     console.log("I will make sure everyone knows you are the best boss ever");
// }

// const boss = employee => {
//     console.log("I am the boss and you will do as I say");
//     employee();
// }

// boss(socky);
// boss(foodie);
// boss(pr);

// boss(() => {
//     console.log("Ill close down for the night!")
// })


const capitalize = word => {
    return word[0].toUpperCase() + word.substring(1);
}

const excitedWords = word => {
    return word + "!";
}

const lowercase = word => {
    return word.toLowerCase();
}

const handleWords = (str, cb) => {
    const arr = str.split(' ');
    const newArr = [];
    debugger;
    for (let word of arr) {
        newArr.push(cb(word));
    }
    debugger;
    return newArr.join(' ');
}

// console.log(handleWords('HELLO HOW are you?', lowercase));

const product = {
    name: "shirt",
    tax: '20',
    price: '20'
}


var a = parseInt('10');

// create a function
const addProductSum = (product) => {
    // get the tax & price
    const tax = parseInt(product.tax);
    const price = parseInt(product.price);
    // check that they are both number
    console.log(tax + price)
}

addProductSum(product)
// return a variable with them added





console.log('10', a);