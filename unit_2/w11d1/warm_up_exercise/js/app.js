const arr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

let row = 0;
let column = 0

for(let i = 0; i < arr.length; i++) {
    row = arr[i].reduce((a,b) => a + b) > row ? 
    arr[i].reduce((a,b) => a + b) : row
    // return Math.max(a,b);
    console.log(Math.max(...arr[i]));
}

for (let i = 0; i< arr.length; i++) {
    column += arr[i]
    console.log(column);

}