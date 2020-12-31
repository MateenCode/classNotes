// LAB Classes

class Pet {
    constructor(owner,name) {
       this.owner = owner;
       this.name = name;
    }
    walk() {
        console.log("walka walka")
    }
    
}

class Dog extends Pet {
    constructor(owner,name) {
        super(owner,name);
        this.price = 20;
    }
    bark() {
        console.log("bark")
    }
    chaseTail() {
        console.log("oh boy oh boy");
    }
    getPrice() {
        return this.price;
    }
    setName(dogName) {
        this.name = dogName;
    }
   

}



class Cat extends Pet {
    constructor(owner,name) {
        super(owner,name);
        this.price = 10
    }
    purr() {
        console.log("purr");
    }
    clean() {
        console.log("cleaning");
    }
    getPrice() {
        return this.price
    }
    walk() {
        console.log("strut strut")
    }
    setName(catName) {
        this.name = catName;
    }


}
const newCat = new Cat ("straw", "whiskers")
const newDog = new Dog("nobody", "Jo Jo")
const pet = new Pet("The Robert's", "Lola")
const newPet = new Pet("The Smith's", "Pepsi")

// console.log(newCat.getPrice());
newCat.setName("gg");
// console.log(newDog);

// ///////STRETCH/////////

class Cards {
    constructor(value,face,suit,faceUp = false) {
        this.value = value;
        this.face = face;
        this.suit = suit;
        this.faceUp = faceUp
    }
 
}
class King {
    constructor(cards) {
        this.cards = 13
    }
    
}

make array for cards