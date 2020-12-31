const isAlienSorted = (words, order) => {

    compare: for (let i = 0; i < words.length - 1; i++) {
        let firstWord = words[i];
        let secondWord = words[i + 1];

        for (let x = 0; x < Math.max(firstWord.length, secondWord.length); x++) {
            if (firstWord[x] !== secondWord[x]) {
                if (order.indexOf(firstWord[x]) > order.indexOf(secondWord[x])) {
                    return false;
                }
                continue compare;
            }
        }

        if (firstWord.length > secondWord.length) return false;
    }

    return true;
}

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));