const me = {
    firstName: "khoury",
    lastName: "smith",
    age: 30,
    email: "kdot@Smmmm"
}

console.log(me.firstName);

me.age = 1000;
console.log(me.age);

me["place of residence"] = "WestPalmBeach";

console.log(me);

console.log(me["place of residence"]);

const fancyGretting = (yo) => {
    return `Greetings and salutations ${yo.firstName} ${yo.lastName}!`

}
console.log(fancyGretting(me));

// slimer

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }

console.log(monster.name);
monster.type = "big fury creature"
console.log(monster);

monster.age = 6;

console.log(monster);

const adventurer = {
    name: "Sonic",
    hitPoints: 30,
    superPower: "speed"
}

const orge = {
    name: "rash",
    hitPoints: 100,
    superPower: "club"
}

if(orge.hitPoints) {
    let orgeHp = 100
}





