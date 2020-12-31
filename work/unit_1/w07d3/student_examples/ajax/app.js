$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault();


    // get input from form//
    let $input = $('#search').val();
    console.log($input);
    // AJAX REQUEST (Asynchronous JavaScript And XML)//
        $.ajax({
            url: `http://www.omdbapi.com/?apikey=53aa2cd6&t=${$input}` 
        }).then(
            (data) => {
        /* data is holding the json object*/
            console.log(data);
            // for img creat new image and give it a attribute//
                $('<img>').attr('src',`${data.Poster}`).appendTo('body');
                $('<h1>').text(data.Title).appendTo('body');
                $('<h2>').text(data.Year).appendTo('body');
                $('<h3>').text(data.Rated).appendTo('body');
            },
            () => {
                console.log('bad request');
            }
        );
        $('#search').val('')
    })
})