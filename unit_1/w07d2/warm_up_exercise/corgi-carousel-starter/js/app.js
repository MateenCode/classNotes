console.log('corgi carousel connected to app.js!');
$(() => {

/*Add next button with click event*/

// variable to hold image to get length

const numOfImages = $('.carousel-images').children().length - 1;
/**image counter */
let currentImgIndex = 0

// NEXT BUTTON////////
$('.next').on('click', () => {
    /*hide current image*/
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
    /*Ternary operator*/
(currentImgIndex < numOfImages) /*if is ?>>*/? currentImgIndex++ /*else is : >>*/:currentImgIndex = 0;

    /*show next image*/
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');

})
// PREVIOUS BUTTON//////
$('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
    if(currentImgIndex > 0) {
    currentImgIndex--;
    } else {
        currentImgIndex = numOfImages;
    }
     /*show next image*/
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    })


})