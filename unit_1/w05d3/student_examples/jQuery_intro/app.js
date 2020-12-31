if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};

const $div = $("<div>");

// Adding a Class to an element

$(() => {
$div.addClass("meat");


const $h3 = $("<h3>").text("Ostrich");



$div.append($h3);



$("body").append($div);

const $kDiv = $('<div>').addClass('dairy');
  $('body').append($kDiv);
  const $kh3 = $('<h3>').text('Yogurt');
  $kDiv.append($kh3);

  const $meat = $(".meat");

  const $divs = $("div");

  console.log($divs);

  // $meat.hide();

  const $img = $("<img>");

  $img.attr("src","https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")

  $("body").prepend($img);

  // dont do this
  // $div[2].children();

  console.log($divs.eq(2).children());

  $divs.eq(2).children().text("Kohlrabi");

  // Create a new $h3 element
// and add some text to it (ie. 'wine' or 'cheese' etc.)

  const $newh3 = $("<h3>").text("Wine");

  // Let's grab the 2nd div
console.log($divs.eq(2).empty());

// $('div').empty(2);
$divs.eq(2).empty();

// Next, append your new h3 element
$divs.eq(2).append($newh3);

// One more! Let's add some CSS on the fly
$("body").css("border","solid", "black", "1em");






});

let shipAttack = 5;

if (ussSchwarzenegger.hull >)
   
