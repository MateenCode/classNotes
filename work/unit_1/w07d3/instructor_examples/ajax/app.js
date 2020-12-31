
// jQuery Onload
$(() => {


    $('form').on('submit', (evt) => {
        evt.preventDefault();

        // get input from form and store as variable
        let $search = $('#search').val();
        console.log($search);

        // ajax request
        $.ajax({
            url: `http://www.omdbapi.com/?apikey=53aa2cd6&s=${$search}`
        }).then(
            (data) => {
                // data is holding the json object from omdb
                console.log(data);
                // $('<h1>').text(data.Title).appendTo('body');
                // $('<h2>').text(data.Year).appendTo('body');
                // $('<h3>').text(data.Rated).appendTo('body');
            },
            () => {
                console.log('bad request')
            }
        );

        $('#search').val('');

    })

})