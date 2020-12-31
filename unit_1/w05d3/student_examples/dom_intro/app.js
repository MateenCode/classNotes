console.log("stranger things are coming")

document.querySelector("h1").innerText = "Welcome to the Upside Down"

// finds first image in the HTML///////
const image = document.querySelector("img")

// console.log(image);

// disapear///
image.style.display =   "none";
// bring it back
image.style.display = "block";
// make grayscale
image.style.filter  = "grayscale(100%)";
// change width
image.style.width = "95%";
image.style.filter = ""

const eggos = document.createElement("img");
eggos.style.width = "100%";

eggos.setAttribute("src","https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg");

document.querySelector(".container").appendChild(eggos);

// console.log(document.querySelectorAll("li"));

document.querySelectorAll("li")[0]. innerText = "Demo Dog Hangout";
document.querySelectorAll("li")[4].style.color = "hotpink"
document.querySelectorAll("li")[3].remove();