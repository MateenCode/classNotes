console.log('app.js');

$(() => {
  
 $('.outside').on('click', (event) => {
     console.log('Outside target is:', event.target)
     console.log('Outside currentTarget is:', event.currentTarget);
     $(event.currentTarget).css('background-color', 'black')
     return false;
 }) ;
 $('.inside').on('click', (event) => {
    console.log('Inside target is:', event.target)
    console.log('Inside currentTarget is:', event.currentTarget)
    return false;
    // event.stopPropagation();
    //  console.log(event)
 })
 $('body').on('click', (event) => {
    console.log('Body target is:', event.target)
    console.log('Body currentTarget is:', event.currentTarget)
    return false;
     console.log('Body is clicked')
 })
  
});