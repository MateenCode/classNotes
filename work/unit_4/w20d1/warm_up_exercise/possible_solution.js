
const twoSum = (arr, target) => {

    const hash = {};

    //  {2: 0, 7: 1, 11: 2}

    for (let i = 0; i < arr.length; i++) {
        let sub = target - arr[i];

        if (hash[sub]) {
            return [i, hash[sub]]
        }

        hash[arr[i]] = i;
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));