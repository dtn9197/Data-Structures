class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        //edge case
        if(!this.head) return undefined;

        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        //edge case for when doing pop on empty list
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        currentHead.next = null;
        this.length--;
        //set tail to null also after shifting the last remaining item
        //optional
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var currentHead = this.head;
        while(counter !== index) {
            currentHead = currentHead.next;
            counter++;
        }
        return currentHead;

    }

    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        //the !! is a workaround to negate the result and return true/false
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        var prevNode = this.get(index - 1);
        var newNode = new Node(val);
        var temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
   
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var previousNode = this.get(index - 1);
        var removedNode = this.get(index);
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
    /**
     * var counter = 0;
     * var currentNode;
     * var nextNode;
     *while(counter !== length - 1)
        currentNode = list.get(index);
        nextNode = currentNode.next;
        currentNode.nextPointer = null;
        nextNode.pointer = currentNode;
        counter++;
    
        var tempHead = this.head;
        this.head = this.tail;
        this.tail = tempHead;
     *      
     */
    reverse(){
        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        var next;
        var prev = null;

        for(var i = 0; i < this.length; i++){
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        return this;
      }
      print(){
          var arr = [];
          var current = this.head
          while(current){
              arr.push(current.val)
              current = current.next
          }
          console.log(arr);
      }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("You");
console.log(list);

