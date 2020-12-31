class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    appendNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let walker = this.head;
            while (walker.next) {
                walker = walker.next;
            }
            walker.next = newNode;
        }
    }
    prependNode(data) {
        const newNode = new Node(data);
        const oldHead = this.head;
        this.head = newNode;
        newNode.next = oldHead;
    }
    pop() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            const oldHead = this.head;
            this.head = null;
            return oldHead;
        } else {
            let walker = this.head;
            while (walker.next.next) {
                walker = walker.next;
            }
            const result = walker.next;
            walker.next = null;
            return result;
        }
    }
    removeFromFront() {
        if (!this.head) {
            return null;
        }
        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
        return oldHead;
    }
    insertAt(X, data) {
        const newNode = new Node(data);
        if (X === 0) {
            const oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
        } else {
            let walker = this.head;
            let index = 1;
            while (walker.next && index < X) {
                walker = walker.next;
                index++;
            }
            newNode.next = walker.next;
            walker.next = newNode;
        }
    }
    removeAt(X) {
        if (!this.head) {
            return null;
        } else if (X === 0) {
            const oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = null;
            return oldHead;
        }
        let index = 1;
        let walker = this.head;
        while (walker.next && index < X) {
            walker = walker.next;
            index++;
        }
        //walker be the node BEFORE the one to remove
        if (walker && walker.next) {
            const targetNode = walker.next;
            walker.next = walker.next.next;
            targetNode.next = null;
            return targetNode;
        }
    }
    search(data) {
        if (!this.head) {
            return false;
        }
        let walker = this.head;
        let index = 0
        while (walker.next) {
            if (walker.data === data) {
                return index;
            } else {
                index++;
                walker = walker.next;
            }
        }
        return walker.data === data ? index : false
    }
    sort() {
        if (!this.head) {
            return this;
        }
        let swapped = false;
        let walker;
        let preWalker;
        while (true) {
            walker = this.head;
            while (walker && walker.next) {
                if (walker.next.data < walker.data) {
                    swapped = true;
                    if (walker == this.head) {
                        let first = this.head;
                        let second = this.head.next;
                        first.next = second.next;
                        second.next = first;
                        this.head = second;
                    } else {
                        let first = walker;
                        let second = walker.next;
                        let third = walker.next.next;
                        first.next = third;
                        second.next = first;
                        preWalker.next = second;
                    }
                }
                preWalker = walker;
                walker = walker.next;
            }
            if (!swapped) {
                return this;
            } else {
                swapped = false;
            }
        }
    }
}

module.exports = {
    Node,
    LinkedList
}