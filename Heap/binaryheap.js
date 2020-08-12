class MaxBinaryHeap {
    constructor() {
        this.heapArray = [41,39,33,18,27,12];
    }
    
    insert(element) {
        this.heapArray.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIndex = this.heapArray.length - 1;
        const child = this.heapArray[childIndex];
        while(childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2);
            let parent = this.heapArray[parentIndex];
            if(child <= parent) break;
            this.heapArray[parentIndex] = child;
            this.heapArray[childIndex] = parent;
            childIndex = parentIndex;

        }
    }

    remove() {
        const max = this.heapArray[0];
        const end = this.heapArray.pop();
        if(this.heapArray.length > 0) {
            this.heapArray[0] = end;
            //bubble down
            this.sinkDown();
        }
        return max;
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
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.heapArray[rightChildIdx];
                if(
                 (swap === null && rightChild > element) ||
                 (swap !== null & rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(55);