/**This algorithm utilizes a weighted graph and a priority queue
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



class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    Dijkstra(start, finish) {
        const pQueue = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        //return path of pQueue at the end
        let path = [];

        //build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                pQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                pQueue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        //as long as there is something to visit
        while(pQueue.heapArray.length) {
             smallest = pQueue.dequeue().val;
            if(smallest === finish) {
                //we are done
                /**build up path to return
                 * loops through the previous table to construct a
                 * shortest path
                 */
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                //break out of the outer while loop
                break;
            }

            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let newDistance = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if(newDistance < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = newDistance;
                        //updating previous - how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        pQueue.enqueue(nextNeighbor, newDistance);
                    }
                }
            }

        }
        return path.concat(smallest).reverse();

    }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);