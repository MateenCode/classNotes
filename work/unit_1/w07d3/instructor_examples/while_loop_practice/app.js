$(() => {

    // ------------------------
    // 1. Example of While Loop Use Case
    // ------------------------

    // const randomNumber = Math.floor(Math.random() * 4);
    // let userInput;

    // while (userInput !== randomNumber) {
    //     // userInput = parseInt(prompt('guess a number', 0));
    // }


    // ------------------------
    // 2. Build Pizza Order
    // ------------------------

    /*----- constants && cached element references-----*/
    const $start = $('#start');
    const $container = $('.container');

    // /*----- app's state (variables) -----*/
    let currentToppings = [];
    let userInput;
    let userTopping;

    // /*----- functions -----*/
    const promptUser = () => {

        // while (userInput !== "n") {
        //     /// see if the user would like add a topping
        //     userInput = prompt("Do you want to add a topping", "y/n");
        //     // if they do 
        //     if (userInput !== "n") {
        //         // see what topping they want to add
        //         userTopping = prompt('What topping do you want to add', 'ie. mushrooms');
        //         // push that topping to an array to store it
        //         currentToppings.push(userTopping);
        //     }
        // }

        // // add toppings to the dom
        // addToppings();
    }

    const addToppings = () => {

        // const mapToppings = currentToppings.map((el) => {
        //     return `<li> ${el} </li>`
        // });

        // $($container).append(`<ul> ${mapToppings} </ul>`);

    }

    // /*----- event listeners -----*/
    $($start).on('click', promptUser);

})