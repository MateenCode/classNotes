console.log('shape clicker js file is connected');

//remember to set up your window onload!
const shapeOrder = [
"circle",
"square",
'triangle-down',
'octagon'
    

]

let counter = 0;
$(() => {
/* Store variable*/
// click triangle and turn into circle
const turnCircle = (event) => {
    const $shape = (event.currentTarget);

    for(let i = 0; i<shapeOrder.length; i++) {
        if($shape.hasClass(shapeOrder[i].shape)) {
            $shape.css(shapeOrder[i].colorSource,'')

        }
    }

    $shape.removeClass();
    $shape.addClass(shapeOrder[counter].shape);

    if(counter < shapeOrder.length-1) {
        counter++
    } else {
        counter = 0;
    }
}

// event handlers /

$('shape').on('click', turnCircle);

turnCircle();



})
