# LINKED LISTS



## Lesson Objectives

1. Explain what a Linked list is
1. Demonstrate what a link does
1. Give an example of what a link list implementation can do
1. Explain why we would use a Linked List

## Why Linked Lists?

1. You need to insert/delete in constant time.
1. You don't need random access to elements
1. You want to be able to insert elements into any position in the list.
1. In Javascript, they essentially take away functionality from an array but in other languages you may want to use a linked list since you may need to declare an array size unlike in Javascript and with a linked list you dont need to declare a size.

## Real World Example
1. One real world example of a linked list in use would be something like Photoshop where you can undo and redo things you have done. 
1. Imagine you make a game and store all of the levels in an array, you would be able to randomly access the final level and skip the rest of the game. With a linked list you have to traverse through all of the levels or "Nodes" to get to the final level.
   

## What is a Linked List?

1.  A simple often used data structure that has 3 necessary properties
1.  A head
1.  A tail
1.  A size or length property
    

## Linked List Architecture

1.  Linked List consist of element known as nodes
1.  Each node points to the next node in the list if there is no next node it point to null
1.  Nodes have one property known as value or data and contain some primitive value or object value



# Linked List Constructor
 <table>
   <thead>
     <tr>
       <td>Function</td>
       <td>Arguments</td>
       <td>Returns</td>
       <td>Directions</td>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>constructor</td>
       <td>-</td>
       <td>(LinkedList)</td>
       <td>
         Create a class to represent a linked list.  When created,
         a linked list should have *no* head node associated with it.
         The LinkedList instance will have one property, 'head', which
         is a reference to the first node of the linked list.  By default
         'head' should be 'null'.
       </td>
     </tr>
   </tbody>
 </table>
    

##### Example:

```javascript
class LinkedList {
  constructor() {
    this.head = null
  }
}

const list = new LinkedList()
list.head // null
```

# Node Constructor

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>constructor</td>
    <td>(Data, Node)</td>
    <td>Node</td>
    <td>
      Creates a class instance to represent a node.  The node should
      have two properties, 'data' and 'next'.  Accept both
      of these as arguments to the 'Node' constructor, then
      assign them to the instance as properties 'data' and 'next'.
      If 'next' is not provided to the constructor, then default its
      value to be 'null'.
    </td>
  </tr>
  </tbody>
</table>

##### Example:

```javascript
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

const n = new Node('Hi')
n.data // 'Hi'
n.next // null
const n2 = new Node('There', n)
n2.next // returns n
```

# Insert First

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>insertFirst</td>
    <td>(data)</td>
    <td>-</td>
    <td>
      Creates a new Node from argument 'data' and assigns the resulting
      node to the 'head' property.  Make sure to handle the case in which
      the linked list already has a node assigned to the 'head' property.
    </td>
  </tr>
  </tbody>
</table>

##### Example:

```javascript
  // Goes inside of Linked Lists
  insertFirst(data){
    this.head = new Node(data, this.head)
  }

const list = new LinkedList()
list.insertFirst('Hi There') // List has one node
```

# Size

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>size</td>
    <td>-</td>
    <td>(integer)</td>
    <td>
      Returns the number of nodes in the linked list.
    </td>
  </tr>
  </tbody>
</table>

##### Example:

```javascript
  size() {
    let counter = 0
    let node = this.head
    while (node) {
      counter++
      node = node.next
    }
    return counter
  }


const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.size(); // returns 3
```

# Get First

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>getFirst</td>
    <td>-</td>
    <td>(Node)</td>
    <td>
      Returns the first node of the linked list.
    </td>
  </tr>
  </tbody>
</table>

##### Example:

```javascript
  getFirst() {
    return this.head;
  }


const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.getFirst(); // returns Node instance with data 'a'
```

# Get Last

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      getLast
    </td>
    <td>
      -
    </td>
    <td>
      (Node)
    </td>
    <td>
      Returns the last node of the linked list
    </td>
  </tr>
  </tbody>
</table>

##### Example:

```javascript
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }


const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.getLast(); // returns node with data 'a'
```

# Clear

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      clear
    </td>
    <td>
      -
    </td>
    <td>
      -
    </td>
    <td>
      Empties the linked list of any nodes.
    </td>
  </tr>
  </tbody>
</table>

##### Example:

```javascript
  clear() {
    this.head = null;
  }

const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.clear();
list.size(); // returns 0
```

