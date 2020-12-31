console.log("Hello World");

$(() => {
console.log($("body"));

const $div = $("<div>");


const $h1 = $("<h1>").text("Trois couleurs:rouge,blanc,et blue");


$div.addClass("couleur");
$div.addClass("couleur");
$div.addClass("couleur");

$("body").append($div);
$div.append($h1);



});