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

}

module.exports = {
  bracketMatching
}