// ID's///////
// #container
// #input-container
// #lists
// #to-do-list

// CLASSES/////
// .to-do-item
// .done-item


// add toDo function
const addToDo = (event) => {
event.preventDefault();
/**stop page from reloading */
/**grab element */
const $inputBox = $('#input-box');

const toDo = $inputBox.val();
/**store toDo data in variable */

/**clear form */
$inputBox.val('');
/**Make div */
const $div = $('<div>').addClass('to-do-item').attr('draggable', 'true');
const $h3 = $("<h3>").text(`${toDo}`)
$div.append($h3);

$('#to-do-list').append($div);

const $button = $('<button>').text('COMPLETE').on('click', moveToDo).appendTo($div);



}
// move toDo function
const moveToDo = (event) => {
    /**Get the Parent of the Button */
    const $todo = $(event.currentTarget).parent();


    
    $todo.removeClass('to-do-item').addClass('done-item').appendTo($('#completed')).children().eq(1).text('REMOVE').on('click', removeTodo);
}

// Remove toDo

const removeTodo = (event) => {
    $(event.currentTarget).parent().remove()
}

$(() => {

$('button').on('click', addToDo);


})
