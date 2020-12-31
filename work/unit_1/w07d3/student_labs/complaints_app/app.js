$(() => {
    // $('form').on('submit', (event) => {
    //     event.preventDefault();
    //     let $input = $('#search').val();

    


    $.ajax({
        url:`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD`,
        data: {
            '$limit': 10
        }
       
        
    }) .then(
        (data) => {
            for(let i = 0; i < data[0].complaint_type; i++) {
                console.log(data)

            }
            // $('<h1>').text(`${data[0].complaint_type}`).appendTo('body')
           
        }
        )
    // })

})