// Creating Classes///////

class Hamster {
    constructor(owner,name,price) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice() {
        return this.price;
    }
}
const ham = new Hamster()

// PERSON//////////

class Person {
    constructor(name,age,height,weight,mood,bankAccount) {
        this.name = name;
        this. age = 0,
        this.height = 0,
        this.weight = 0;
        this.mood = 0
        this.hamsters = [];
        this.bankAccount = 0;
        this.price = 15
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet(personName) {
       console.log(`Hello ${personName}`) 
    }
    eat() {
        this.weight++;
        this.mood++;

    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+= 10;

    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount - hamster.price;

    }
    increaseAge(num) {
        this.age = this.age +5
    }
    food(number) {
        for(let i = 0; i < number; i++) {
            eat();
        }
       
    }
    }

const newPerson = new Person()
newPerson.greet(Khoury)

// 1
// Instantiate a new Person named Timmy
const timmy = new Person();

// /2
// age Timmy five years
timmy.increaseAge(5);

// 3/
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. 
// Have him eat five times.
timmy.food(5);

// 4
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good.
//  Have him exercise five times
console.log(timmy.exercise());
console.log(timmy.exercise());
console.log(timmy.exercise());
console.log(timmy.exercise());
console.log(timmy.exercise());

// 5
// Age Timmy 9 years
timmy.increaseAge(9);
     
// 6
// Create a hamster named "Gus"
const gus = new Hamster();

// 7
// Set Gus's owner to the string "Timmy"  
gus.owner = "Timmy"

// 8 /
// Have Timmy "buy" Gus

timmy.buyHamster(gus);

// 9/
// Age Timmy 15 years
timmy.increaseAge(15);

// 10
// Have Timmy eat twice
timmy.food(2);

// 11
// Have Timmy exercise twice
timmy.exercise();
timmy.exercise();

// 2
// console.log(timmy);
// console.log(timmy.food());

// Daring Adventure! - Let's Go!




