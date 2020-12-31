class Node {
    constructor(data, next = null) {
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // a Linked List starts with a "head" property initialized as null
        this.head = null;
    }
    appendNode(data) {
        // creates a new node with the given data and adds it to back of the list
        // // create a new node
        const newNode = new Node(data);

        if (!this.head) this.head = newNode;
        else {

            let current = this.head;
            while (current.next) {
                current = current.next;
                // find the end of the list (while loop)
                // add the new node to the end of the list (next pointer)
            }
            current.next = newNode;
        }
    }
    prependNode(data) {
        // creates a new node with the given data and adds it to the front of the list
        const newNode = new Node(data);
        const oldHead = this.head;
        this.head = newNode;
        newNode.next = oldHead;
    }
    pop() {
        // removes the last node from the list and returns it
        let current = this.head;
        let walker = this.head.next;
        while (walker) {
            current = current.next;
            walker = walker.next;
        }

        let oldTail = current;
        current.next = null;
        return oldTail;
    }

    removeFromFront() {
        // remove the head node from the list and return it
        // the next node in the list is the new head node
<<<<<<< HEAD
        if(!this.head) {
            return null;
        }

        let currentHead = this.head;
        
        this.head = this.head.next;
        currentHead.next = null;
        return currentHead
        
=======
        if (!this.head) {
            return null;
        }
        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
        return oldHead;
>>>>>>> 94c38cc721e693fd584c238da1e8f001881a8192
    }
    insertAt(X, data) {
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head

        // Create a new Node
        const newNode = new Node(data);
        // if its 0 Replace the old head
        if (X === 0) {
            // make a variable to hold the old head
            const oldHead = this.head;
            // set the head to the new node
            this.head = newNode;
            // set the newnodes next pointer to the old head
            newNode.next = oldHead;
        } else {
            // otherwise
            // walk through the array untill you reach the index
            let walker = this.head;
            let index = 1;
            while (walker.next && index < X) {
                walker = walker.next;
                index++;
            }
            // set new node next pointer to the currents next pointer
            newNode.next = walker.next;
            // set the current next pointer to the new nodes next pointer
            walker.next = newNode;
        }
    }
    removeAt(X) {
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed

        // If there is nothing in the linked list
        if (!this.head) return null;
        // if X is position 0
        if (X === 0) {
            // store thhe next node from the current head
            const nextNode = this.head.next;
            // store the oldHead (to return it)
            const oldHead = this.head;
            // Make the current head the next node
            this.head = nextNode;
            // Remove the next pointer from the old head
            oldHead.next = null;
            // return the oldHead
            return oldHead;
        }

        // loop over the nodes until you reach the given index
        let walker = this.head;
        let index = 1;

        // walk over the list until you hit one less than the current index
        while (walker.next && index < X) {
            walker = walker.next;
            index++;
        }

        // if there is another node after the current node and the current node isnt the last
        if (walker && walker.next) {
            const removedNode = walker.next;
            walker.next = walker.next.next;
            removedNode.next = null;
            return removedNode;
        }

    }
    search(data) {
        // searches the list for a node with the given data
     
      
        

        // if it is found, return the "index" of the node, considering 0 to be the first node
        // // if not, return false
        // let current = this.head;
        // let index = 0;

        // while (current) {
        //     if (current.data === data) {
        //         return index;
        //     }
        //     index++;
        //     current = current.next;
        // }
        // return false;
    }
    sort() {
        // sort the Linked List in ascending order of data values
    }
<<<<<<< HEAD
    size() {
    // track where you currently are
    // variable to count items
    let counter = 0;
    let current = this.head
=======

}
>>>>>>> 94c38cc721e693fd584c238da1e8f001881a8192

    while(current) {
        counter ++
        //move to the next node
        current = current.next
    }
    return counter;
    }
}



const list = new LinkedList();
list.prependNode(5);
list.prependNode(25);
<<<<<<< HEAD
list.prependNode(30);
// list.removeFromFront();
console.log(list.search());

module.exports = {
    Node,
    LinkedList
    
}
=======
list.appendNode(1)
list.appendNode(8)
list.appendNode(9)
console.log(list);
// console.log(list.removeAt(1))
console.log(list.pop());

// console.log(list.search(5))

>>>>>>> 94c38cc721e693fd584c238da1e8f001881a8192
