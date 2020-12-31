// /Section 2 Combining Datatypes////
/ // 1

const crayonBox = {
crayons:[ 
    "purple", 
    "red", 
    "green"
    
]}
console.log(crayonBox.crayons[0]);

// // 2

const bottle = {
    cap: 
    { materials: "plastic",
      color: "blue"

    }
}
console.log(bottle.cap.materials);

// // 3

const receipt = [
    { phone: "Iphone", price: 1000 }
]
console.log(receipt[0].phone);

// // 4

const apartmentBuilding = ["apartment tenant",
["james", "Scott", "michael"]
];

console.log(apartmentBuilding[1]);

// // Combine objects,array, and functions more than one level deep

// // 1

const knit = () => {
    return {
        item: "scarf",
        size: 6,
        color: "blue"
    }
};

console.log(knit().item);

// // 2

const crayonSelector = () => {
    return  {
        crayonBox:
        ["green", "red", "blue"]
    }
}
console.log(crayonSelector().crayonBox[0]);

// // 3

const powerButton = () =>{
    return options =() => {
        console.log("select a song")
    }
}
powerButton()();

// Model a vending machine

const vendingMachine = {
    candy:
    ["snickers", "twix", "butterfinger"],
        snacks:
        {name: "chips",
        price: 1,
        position:(num) => {
            for(element of vendingMachine.candy) {
           return vendingMachine.candy[num], num; 
}
        }
                    }
}
console.log(vendingMachine.snacks.position(1));


// CAll Backs

// 1
const add = (x,y) => {
    return x + y;

}
console.log(add(5,4));

// 2

const subtract = (a,b) => {
    return a - b;

}
console.log(subtract(10,2));

// 3

const multiply = (a,b) => {
    return a * b;
}
console.log(multiply(5,5));

// 4

const divide = (a,b) => {
    return a / b;
}
console.log(divide(10,10));

// 5

const calculate = (operates,num1,num2) => {
    return operates(num1,num2)
    // console.log("calculate this")
}


// 6


// 7
calculate(divide(5,5));
calculate(multiply(5,5));
calculate(add(5,5));
calculate(subtract(5,5));

// Function definition placement


const bar = () => {
    console.log('bar here');
}
bar();


const foo = () => {
    console.log('foo here');
}
foo();

// ERROR READING //////



const foo = ()=>{
    console.log('hi');
}
foo();

// the variable was missing a equal sign and the function is 
// being called outside of the scope

// 









