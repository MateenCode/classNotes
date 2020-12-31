// CREATE HUMAN SPACESHIP CLASS/////


class Ship {
    constructor(hull,firepower,accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    /*CREATE ATTACK ALIEN METHOD*/
    attack(enemy) {
        if(Math.random() < this.accuracy) {
            enemy.hull = enemy.hull - this.firepower
        }
    }
}

/*CREATE USS SCHWARZENEGGER SHIP */
const ussSchwarzenegger = new Ship(20, 5, .7);
/*CREATE EMPTY ARRAY FOR ALIEN SHIPS  */
let alienShips = [];
const random = (min,max,divisor) => {
    if(!divisor) {
        return Math.floor((Math.random() * (max - min)) + min);
    }
    if(divisor) {
        const round = Math.floor((Math.random() * (max - min)) + min);
        return parseFloat((round/divisor).toFixed(1), 10)
    }
}
/* MAKE SHIPS FOR SIX ALIENS */
const makeShips = (hero,foe) => {
    [1,2,3,4,5,6]. forEach(() => {
        const alien = new Ship(random(3,6), random(2,4), random(6,8,10))
        foe.push(alien);
    })
    hero.hull = 20
    return foe;
}
alienShips = makeShips(ussSchwarzenegger,alienShips);
console.log(alienShips);

// IF THE ALIEN SHIP ARRAY HAS SHIPS AND MY HEALTH IS NOT ZERO THEN ATTACK ALIEN SHIP//////
const gameTime = (hero,foe) => {
    while(foe.length > 0 && hero.hull !==0) {
        alert('Target acquired, attack initiated on the alin');
        hero.attack(foe[0])
        if(foe[0].hull <= 0) {
            alert('Target destroyed')
            foe.shift();
            if(foe.length >= 1) {
                alert(`new foe spaceship has a hull of ${foe[0].hull} and there are still ${foe.length -1} alien ships left`);
            }
        }
    if(foe.length > 0) {
        alert('Enemy ships are still here');
        alert(`current foe ships hull is at ${foe[0].hull} and there are still ${foe.length -1} alien ships left `);
        foe[0].attack(hero);
        alert(`The USS still ${hero.hull}% health left`)
    }
}
    if(foe.length < 1) {
        alert('You win');
        const startOver = prompt('can you protect the USS Schwarzenegger again', 'yes/no', 'yes')
        if(startOver.toLowerCase() === 'no') {
            alert('I guess saving the world more than once is above you');
            return
        } else {
            foe = makeShips(hero,foe)
            gameTime(hero,foe)
            return
        }
        // return
    } else if(hero.hull <= 0) {
        alert('The aliens  have defeated us')
        return
    } else {
        foe =makeShips(hero,foe)
        gameTime(hero,foe)
        return
    }

}

gameTime(ussSchwarzenegger,alienShips);