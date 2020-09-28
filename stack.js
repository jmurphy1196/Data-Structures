class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.first.next = this.last;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
    return this;
  }
  pop() {
    let removedNode = this.first;
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size -= 1;
    removedNode.next = null;
    return removedNode;
  }
}

let stack = new Stack();
stack.push(22);
stack.push(33);
stack.push(34);
stack.push(21);

console.log(stack);
