// // console.log("objects are cool" );

// const adventurer = {
//     name: "Khoury",
//     hitPoints: 10,
//     belongings: ["sword", "potion", "tums"],
//     companion: {
//         name: "velma",
//         type: "Bat:"
//     }
//     }

// //     // access the companion’s name
// //     console.log(adventurer.companion.name);

// //     // console.log(adventurer.belongings[0]);

// //     // use a for loop to iterate over every item in the adventurer’s belonings

//     for(let i = 0; i < adventurer.belongings.length; i++) {
//         console.log(adventurer.belongings[i])
//     }
// //     // add a Vogue magazine to Timothy’s belongings - console.log to confirm
//     adventurer.belongings.push("vogue magazine");
//     console.log(adventurer.belongings);

// // // change companon name
// adventurer.companion.name = "Susan";

// console.log(adventurer.companion.name);

// // ad another companion 
// adventurer.companion2 = {
//     name: "me",
//     type: "fly"
// }

// console.log(adventurer);

// // add a companion to a companion

// adventurer.companion.companion = {
//     name: "tim",
//     type: "parasite"
// }
// console.log(adventurer);

// // get to companion companion name

// console.log(adventurer.companion.companion.name);

// // give tim an array of belongings

// adventurer.companion.companion.belongings = ["scuba", "Rogan josh", "Health insurance"]
// console.log(adventurer.companion.companion);

// // log health insurance

// console.log(adventurer.companion.companion.belongings[2]);

// // array of objects.An array of objects can look like this:

// const movies = [{
//     title: "Tokyo Story"
// },
// {
//     title: "Plaun Blart:Movie Cop"
// },
// {
//     title: "L Avventura"
// }];

// console.log(movies);

// // log the title

// console.log(movies[0].title);

// // for loop to log title for each movies title

// for(let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
// }

// // Use variable to  store a key

// const monster = {
//     name: "Slimer",
//     age: 6
// }
// const someVar = "name"

// console.log(monster[someVar]);

// const movie = { 
// title: "L'Avventura", 
// director: "Michelangelo Antonioni", 
// year: 1960 }

// // for in loop to itterate over each key in your Object

// for(let key in movie) {
//     console.log(key);
// }

// // print each value of the object 
// for(let key in movie) {
//     console.log(movie[key]);
// }

// // use Object.keys to make an array of keys for our movie object
// // create an array of objects keys

// // 1st way
// const keys = Object.keys(movie);
// console.log(keys);

// // 2nd way
// for(let i = 0; i < keys.length; i++) {
//     console.log(movie[keys[i]]);
// }

const movie = { 
    title: "Eraserhead", 
    director: "David Lynch", 
    year: 1978 }

// for(let key in movie) {
//     console.log(movie[key]);
// }

const movieKeys = Object.keys(movie)

for(let i = 0; i < movieKeys; i++) {
    console.log(movie[movieKeys[i]]);
}
