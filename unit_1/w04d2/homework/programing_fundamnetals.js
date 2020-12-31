// DRY
Don't repeat yourself. Instead use loops,function etc instead
// KISS
make your code dummy proof or Just Keep It Simple Stupid
// Avoid creating a YAGNI
don't write code that you are not going to need.
// Do the simplest thing that could possibly work
again keep your code as simple as you can and make sure that works
// Don't make me think
for the the third time simple code is the way to go
// Write code for the maintainer
keep your code clear. use psudocode to give the next person notes on what you were thinking
// Single responsibility principle
your function should only do ONE thing
// Avoid premature optimization

// Separation of concerns

// Which ones surprise you (if any)?
// Which one is currently giving you the most struggle?
keep my code dry 

// Commenting Code////////
create a function that holds one parameter
 create 4 variables. assign the value of 
three of them to 0 and the last one to 1
write a while loop that says if c is <= l is true then set n = 0 + 0
set next = to current value plus previous value
set previous value to current value
write if statement  that says current value is a even Number
then add the sum to the current value
then return the even sum

// const f = l => {
   
//     let es = 0, p = 0, c = 1, n = 0
//     while (c <= l) {
//       n = c + p;
//       [c, p] = [n, c]
//       es += (c % 2 === 0) ? c : 0
//     }
//     return es
//   } 
  
//   console.log(f(55))

  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return current;
  }
  // console.log(previous);

//   SECTION 2 Combining Datatypes

