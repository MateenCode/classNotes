//document ready - do not load/run until html is fully loaded
$( ()=> {

  //select buttons
  const plusBtn = $( ".plus" );
  const minusBtn= $( ".minus" );

  //add card on plus button click
  plusBtn.on( 'click', addCard );

  //remove card on minus button click
  minusBtn.on( 'click', removeCard );

}); // closes document ready


const addCard = () => {

  //select container to add cards
  const $flexContainer = $( '.flex-container' );

  //determine number of cards already in container
  const numberOfCards = $flexContainer.children().length;

  //limit total number of cards that can be added
  if ( numberOfCards < 26 ){

    //determine letter based on number of cards
    let letter = String.fromCharCode( 65 + numberOfCards );

    //create a card with the letter
    const $card = $( '<div>' ).addClass( 'card' ).text( letter );

    //add an event listner/handler that toggles the class selected for the card that is clicked
    $card.on( 'click', ( e ) => {
      $( e.target ).toggleClass( 'selected' );
    });

    //append the card to the container
    $flexContainer.append( $card );
  }
}

const removeCard = () => {

      //select flex-container
      const $flexContainer = $( '.flex-container' );

      //remove the last card
      $flexContainer.children().last().remove();

};//closes minusBtn function
