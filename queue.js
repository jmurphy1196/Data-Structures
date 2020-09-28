class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  endQueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      newNode.next = this.last;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this;
  }
  deQueue() {
    if (this.size === 0) {
      return null;
    }
    let removedNode = this.first;
    if (this.size === 1) {
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

let queue = new Queue();

queue.push(22);
queue.push(21);
queue.push(23);
queue.push(25);
queue.pop();
console.log(queue);
