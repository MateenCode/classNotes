var distributeCandies = function (candies) {
    let obj = {};

    for (let i = 0; i < candies.length; i++) {
        obj[candies[i]] = i;
    }

    const canHave = candies.length / 2;
    const objectToArray = Object.keys(obj).slice(0, canHave);

    return objectToArray.length;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
