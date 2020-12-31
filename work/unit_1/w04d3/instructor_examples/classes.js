// class Person {

//     constructor(name, age, eyes, hair, loveCats = false, lovesDogs) {
//         this.legs = 2;
//         this.arms = 2;
//         this.name = name;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.age = age;
//         this.loveCats = loveCats;
//         this.lovesDogs = lovesDogs || false;
//     }

//     greet(otherPerson) {
//         console.log('hi ' + otherPerson + '!');
//     }

//     classyGreeting(otherClassyPerson) {
//         console.log("Greetings " + otherClassyPerson.name + "!");
//     }

//     setHbair(hairColor) {
//         this.hair = hairColor;
//     }

//     walk() {
//         console.log("I hate when my segway is in the shop!");
//     }

// }


// class SuperHero extends Person {

//     constructor(name, age, eyes, hair) {
//         super(name, age, eyes, hair);
//         this.superPowers = ['flight', 'superhuman strength'];
//     }

//     fly() {
//         console.log("Up up and away");
//     }

//     greet(otherPerson) {
//         console.log(`greetings earthlings - oops i mean  ${otherPerson}`)
//     }

//     walk() {
//         super.walk();
//         this.fly();
//     }
// }

// const superman = new SuperHero("Clark Kent", 30, 'blue', 'black');
// console.log(superman);
// // superman.fly();
// // superman.walk();
// // superman.greet('bob');

// superman.walk();
// console.log(superman.superPowers)





// const me = new Person("Madeline", 30, "hazel", "brown", true, true);
// const you = new Person("Bruno", 31, "brown", 'black');








// me.classyGreeting(you);


// console.log(me)
// console.log(you)
// you.setHair('red');

// console.log(you);


// me.greet('you');
// me.walk();
// you.greet("me");
// you.walk();

// console.log(me.hair)

// const vendingMachine = {
//     snacks: [
//         {
//             name: 'kitkat',
//             price: 6
//         },
//         {
//             name: 'sun chips',
//             price: 7
//         },
//         {
//             name: 'apple',
//             price: 12
//         }
//     ],
//     vend(input) {
//         console.log('vending', this.snacks[input]);
//     }
// };

// vendingMachine.vend(0);




class Car {
    constructor(maker, serialNumber) {
        this.serialNumber = serialNumber;
        this.maker = maker;
    }

    drive() {
        console.log("Vroom Vroom");
    }
}


class Factory {
    constructor(company) {
        this.company = company;
        this.cars = [];
    }

    generateCar() {
        const newCar = new Car(this.company, this.cars.length);
        this.cars.push(newCar);
    }

    findCar(index) {
        return this.cars[index];
    }
}


const tesla = new Factory('Tesla');
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
// console.log(tesla);
console.log(tesla.findCar(0));