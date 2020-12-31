// The forEach() method executes a 
// provided function once for each array element.

const minions = [
    'bob', 
    'kevin', 
    'stuart', 
    'dave', 
    'jerry', 
    'mark', 
    'tim', 
    'phil', 
    'carl']

//     minions.forEach(find => console.log(find + " here"));

    // MAP

    const capName = minions.map((name) => {
        if(name !== 'kevin') {
            return name.toUpperCase();
            console.log(name + "inside");
        } else {
            return name;
        }
        // return name;
       
    })
    // console.log(capName);

    // Every

const isCapitalized = (minions) => {
    if(capName !== true) {
        return false;
    } else {
        return true;
    }
}
console.log(minions.every(isCapitalized));

// FIND


const actuallyCapitalizedMinion = actuallyCapitalizedMinion.filter((capName) => capName === true );

console.log(actuallyCapitalizedMinion);












