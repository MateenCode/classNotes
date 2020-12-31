# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Linked Lists

| Objectives |
| :--- |
| Explain the components necessary for a functional linked list |
| Use a linked list to store and retrieve data |
| Describe the difference between Javascript and lower-level language linked lists |
| Discuss the advantages and disadvantages of a singly linked list |

### Motivation (Why?)
Linked lists are the base data structure that many more complex data structures use.  If one has a solid understanding of linked lists then stacks, queues, hashtables, and binary trees should be relatively easy to learn and synthesize.


## What are linked lists?

![linked list image from wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/640px-Singly-linked-list.svg.png)

Linked lists store sequential (ordered) data in a series of "nodes".  Each node in a linked list contains some value and a reference or "pointer" to the next node.

The very last node of a linked list, called the tail, has a null next node because nothing comes after it.  (Most singly linked lists don't store a tail pointer, but ours is fancy.)

<img src="https://cloud.githubusercontent.com/assets/3254910/14589131/8456511c-048f-11e6-9ba3-1069f09591cd.jpg" width="300px" alt="wiggle snake toy">


## Singly Linked Lists and Arrays

#### So... liked lists are like arrays?

A little! But not 100%.  Let's step back and take a closer look at arrays. Their true nature may surprise you!

Arrays store data in one continuous block of computer memory.  The computer sets aside just enough memory when the array is created. You can think of your computer's memory as a giant city full of identical buildings. Using an array is like renting out a bunch of adjacent buildings.


![cartoon city skyline](https://cloud.githubusercontent.com/assets/3254910/14589266/b990b3a6-0492-11e6-922e-46cf0517fa64.png) 


This makes it really convenient to find all the data in an array. Your computer knows where each piece of data is stored because it knows where your array's territory starts and how big each building is.  Your computer can move from one location in the array to the next about as easily as you go down the street.

On the other hand, your computer needs to know from the start exactly how many buildings you need -- how big the array will be. And, if you ever need more space, your computer has to find a new continuous block of empty buildings (free memory) that's big enough to fit the array.

**But wait! You've never had to worry about array size...**

Totally! In lower level computer programming languages like C, you *would* have to. JavaScript and Python handle array sizing and resizing for you efficiently. That's one of the reasons we love higher level programming languages.

But! in interviews it's good to know what's happening in the background, because that's the biggest difference between arrays and linked lists.

#### Array / Linked List Tradeoff

Creating a linked list is a bit like renting buildings all around the city, wherever it's convenient.  Your computer knows the address of the headquarters (the head of the linked list), and each building manager has the address of the next building you own.


<img height="350px" alt="academy of arts university map" src="https://cloud.githubusercontent.com/assets/3254910/14611060/52180c84-0545-11e6-9323-d33706d377e5.png">


**Linked lists don't need to be resized with one giant block of memory;** they can grow with pointers to other parts of the computer's memory.  You don't have to find continuous free space.

**It's easier to insert into the middle of a linked list**, because with an array you'd need to move every element after the insertion point over by one. It's easier with linked lists, as you'll see in the challenges.

On the other hand...

**You can't quickly access a particular node in a linked list, like you can with array indices.** You have to start with the head and move sequentially.

**Linked lists take up a bit more space** because in addition to storing the actual data, you have to store the pointers.  (You have to hire building managers to keep track of where the next address is!)

**It can take more time to access a full linked list,** because the data living in different places can't just be read as a continuous chunk.  You have to travel around the city to visit all of your buildings.



## Applications

* **file systems** Files are often stored in chunks, but when files grow large they may not fit in their original chunk. You can think of a file as a series of nodes with chunks of data and links to the next section of the file. (They're often actually implemented with a more complex related data structure called a B-tree.)

* **implementing stacks and queues** Linked lists are a natural choice for these data structures, which need fast access to beginning or end of a list.


## Further Reading

The article below goes step by step on creating a linked list and inserting items into it.  It might spoil some of today's solutions, but you can use this as a guide when dealing with linked lists and their properties:

<a href="http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392" target="_blank">Linked List Guide</a>
