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

    
 }

 var graph = new Graph();

 graph.addVertex("A");
 graph.addVertex("B");
 graph.addVertex("C");
 graph.addVertex("D");
 graph.addEdge("B", "C");
 graph.addEdge("B", "A");
 graph.addEdge("C", "A");

