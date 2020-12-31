let cartTotal = 16.07;
let roundedUpCart = Math.ceil(cartTotal);
let donation = (roundedUpCart - cartTotal).toFixed(2);
console.log(donation);