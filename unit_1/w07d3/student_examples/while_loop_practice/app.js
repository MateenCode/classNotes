$(() => {

    // ------------------------
    // 1. Example of While Loop Use Case
    // ------------------------

    // const randomNumber = Math.floor(Math.random() * 4);
    // let userInput;
    // while (userInput !== randomNumber) {
    //     userInput = parseInt(prompt('guess a number', 0));
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
       
        while(userInput !== 'n') {
             ///see if user wants to add toping
             userInput = prompt('Do you want to add a topping', 'y/n');
             if(userInput === 'y') {
                 userTopping = prompt('what topping do you want', 'ie. mushrooms');
                 currentToppings.push(userTopping);
             }
// if they see what topping and push to topping array
        }
// add topping function///
    addToppings()
        

    }

    const addToppings = () => {
        
        const mapToppings = currentToppings.map((element) => {
            return `<li> ${element} </li>`
        });
        $container.append(`<ul> ${mapToppings} </ul>`);


    }

    // /*----- event listeners -----*/
    $($start).on('click', promptUser);

})