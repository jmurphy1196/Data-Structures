//each parent node has at most 2 children
//every node to the left of the parent node is always LESS than the parent
//every node to the right of the parent is always MORE than the parent

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      let search = true;
      while (search) {
        if (val > currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            search = false;
          } else {
            currentNode = currentNode.right;
          }
        } else if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            search = false;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          return null;
        }
      }
    }
    return this;
  }
  find(val) {
    if (this.root === null) {
      return null;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode === null) {
        return null;
      }
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else if (val === currentNode.val) {
        return currentNode;
      }
    }
  }
  BFS() {
    const data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  DFS() {
    const vistedNodes = [];
    let current = this.root;

    function helper(node) {
      vistedNodes.push(node.val);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    }
    helper(current);

    return vistedNodes;
  }
  DFSPre() {
    const visitedNodes = [];
    let current = this.root;

    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
      visitedNodes.push(node.val);
    }
    helper(current);
    return visitedNodes;
  }
  DFSInOrder() {
    const visitedNodes = [];
    let current = this.root;

    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      visitedNodes.push(node.val);
      if (node.right) {
        helper(node.right);
      }
    }
    helper(current);
    return visitedNodes;
  }
}

let tree = new BinarySearchTree();

tree.insert(5);
tree.insert(4);
tree.insert(12);
tree.insert(13);
tree.insert(6);
console.log(tree.BFS());
