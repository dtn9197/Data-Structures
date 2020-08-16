/**a very simple priority queue
 * enqueue is O(nlogn) because of sorting
 */

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

var queue = new PriorityQueue();
queue.enqueue("hi", 5);
queue.enqueue("sdfds", 4);
queue.enqueue("123", 52);
queue.enqueue("hhgghfi", 1);

console.log(queue.values);

