//  GLOBAL VARIABLES//////////////
let fight = function() {};
let USSAttackAlien = function attack(human){};
let newShipHull = [];

    for(let i = 0; i < 1; i++) {
        // newShip[i] = Math.floor(Math.random() * 6);
        newShipHull.push((Math.random() * 6));
    // return newShip[Math.random() * (max -min) + min];
};
    let newShipFirePower = [];
    for(let i = 0; i < 1; i++) {
    // newShip[i] = Math.floor(Math.random() * 6);
        newShipFirePower.push((Math.random() * 4));
// return newShip[Math.random() * (max -min) + min];
};



// let alien;


// ACCURACY FUNCTION /////////
const newShipAccuracy = (min,max) => {
    min = .6;
    max = .8;
   return (Math.random() *  (max- min)) + min;
} 

// START GAME ////////

const startGame = () => {
    let battleTime = prompt('can you protect the USS Schwarzenegger', 'yes/no');
    if(battleTime === 'yes') {
    fight;
    } else if(battleTime === 'no') {
        alert('come back when your ready');
        return startGame();
    }
        
    }
   

    // END GAME //////
    const end = () => {
    if(shipHealth <= 0){
        alert(startGame());
    } else if(/if all aliens ships are defeated/) {
        alert("The USS is victorious")

    }
};

    

    // / create human ship class

    class HumanShip {
        constructor(hull,firepower,accuracy) {
            this.hull = hull;    
            this.firepower = firepower;
            this.accuracy = accuracy
            
        }
        // USS ATTACKS THE ALIENS ////// solves attack function
        fight = {
        attach(enemy) {
            if(Math.random() < ussSchwarzenegger.accuracy) {
                enemy.hull = enemy.hull - this.firepower
                alert('you hit your target');
    
            } else {
                alert('We missed prepare defense system')
            }
        }
    };
    
    
        
        // CHECK IF ALIEN HAS ATTACKED USS///
        potentialAlienAttack() {
       
            if(Math.random() < alienShip.accuracy) {
                prompt("Our defense systems has been hit. Do want to check your hull?", "yes/no");
                if(prompt === "yes");
                this.checkHealth();
            }       else {
                            if(this.checkHealth() <= 0) {
                                prompt("The USS ship is going down. Do want to continue", "yes/no");
                                // if no end game
                            }
                        }
                    };
            // CHECK USS HEALTH////////
     
            checkHealth() {
                let shipHealth = ussSchwarzenegger.hull - alienShip.firepower;
                if( shipHealth < 20) {
                    alert('your health is now' + shipHealth);
                } else if (shipHealth <= 0) {
                   alert("game over aliens lose")
                }
            }
        }


// ALIEN SHIP CLASS ////////

class AlienSpaceShip {
    constructor(hull,firepower,accuracy) {
        this.hull = hull;
        this.firepower = firepower
        this.accuracy = accuracy
        
    }
    // CHECK IF USS ATTACK ON ALIEN WAS SUCCESSFUL /// ////
    attack() {
    if(Math.random() < ussSchwarzenegger.accuracy) {
        // when the human attacks the alien attack the human back
        alert("We have been hit, we only have" + this.checkAlienHealth() + "left");
                this.alienAttach()
    } else {
        alert("The USS ship has missed");
                this.alienAttack();
            }
        };
        // ALIEN ATTACK ON USS////////

        alienAttack(humans) {
            if(Math.random() < alienShip.accuracy) {
                alert('you hit your target');
    
            } else {
                alert('hhgfdi sjkfhfo?')
            }
        }
    
    // CHECK HEALTH AFTER ATTACK///
    
    checkAlienHealth() {
        let alienHealth = alienShip.hull -= 5;
        if( alienHealth < 3) {
            alert(alienShip.hull)
        } else if(alienShip.hull <= 0) {
            alert("no no no");
        }
    }
}
// create alien Factory class

class AlienFactory {
    constructor(name,hull,firepower,accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.ship = [];
    }
    generateAlienShip () {
        const newAlienShip = new AlienSpaceShip(this.hull, this.firepower, this.accuracy, this.ship.length);
        this.ship.push(newAlienShip);
    
    }
}
startGame();

// // array of 6 ships
// const alienShip = [];
// const random = (min, max,divisor) => {
//     if(!divisor) {
//     return ((Math.floor(Math.random() * max - min) + min)
//     } 
//     return Math.floor(Math.random() * max - min + min])
// }

// [1,2,3,4,5,6].forEach(() => {
//     const alien = new AlienSpaceShip({hull:random(3,6), firepower:random(2,4), accuracy:random(6,8,10)})
//     alienShip.push(alien)
    
// })

//  = new AlienFactory("Axel",3,3,.7);
// const alienShip2 = new AlienFactory("Cando")
// alienShip.generateAlienShip();
// console.log(alienShip);


const ussSchwarzenegger = new HumanShip(20,5,.7)
// ussSchwarzenegger.humanAttack();



// const gameStart = (hero,bad) => {

// while(bad.length > 0 && hero.shipHealth > 0) {
   
// }
// goodGuy.attack(bad[0]);
// if(bad[0].hull <= 0) {
//     alert('you killed an alien')
//     bad.shift()

// } 

// if(bad.length > 0) {
// alert('you still need to fight')
//     bad[0].attack(hero)
//     if(hero.hull <= 0) {
//         alert('you lost')
//         const restart = prompt('Do want to try again?', 'yes/no')
//         if(restart.toLowerCase().trim() === 'no') {
//             alert ('you have failed')
//             return
//         }
//     }
//     if(bad.length < 1) {
//         alert('you won')
//         return
// } else {
//     alert('you lost')
// }

// }
