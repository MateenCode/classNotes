// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$( () => {
  /*Grabs Elements*/
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close')

  // Event Handlers////
/** Create an event handler to display the modal. This needs to be placed above the listener. */
 
const openModal = () => {
  setTimeout(openModal,5000)
  $modal.show();
}
const closeModal = () => {
  $modal.hide();
}


  // Event listeners////

  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);
  

});

 
 




