const landScaper = {
    tools: "teeth",
    wallet: 0
}

// console.log(landScaper);

let wallet = () => {
    const workedToday = prompt("did you work today?", "yes/no");
    if(workedToday === "yes") {
        alert("Work four more days to buy scissors");
        landScaper.wallet += 1;
    } else if(workedToday === "no") {
alert("Try again tomorrow");
        }
        prompt("did you work today?", "yes/no")
        if(workedToday === "yes") {
            alert("Work three more days to buy scissors");
            landScaper.wallet += 1;
         } else if(workedToday === "no") {
alert("try again tomorrow");
            }
        prompt("did you work today?", "yes/no")
            if(workedToday === "yes") {
                alert("Work two more days to buy scissors");
                landScaper.wallet += 1;
            } if(workedToday === "no") {
                alert("try again tomorrow")
        }
    
        prompt("did you work today?", "yes/no")
            if(workedToday === "yes")
            landScaper.wallet += 1;
            alert("Work one more days to buy scissors"); 
        if(workedToday === "no") {
        alert("just one more day don't give up now")
        }
        prompt("did you work today?", "yes/no")
            if(workedToday === "yes")
            landScaper.wallet += 1;
            let buyScissors = prompt("Do you want to buy scissors", "yes/no"); 
            if(buyScissors === "yes") 
           if(workedToday === "no") {
        alert("no is not an option")
    } buyScissor();
   
    
}
console.log(landScaper.wallet);

// const buyScissor = () => {
//     for(let i = 0; i <= 25; i +=5) {
//         let workScissors = prompt("did you cut with scissors today", "yes/no"); 
//         if(workScissors === "yes")
//         landScaper.wallet += 5;
//      if(workScissors === "no") {
//             alert("you want that mower right?");
//         } buyMower(); 
        
//         console.log(landScaper.wallet);
// }

// }
// const buyMower = () => {
//     for(let i = 0; i <= 50; i +=50) {
//         let workMower = prompt("did you cut with a mower today", "yes/no"); 
//         if(workMower === "yes")
//         landScaper.wallet += 50;
//         let buyPowerMower = prompt("want to buy a power mower", "yes/no")
//         if(buyPowerMower === "yes")
//         landScaper.wallet -= 50;

       
//         buyPowerMower()
//         if(workMower === "no") {
//             alert("you want that power mower right?");
//         }
//         console.log(landScaper.wallet);
// }
// // // // console.log(buyScissor());
// }
     
// const buyPowerMower = () => {
//     for(let i = 0; i <= 25; i +=100) {
//         let workPowerMower = prompt("did you cut with power today", "yes/no"); 
//         if(workPowerMower === "yes")
//       return prompt("want to hire a staff", "yes/no")
//         landScaper.wallet += 100;
//      if(workPowerMower === "no") {
//             alert("you want easy money right?");
//         } buyWorkers(); 
        
//         console.log(landScaper.wallet);
// }

// }
// const buyWorkers = () => {
//     for(let i = 0; i <= 25; i +=250) {
//         let workPeople = prompt("did your staff today", "yes/no"); 
//         if(workPeople === "yes")
//       return prompt("did your staff cut today", "yes/no")
//         landScaper.wallet += 250;
//      if(workPeople === "no") {
//             alert("you want easy money right?");
//         } winGame(); 
        
//         console.log(landScaper.wallet);
// }

// }
// const winGame = () => {
//     if(wallet === 1000) {
//         return "you win"
//     }


     wallet();


    // for( let i = 0; i <= 5; i++){
    //    if(buyScissors === "yes")
    //     //statements
    //     let buyScissors = prompt("do you want to buy scissors", "yes/no" );
    //     landScaper.wallet += 1;
    //     console.log(landScaper.wallet);
    // }
        //statements
    //     if(wallet >=5){
    //        if(buyScissors === "yes"){
    //       for(i; i <= 25; i+=5){
    //         //   statment
    //         let buyMower = prompt("do you want to buy mower", "yes/no");
    //       }
    //     }
    //     }
       
    //   }


    // const increaseWallet = (worker) => {
    //     if(landScaper.wallet === "teeth") {
    //         worker.wallet = worker.wallet += 1;
    //         return worker.wallet;
    //     }
    //     if(landScaper.tools === "scissors") {
    //         worker.wallet = worker.wallet  += 5;
    //         return worker.wallet;
    //     }
        // if(worker.wallet === "pushLawnMower") {
        //     worker.wallet = worker.wallet += 50;
        //     return worker.wallet;
        // }
        // if(worker.tools === "pushLawnMower") {
        //     worker.wallet = worker.wallet +=
        // }

    // console.log(increaseWallet())
