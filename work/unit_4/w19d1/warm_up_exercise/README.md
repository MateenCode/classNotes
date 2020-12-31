[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# Stack

In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations:
- push, which adds an element to the collection, and
- pop, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack. 

The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.

You can think of a stack like a physical stack of books: to add a new book to the stack you simply place the book on top, and then when you want to make the stack smaller you start removing books from the top of the stack.

## Stack methods
- pop (remove top element)
- push (append new element)
- peek (return the top element but don't pop it from the Stack)
- isEmpty(return True or False) Used to check whether the stack contains items
- clear (remove all elements from the Stack, leaving an empty Stack)

![Stack](stack.jpg)

## Stack - Abstract Data Type or Data Structure?
In an Abstract Data Type (or ADT), there is a set of rules or description of the operations that are allowed on data. It is based on a user point of view i.e., how a user is interacting with the data. However, we can choose to implement those set of rules differently.

A stack is definitely an ADT because it works on LIFO policy which provides operations like push, pop, etc. for the users to interact with the data. A stack can be implemented in different ways and these implementations are hidden from the user. For example, as stated above, we can implement a stack using a linked list or an array. In both the implementations, a user will be able to use the operations like push, pop, etc. without knowing the data structure used to implement those operations.

However, when we choose to implement a stack in a particular way, it organizes our data for efficient management and retrieval. So, it can be seen as a data structure also.

Till now, we know about stacks and operations involved with a stack. Let’s discuss the applications of a stack.

## Applications of Stack data structure
- Using the back and forward buttons in your browser
- Undo/redo
- Call stack
- Expression evaluation
- Backtracking (game playing, finding paths, exhaustive searching)
- Memory management, run-time environment for nested language features.

## Basic features of Stack
- Stack is an ordered list of similar data type.
- Stack is a LIFO(Last in First out) structure or we can say FILO(First in Last out).
- push() function is used to insert new elements into the Stack and pop() function is used to remove an element from the stack. Both insertion and removal are allowed at only one end of Stack called Top.
- Stack is said to be in Overflow state when it is completely full and is said to be in Underflow state if it is completely empty.
