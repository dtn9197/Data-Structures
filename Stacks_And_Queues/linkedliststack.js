class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //add to beginning
    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size ;
    }
    //remove from beginning
    pop() {
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
var stack = new Stack()
stack.push("first");
stack.push("second");
console.log(stack);