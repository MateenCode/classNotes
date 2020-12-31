// class is a reserved word in JS

class Person {
    constructor(name,age,eyes,hair, loveCats = false, loveDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.eyes = eyes;
        this.hair = hair;
        this.age = age;
        this.loveCats = loveCats;
        this.loveDogs = loveDogs
    }
    greet(otherPerson) {
        console.log("Hi" + " " + otherPerson);
    }
    classyGreeting(otherClassyPerson) {
        console.log("greeting " + otherClassyPerson.name)
    }
    walk() {
        console.log("I hate when my Segway is in the shop");
    }
    setHair(hairColor) {
      this.hair = hairColor;  
    }

}

class SuperHero extends Person {
    constructor (name,age,eyes,hair) {
        super(name,age,eyes,hair);
        this.superPowers = ["flight", "super human strength"];
    }

    fly() {
        console.log("Up, up and away!")
    }
    greet(otherPerson) {
        console.log(`gretting earthlings - oops i mean ${otherPerson}`)
    }
    walk() {
        super.walk();
        this.fly();
    }
}
const superman = new SuperHero("Clark Kent", 30, "blue", "Black")
console.log(superman);
// Now we can "instantiate" or create new objects using 
// this class. We do this by adding the new keyword before calling 
// the class name like a function.

// const me = new Person("khoury", 31, "brown", "brown", false,true);
// const you = new Person("ahjah", 31);

// me.classyGreeting(you);

// me.greet("you");
// me.walk();
// you.greet("me");
// you.walk();
// superman.greet("bob");
superman.walk();

// console.log(me);
// console.log(you);

// const vendingMachine = {
//     snacks: [
//       {
//         name: 'kitkat',
//         price: 6
//       },
//       {
//         name: 'sun chips',
//         price: 7
//       },
//       {
//         name: 'apple',
//         price: 12
//       }
//     ],
//     vend (input) {
//       console.log('vending', this.snacks[input]);
//     }
//   };
  
//   vendingMachine.vend(0);


// JavaScript - OOP Factories

class Car {
    constructor(maker, serialNumber) {
        this.maker = maker;
        this.serialNumber = serialNumber;
    }
    drive() {
       console.log("vroom vroom") 
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
        return this.cars[index]
    }
}

const tesla = new Factory("Tesla")
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(0));

const lamborghini = new Factory("Lamborghini Truck")
// lamborghini.generateCar();
// lamborghini.generateCar();
// lamborghini.generateCar();
console.log(lamborghini);

const newCar = new Car("spaceship",200050)


