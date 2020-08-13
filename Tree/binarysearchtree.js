class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value) {
        if(this.root === null) return false;
        var current = this.root
           
        //current is to make sure it doesn't have infinite loop if there is no node
        //eventually current will be null because it hits end point
        while(current) {
            if(value < current.value) {
                current = current.left
            } else if(value > current.value) {
                current = current.right;
            } else {                    //use case for when node is found, current.value = value
                // found = true;
                return current;
            }  
        }
        return false;
    }
    /**
     * call find(value)
     */
    remove(value) {
        if(!this.root)
            return false;
        
        var currentNode = this.root;
        var parentNode = null;
        var nodeFound = false;
        while(!nodeFound) {
            if(value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                nodeFound = true;
            }
        }
       /**if node is leaf */
        if(!currentNode.left && !currentNode.right) { 
            if(currentNode < parentNode)
                parentNode.left = null;
            else
                parentNode.right = null;
        }
         /**if node has left item */
        else if(currentNode.left && !currentNode.right) {
            if(currentNode < parentNode)
                parentNode.left = currentNode.left;
            else
                parentNode.right = currentNode.left;

        }
        /**if node has right item */
        else if(currentNode.right && !currentNode.left) {
            if(currentNode > parentNode)
                parentNode.right = currentNode.right;
            else
                parentNode.left = currentNode.right;
        }

        /**if node has both child */ 
        else {
            if(currentNode < parentNode) {
                console.log("both child parent left ran");
                let nextNode = currentNode.right;
                nextNode.left = currentNode.left;
                parentNode.left = currentNode.right;
            } else {
                console.log("both child parent right ran");
                let nextNode = currentNode.right;
                nextNode.left = currentNode.left;
                parentNode.right = currentNode.right;
            }
        } 
        

    }

    bfs() {
        var data = [],
            queue = [],
            node = this.root;
        queue.push(this.root);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            //in a binary tree, there is only left and right
            //in a non binary tree, if a node has many siblings, you would have
            //to visit them all and add them to the queue
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    dfsPreOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    dfsPostOrder() {
        var data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    dfsInOrder() {
        var data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(41);
tree.insert(20);
tree.insert(11);
tree.insert(29);
tree.insert(32);
tree.insert(65);
tree.insert(50);
tree.insert(91);
tree.insert(99);
tree.insert(72);


