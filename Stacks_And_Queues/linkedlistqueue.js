class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //add to the end
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;

        }
        this.size++;
        return this.size;

    }
    //remove from beginning
    dequeue() {
        if(!this.first) return null;
        var removedNode = this.first;
        //edge case for only 1 item, remove the last node reference
        if(this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next
        this.size--;
        return removedNode.value;

    }
}