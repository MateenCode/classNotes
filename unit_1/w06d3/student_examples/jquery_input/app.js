$(() => {

    /** Build a list from input */
    const list = []

    
    $('form').on('submit', (event) => {
        let input = $('#input-box').val();
        list.push(input);
        // console.log(input);
        event.preventDefault()
        /**Reset your input field */
        $(event.currentTarget).trigger('reset');
        render();

       
    });
   
  
  const render = () => {
    //   console.log('list', list);
      $('ul').empty();
      list.forEach((item) => {
          $('ul').append(`<li class="to-do-item"> ${item} </li>`)
          console.log(item)
      }) 
      /**Add an event listener to each item that calls on one single event handler
 */   $('li').on('click', (event) =>{
     $(event.currentTarget).css('text-decoration', 'line-through');
 })
}
})



