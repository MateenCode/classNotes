const car = {
    color: "black",
    hp: 2000,
    year: 2010
}
console.log(car);

car.gas = true;

console.log (car);
car.rims = 22

console.log(car);

console.log(car.color);

car.color = "beige";

console.log(car.color);

if(car.year === 2010) {
    console.log("time for an upgrade");
}

if(car.doors) {
    console.log("you shouldnt be on the road")

}
console.log("you shouldnt be on the road")

// const toppings = {};
// for (let i = 0; i < 10; i++) {
//     toppings['key'+i] = 'cheese'
// }
// console.log(toppings);

// const pToppings = [ pepporni]
// const toppings = {};
// for (let i = 0; i < 10; i++) {
//     toppings['key'+i] = pToppings[1]
// }
// console.log(toppings);

// const laptop = {
//     year: 2020
// }

// const getYear = "year";

// console.log(laptop[getYear]);

const bestTVShowEver =  {
    title: "lodge 49",
    showRunner: "Jim Gavin",
    year: 2018
}
// Print each key:
for(let key in bestTVShowEver) {
    console.log(key);
}
// Print each value:
// key could also be i
for(let key in bestTVShowEver) {
    console.log(bestTVShowEver[key]);
}