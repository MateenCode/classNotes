
$(() =>{
/*players*/
let player = "X";
let player2 = "O";

let turn = 1;
let moves = 0;

// MAKE BOARD FUNCTION///
const board = (event) => {
    for(let i = 0; i < 1; i++) {
        const $gameBoard = $('<div>').addClass('board');
        for(let i = 0; i < 9; i++) {
const $squares = $('<div>').addClass('square').attr('id', i).appendTo($gameBoard);

$squares.on('click', (event) => {
    moves++;

    if(turn === 1) {
        event.target.innerHTML = player;
        event.target.style.color ='red'
        turn++
    } else {
        event.target.innerHTML = player2;
        event.target.style.color = 'green'
        turn--
    }
    
});
        }

        $('body').append($gameBoard);
          
    }
    const $button = $('<button>').text('RESET').appendTo($('body'));
   
}

board()

})