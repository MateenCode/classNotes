const landScaper = {
    tools: "teeth",
    wallet: 0
}

//  if the only tools you have are your teeth then buy a pair of scissors for 5 dollars
// you can buy only pair of scissors assuming if you have 5 dollars
let wallet = () => {
    const workedToday = prompt("did you work today?", "yes/no");
    workedToday = workedToday.toLocaleLowerCase();
    if(workedToday === "yes") {
        console.log("Work four more days to buy scissors");
        landScaper.wallet += 1;
        prompt("did you work today?", "yes/no")
        if(workedToday === "yes") {
            console.log("Work three more days to buy scissors");
            landScaper.wallet += 1;
     console.log(landScaper.wallet);   
    } else if(workedToday === "no") {
        console.log("Keep working")
        getScissors();
    
    }
}
// // console.log(money()
wallet();

// let getScissors = () => {
//     console.log("test");
// }
// console.log("connected");
    
// the landscaper can cut as many yards he he can and make 5 dollars a
// start game prompt function

//  always check to see if they want to but scissors. so everything you cut

