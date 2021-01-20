// create map function

const myMap = (arr, func) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
};

// console.log(myMap([1, 2, 3, 4, 5], (item) => item + 1));

// create filter function
const myFilter = (arr, func) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func) {
      result.push(func(arr[i]));
    }
  }

  return result;
};

console.log(myFilter([1, 2, 3, 4, 5], (item) => item % 2));

// create reducer function

const reducer = () => {};
