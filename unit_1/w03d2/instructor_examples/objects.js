const car = {
    color: "black",
    hp: 2000,
    year: 2010
}

console.log(car);

car.gas = true;

console.log(car);

car.doors = 4;

console.log(car);

console.log(car.color);

car.color = "beige";

console.log(car.color);


// if (car.doors) {

// }


// const toppings = {};

// const arr = ['peppers','musrhoom'];

// for (let i = 0; i < 10; i++) {
//     toppings['key' + i] = arr[i];
// }

// console.log(toppings);


// const laptop = {
//     year: 2020
// }

// const getYear = 'year';

// console.log(laptop[getYear])


const bestTVShowEver = {
    title: "Lodge 49",
    showRunner: "Jim Gavin",
    year: 2018,
    characters: {
        name: 'mad',
        age: 12
    }
}

console.log(bestTVShowEver['year'])

for (let i in bestTVShowEver) {
    console.log(bestTVShowEver[i].name);
    if (i === "characters" ) {
        bestTVShowEver[i].name
    }
}
