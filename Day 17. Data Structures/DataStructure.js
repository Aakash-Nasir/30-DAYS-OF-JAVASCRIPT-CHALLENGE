// Task 1
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 2
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method 1: To add node to the end to the linked list
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            // If head is null, newNode becomes the head
            this.head = newNode;
        } else {
            // Traverse to the end of the list and add the newNode
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method 2: To remove a node from the end of the linked list
    remove() {
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const value = current.next.value;
        current.next = null;
        return value;
    }

    // Method 3: To display all nodes of the linked list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // 1 2 3
console.log(list.remove()); // 3
list.display(); // 1 2

// Task 3
class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.items.length === 0) return null;
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) return null;
        return this.items[this.items.length - 1];
    }
}

// Example usage 
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2

// Task 4
function reverseString(str) {
    // pushing all characters onto the stack
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    // popping all characters from the stack
    let reversed = "";
    while (stack.peek() != null) {
        reversed += stack.pop();
    }
    return reversed;
}

// Example usage
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

// Task 5
class Queue {
    constructor() {
        this.items = [];

    }
    enqueue(value) {
        this.items.push(value);
    }
    dequeue() {
        if(this.items.length === 0 ) 
            return null;
        return this.items.shift();
    }

    front() {
        if(this.items.length === 0) return null;
        return this.items[0];
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

// Task 6

class PrinterQueue {
    constructor() {
        this.queue = new Queue();

    }
    addPrintJob(job){
        this.queue.enqueue(job);
        console.log(`print job added: ${job}`);
    }

    processPrintJobs() {
        while(this.queue.front() !== null) {
            const job = this.queue.dequeue();
            console.log(`Processing print job: ${job}`);
        }
    }
}

// Example usage
const printer = new PrinterQueue();
printer.addPrintJob("Document1");
printer.addPrintJob("Document2");
printer.addPrintJob("Document3");
printer.processPrintJobs();
// Output:
// Print job added: Document1
// Print job added: Document2
// Print job added: Document3
// Processing print job: Document1
// Processing print job: Document2
// Processing print job: Document3

// Task 7
class TreeNode {
    constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

// Task 8
class BinaryTree {
    constructor() {
        this.root = null;
    }
    // Method 1 To insert values
    insert(value) {
        const newNode = new TreeNode(value);
        if(!this.root) {
             // When root is null, then newNode join to the root node of BT
             this.root = newNode;
             return;  
        }
        let current = this.root;
        while(true) {
            if(value < current.value) {
              if(!current.left) {
                // Join the newNode to left of the current root node
                current.left = newNode;
                return;
              }// Update the current root node via left node
        current = current.left;
    } else {
      if (!current.right) {
        // Join the newNode to right of the current root node
        current.right = newNode;
        return;
      }
      // Update the current root node via right node
      current = current.right;
    }
  }
}

// Method 2: to perform in-order traversal to display nodes (LNR)
inOrderTraversal(node = this.root) {
  if (node !== null) {
    // L
    this.inOrderTraversal(node.left);
    // N
    console.log(node.value);
    // R
    this.inOrderTraversal(node.right);
  }
}
}

// Example usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.inOrderTraversal();
// Output: 2 3 4 5 6 7 8

// Task 9
class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    // Method 1: to add vertices
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    // Method 2: to add the edges
    addEdge(vertex1, vertex2) {
      if (this.adjList.has(vertex1)) {
        this.adjList.get(vertex1).push(vertex2);
      }
      if (this.adjList.has(vertex2)) {
        this.adjList.get(vertex2).push(vertex1);
      }
    }
  
    // Method 3: to perform a breadth-first search (BFS)
    bfs(start) {
      const visited = new Set();
      const queue = [start];
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          console.log(vertex);
          visited.add(vertex);
          const neighbors = this.adjList.get(vertex);
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  // Example usage
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "D");
  graph.bfs("A");
  // Output: A B C D
   
  // Task 10
  class SimpleNetwork {
    constructor() {
      this.graph = new Graph();
    }
  
    addNode(node) {
      this.graph.addVertex(node);
    }
  
    addConnection(node1, node2) {
      this.graph.addEdge(node1, node2);
    }
  
    findShortestPath(start, end) {
      const visited = new Set();
      const queue = [[start, [start]]];
      while (queue.length > 0) {
        const [vertex, path] = queue.shift();
        if (vertex === end) return path;
        if (!visited.has(vertex)) {
          visited.add(vertex);
          const neighbors = this.graph.adjList.get(vertex);
          for (const neighbor of neighbors) {
            queue.push([neighbor, [...path, neighbor]]);
          }
        }
      }
      return null;
    }
  }
  
  // Example usage
  const network = new SimpleNetwork();
  network.addNode("A");
  network.addNode("B");
  network.addNode("C");
  network.addNode("D");
  network.addConnection("A", "B");
  network.addConnection("A", "C");
  network.addConnection("B", "D");
  network.addConnection("C", "D");
  console.log(network.findShortestPath("A", "D")); // Output: ['A', 'B', 'D']

