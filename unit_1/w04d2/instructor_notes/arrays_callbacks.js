const iceCreams = [
    {
        flavor: 'Vanilla',
        price: 2
    },
    {
        flavor: 'Chocolate',
        price: 2
    }];

const updatedIceCreams = iceCreams.map((obj) => {
    return obj.flavor + " Ice Cream";
})


const numberArr = [2, 4, 6, 8, 10];

const newNumArray = numberArr.map((num) => {
    return num * 2;
})

console.log(newNumArray);