/**this priorty queue is a Min Heap, lowest numbers sit at the top and removed first
 * same logic/code as the max Binary Heap implementation, except changing the
 * comparion operators in some methods
 * The nodes in the heapArray is being compared using a different "priority" value as opposed
 * to its main value
 * this prioity queue does not guarantee order between siblings
 */

class PriorityQueue {
    constructor() {
        this.heapArray = [];
    }
    
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.heapArray.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIndex = this.heapArray.length - 1;
        const child = this.heapArray[childIndex];
        while(childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2);
            let parent = this.heapArray[parentIndex];
            if(child.priority >= parent.priority) break;
            this.heapArray[parentIndex] = child;
            this.heapArray[childIndex] = parent;
            childIndex = parentIndex;

        }
    }

    dequeue() {
        const min = this.heapArray[0];
        const end = this.heapArray.pop();
        if(this.heapArray.length > 0) {
            this.heapArray[0] = end;
            //bubble down
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.heapArray.length;
        const element = this.heapArray[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.heapArray[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.heapArray[rightChildIdx];
                if(
                 (swap === null && rightChild.priority < element.priority) ||
                 (swap !== null & rightChild.priority < leftChild.priority)
                 ) {
                    swap = rightChildIdx;
                 }
            }

            if(swap === null) break;

            this.heapArray[idx] = this.heapArray[swap];
            this.heapArray[swap] = element;

            idx = swap;
        }
    }




}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gun shot wound", 5);
ER.enqueue("high fever", 2);