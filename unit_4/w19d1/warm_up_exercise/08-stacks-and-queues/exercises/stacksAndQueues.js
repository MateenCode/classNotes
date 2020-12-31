// STACK IMPLEMENTATION
class Stack {
  constructor() {
    this.items = []
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
function bracketMatching(input) {
let char = input.split('')
let newStack = new Stack()
for(let i = 0; i < char.length; i++) {
  if(char[i] === '(' || char[i] === '{'|| char[i] === '[' ) {
    newStack.push(char[i])
    console.log(newStack)
  }
 
  
// if the input has a character in it skip it
// else if input has a open ( or { push it into the stack

}
}
bracketMatching('abc(123)!{def}456:D')

module.exports = {
  bracketMatching
}