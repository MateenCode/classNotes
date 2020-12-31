$(() => {
    const $square = $('div');


const changeColor = (event) => {
    $(event.currentTarget).addClass('pink')

}  

const makeDiv = () => {
    const $user = $("#input-box").val();
    for(let i = 0; i < $user; i++) {
        const $div = $('<div>').addClass('square');
        $('body').append($div);
    }
}
$('button').on('click', makeDiv)


// for(let i = 0; i < 1000; i++) {
//     const $div = $('<div>');
//     $div.addClass('square')
//     $div.on('mouseover', changeColor);
//     $('body').append($div)
// }









})