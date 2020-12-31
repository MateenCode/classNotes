// console.log("test");
// const generateSquares = (numberOfSquares,$container) => {
//     for(let i = 1; i < numberOfSquares; i++) {
//         if(i % 2 === 0) {
//             const $red = $('<div>').addClass('black').css('background-color','black');
//             $container.append($red)
//         } else {
//             const $black = $('<div>').addClass('red').css('background-color', 'red');
//             $container.append($black);
//         }
        
//     };
// };

 




// $(() => {
//      const $container = $('<div>').addClass('container');
//      $container.attr('width',300)
//     $('body').append($container);



//    generateSquares(64,$container);
  
// })


// WITH MADELINE

const $container = $('<div>').addClass('container')

const $row = (numOfRows) => {
    for(let i = 0; i < numOfRows; i++) {
        const $newDiv = $('<div>').addClass("" + i + "")
        if(i % 2 !== 0) {
            for(let j = 0; j < 8; i++) {
                if(j % 2 !== 0) {
                const $red = $('<div>').addClass('red').css('background-color','red');
                $container.append($red)
                   } else {
                    const $black = $('<div>').addClass('black').css('background-color', 'black');
                    $container.append($black);
                }
            //     const $newInnerDiv = $('<div>').addClass('red');
            //     $newDiv.append($newInnerDiv)
            }
            
        }
        // const innerDiv = "";
        for(let j = 0; j < 8; i++) {
            if(j % 2 === 0) {
            const $red = $('<div>').addClass('red').css('background-color','red');
            $container.append($red)
               } else {
                const $black = $('<div>').addClass('black').css('background-color', 'black');
                $container.append($black);
            }
        //     const $newInnerDiv = $('<div>').addClass('red');
        //     $newDiv.append($newInnerDiv)
        }
        $container.append($newDiv)

    }

}




$(() => {
$('body').prepend($container)
$row(8);

})