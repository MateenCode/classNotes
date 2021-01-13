// CHALLENGE 1: LONGEST WORD
// Return the longest word or words of a string
// ex. longestWord('Hi there, my name is Mateen') === 'there,' .match(/[a-z0-9]+/g)
function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  const filterArr = sorted.filter((word) => word.length === sorted.length);
  return filterArr.length === 1 ? filterArr[0] : filterArr;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr, len) {
  const chunkedArr = [];
  arr.forEach((each) => {
    const last = chunkedArr[chunkedArr.length - 1];
    return !last || last.length === len
      ? chunkedArr.push([each])
      : last.push(each);
  });
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
  return arrays.reduce((a, b) => [...a, ...b]);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
// Anagrams are word with the same length of charaters and can be rearranged to make new word
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    lookup[str1[i]] ? lookup[str1[i]]++ : (lookup[str1[i]] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    if (!lookup[str2[i]]) return false;
    lookup[str2[i]]--;
  }

  return true;
}

// CHALLENGE 5: Find Number
// Find if the element is present in the array or not.
// ex.
// findNumber([1,2,3,4,5], 1) === YES
// findNumber([1,2,3,4,5], 7) === NO
function findNumber(arr, k) {
  return arr.some((word) => word === k) ? "YES" : "NO";
}

// CHALLENGE 6: Odd Numbers
// find the odd numbers between the 2 given ranges of input field
// ex.
// oddNumbers(2,5) === [3 5]
// oddNumbers(3,9) === [3,5,7,9]
function oddNumbers(l, r) {
  let arr = [];
  for (l; l <= r; l++) {
    arr.push(l);
  }

  return arr.filter((n) => n % 2);
}

// Call Function
const output = isAnagram("anagram", "nagaram");

console.log(output);
