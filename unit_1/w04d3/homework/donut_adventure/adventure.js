class Hero {
    constructor(name,health,weapons, catchPhrases) {
        this.name = name,
        this.health = 100,
        this.weapons = {sprinkleSpray: 5, sugarShock: 10},
        this.catchPhrases = ["im fresher than day old pizza", "you cant count my calories"]
    }
    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]); 
    }
    announceHealth() {
        console.log(this.health);
    }
    fight() {
        console.log("im ready to rumble");
    }
}
const dougie = new Hero();

// OUR ENEMY/////

class Enemy {
    constructor(name,health,weapons,catchPhrases) {
        this.name = name;
        this.health = 100;
        this.weapons = {pepperoniStarts: 5, chesseGrease: 10},
        this.catchPhrases = ["im youtube famous", "im more dangerous than an undercover sewer"]
    }
    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight() {
         
        console.log("im gonna flatten you like a slice of pepperoni")
    }
}
const pizzaRat = new Enemy();

// Walking Down the Street//////

// Have Dougie talkSass
dougie.talkSass();
// Have Pizza Rat talkSmack
pizzaRat.talkSmack();
// Have Dougie announceHealth
dougie.announceHealth();
// Have Pizza Rat announceHealth
pizzaRat.announceHealth();

// Fight!/////

// Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
fight() {
    console.log(dougie.weapons.sprinkleSpray)
}
// Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat))
fight(enemy) {
    return enemy
}
// Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.

// Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
fight(enemy) {
    if(enemy.weapons.sprinkleSpray) {
        pizzaRat.health() -= 5;
    } 
}
// Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')

// Now, they can fight!

// Have Pizza Rat fight Dougie
pizzaRat.fight(dougie);
// Have Dougie fight Pizza Rat
dougie.fight(pizzaRat)
// Have Pizza Rat and Dougie both 
// announceHealth to make sure their health has decreased!
pizzaRat.announceHealth();
dougie.announceHealth();

