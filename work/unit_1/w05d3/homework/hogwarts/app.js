// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
$(() => {
// Query for your div with the id of container and set it to a variable named $container
  const $container = $('#container');
// /   Create an <h1> element and set it to a variable called $h1
    const $h1 = $('<h1>');
    $h1.text('Hogwarts');
    $container.append($h1)

// YEAR 2//////

    const $h2 = $('<h2>').text('Khoury');
    $container.append($h2);

    const $h3 = $('<h3>').text('Hufflepuff');
    const $h4 = $('<h4>').text('My Dog').addClass('dog');
    const $h42 = $('<h4>').text('Zacto Wand with Lizard Scales');

    $container.append($h3,$h4,$h42);

    // YEAR 3//////
    const $ul = $('<ul>').attr('storage','trunk');
    const $li = $('<li>').text('butter beer');
    const $li1 = $('<li>').text('invisible cloak');
    const $li2 = $('<li>').text('magic map');
    const $li3 = $('<li>').text('time turner');
    const $li4 = $('<li>').text('leash');
    const $li5 = $('<li>').text('berti bott\'s every flavor [jelly] beans');

$li1.addClass('secret');
$li2.addClass('secret');
$li3.addClass('secret');
$li4.addClass('dog');

    $container.append($ul);
    $ul.append($li,$li1,$li2,$li3,$li4,$li5);

    // YEAR 4/////////
const $h5 = $('<h5>').text('Spring 2017');
const $table = $('<table>');
const $tr = $('<tr>');
const $th = $('<th>').text('Day');
const $th1 = $('<th>').text('Classes');
const $tr1 = $('<tr>');
const $td = $('<td>').text('Monday');
const $td1 = $('<td>').text('Herbolog , Divination , History of Magic ')
const $tr2 = $('<tr>');
const $td2 = $('<td>').text('Tuesday');
const $td3 = $('<td>').text('Charms , Quidditch practice , Potions ');
const $tr3 = $('<tr>');
const $td4 = $('<td>').text('Wednesday');
const $td5 = $('<td>').text('Transfigure , Magic , Potions ');
const $tr4 = $('<tr>');
const $td6 = $('<td>').text('Thursday');
const $td7 = $('<td>').text('Herbolog , Divination , History of Magic ');
const $tr5 = $('<tr>');
const $td8 = $('<td>').text('Friday');
const $td9 = $('<td>').text('Charms , Quidditch practice , Potions');

$container.append($h5,$table);
$table.append($tr,$tr1,$tr2,$tr3,$tr4,$tr5);
$tr.append($th,$th1);
$tr1.append($td,$td1);
$tr2.append($td2,$td3);
$tr3.append($td4,$td5);
$tr4.append($td6,$td7);
$tr5.append($td8,$td9);

// YEAR 5//////

$h42.remove();

$li.remove();

const $h43 = $('<h4>').text('Red wand with witch hair');

$h4.append($h43);

$h43.css('color', 'indigo');


$h4.eq(0).detach();

$h3.append($h4);

// YEAR 6/////

const $s = $('.secret');

$s.hide();

$s.delay(2000).hide('slow');

$s.show('slow');

$li4.addClass('cabbage');

$li4.attr('color', 'CHARTREUSE');

$li4.removeClass('cabbage');


// YEAR 7 /////
$h5.text('Fall 2018');


$ul.prepend('<li> Butter Beer</li>');

$ul.attr('storage', 'chest');







});