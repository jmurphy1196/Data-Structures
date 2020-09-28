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
            search = false;
          } else {
            currentNode = currentNode.right;
          }
        } else if (val < currentNode.val) {
          if (currentNode.left === null) {
            search = false;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
      val < currentNode.val
        ? (currentNode.left = newNode)
        : (currentNode.right = newNode);
    }
    return tree;
  }
}

let tree = new BinarySearchTree();

tree.insert(5);
tree.insert(12);
tree.insert(6);

console.log(tree);
