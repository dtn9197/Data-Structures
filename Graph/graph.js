/**this is an implementation of an undirected graph using adjacencylist
 * with a hash table
 */

 class Graph {
     constructor () {
         this.adjacencyList = {};
     }

     addVertex(vertex) {
         if (!this.adjacencyList[vertex]) 
            this.adjacencyList[vertex] = [];
        else
            console.log("vertex already existed");
     }
     removeVertex(dVertex) {
        var dVertexEdges = this.adjacencyList[dVertex];
        while(dVertexEdges.length > 0) {
            let edge = dVertexEdges.pop();
            this.removeEdge(dVertex, edge);
        }
        delete this.adjacencyList[dVertex];
    }

     addEdge(vertex1, vertex2) {
         this.adjacencyList[vertex1].push(vertex2);
         this.adjacencyList[vertex2].push(vertex1);
     }

     removeEdge(vertex1, vertex2) {
        //  /**Another implementation using filter function */
         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
             v => v!== vertex2
         );

         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v!== vertex1
        );

         
     }
    /**depthFirstSearch recursive solution */
     depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if(!vertex) {return null;}
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        })(start);
        return result;
     }

     depthFirstIterative(start) {
         const visited = {};
         const result = [];
         const stack = [start];
         
         visited[start] = true;
         while(stack.length) {
             let currentVertex = stack.pop();
             result.push(currentVertex);
             this.adjacencyList[currentVertex].forEach(neighbor => {
                 if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                 }
             })
         }
         
         return result;
     }

     breadthFirst(start) {
         const queue = [start];
         const result = [];
         const visited = {};

         visited[start] = true;
         while(queue.length) {
             let currentVertex = queue.shift();
             result.push(currentVertex);
             this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
             });

         }

         return result;
     }
     

    
 }

 var graph = new Graph();

 graph.addVertex("A");
 graph.addVertex("B");
 graph.addVertex("C");
 graph.addVertex("D");
 graph.addVertex("E");
 graph.addVertex("F");

 graph.addEdge("A", "B");
 graph.addEdge("A", "C");
 graph.addEdge("B", "D");
 graph.addEdge("C", "E");
 graph.addEdge("D", "E");
 graph.addEdge("D", "F");
 graph.addEdge("E", "F");