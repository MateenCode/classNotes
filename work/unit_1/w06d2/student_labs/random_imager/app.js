
const makeDiv = () => {
    const $mainDiv = $('<div>').addClass('square').text('Add random image').css('background-color','blue');
    $mainDiv.css('width','100');
    $mainDiv.css('height','100');
    $('body').append($mainDiv);
}

const imageArr = [
'https://www.placecage.com/g/200/300',
'https://www.placecage.com/200/300',
'https://www.placecage.com/c/200/300',
'https://www.placecage.com/140/100',
'https://www.placecage.com/g/140/100',
'https://www.placecage.com/c/460/300'
];



// const randomImage = (imageArr) => {
//     let img =  imageArr[Math.floor(Math.random()* imageArr.length)];
//     return ('im')
// }


$(() => {
    makeDiv()
    randomImage();
    $mainDiv.on('click', randomImage);
})

