// ////////////////////////////////
// // Easy Going
// ////////////////////////////////
for(let i = 1; i <= 20; i++) {
    console.log(i);
}

// // ////////////////////////////////
// // // Get Even
// // ////////////////////////////////

for(let i = 0; i <= 200; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
// // ////////////////////////////////
// // // Fizz Buzz
// // ////////////////////////////////
// for(let i = 1; i <= 100; i++) {
//     console.log(i);
// }

for(let i = 1; i <= 100; i++ ) {
    if (i % 3 === 0) {
        console.log("Fizz")
    }   else {
        console.log(i);
    }
} 

// for(let i = 1; i <= 100; i++ ) {
//     if (i % 5 === 0) {
//         console.log("Buzz")
//     }   else {
//         console.log(i);
//     }
// } 

// for(let i = 1; i <= 100; i++ ) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz");
//     }  
// }    

// // ////////////////////////////////
// // // Wild Wild Life
// // ////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001;
wolfy[3] = "Gotham City"
dart.push("Hawkins");
wolfy.splice(0,1,"Gameboy");


// // ////////////////////////////////
// // // Yell at the Ninja Turtles
// // ////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (const element of ninjaTurtles) {
    console.log(element.toUpperCase());
}
// ////////////////////////////////
// // Methods, Revisited
// ////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[Math.floor(favMovies.length/2-1)]);

console.log(favMovies.sort());

favMovies.push("Guardians of the Galaxy");
console.log(favMovies[favMovies.length -1]);
console.log(favMovies);

const reversed = favMovies.reverse();

console.log(reversed);

favMovies.shift();
console.log(favMovies);

favMovies.unshift("Guardians of the Galaxy");
console.log(favMovies);

favMovies.splice(3,1, "Avatar");
console.log(favMovies);

// let divideArray = Math.round(favMovies.length /2) 

console.log(favMovies.slice(-10));
console.log(favMovies);
// console.log(divideArray);

// // 10*


// ////////////////////////////////
// // Where is Waldo
// ////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);

whereIsWaldo[1] [2] = "No One";
console.log(whereIsWaldo);

whereIsWaldo[2][2];
console.log(whereIsWaldo[2][1][1]);

// // ////////////////////////////////
// // //  Excited Kitten
// // ////////////////////////////////
for(let i =0; i <= 20; i++) {
    console.log("Love me, petme! HSSSSSS!");
}


const kittenTalk = ["human...why you taking pictures of me?","the catnip made me do it","why does the red dot always get away"]
const randomKittenTalk = kittenTalk [Math.floor(Math.random() *kittenTalk.length)]

for(let i = 0; i <= kittenTalk; i++) {
    if(i % 2 === 0) {
        console.log(randomKittenTalk);
}

////////////////////////////////
//  Find the Median
///////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// const wholeNum = Math.floor(25/2);
// const sort = nums.sort();
// const median =  (numbers) => {
// let median = 0
// let numsLength = nums.length;
// if(numsLength & 2 === 0) {
//     median =(numbers[numsLength / 2 - 1] + numbers[numsLength / 2]) /2;
// } else {
//     median = numbers[(numsLength - 1) / 2];
// }
// return median;
// }

// console.log(nums.sort());

nums.sort();
console.log(nums);
const wholeNum = nums[Math.floor(nums.length/2)];
console.log(wholeNum);
