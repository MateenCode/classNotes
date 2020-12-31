$(() => {

    const changeColor = (event) => {
        $(event.currentTarget).addClass('pink');
    }

    for (let i = 0; i < 1000; i++) {
        const $div = $('<div>').addClass('square');
        $div.on('mouseover', changeColor);
        $('body').append($div);
    }

})