console.log('corgi carousel connected to app.js!');

// jQuery onLoad
$(() => {

    // variable to hold out images to get the length
    const numOfImages = $('.carousel-images').children().length - 1;
    // image counter
    let currentImgIndex = 0;

    $('.next').on('click', () => {
        // hide the current image
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');

        (currentImgIndex < numOfImages) ? currentImgIndex++ : currentImgIndex = 0;

        // show the next image
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
    })


    $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');

        if (currentImgIndex > 0) {
            currentImgIndex--;
        } else {
            currentImgIndex = numOfImages;
        }

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');

    })

});