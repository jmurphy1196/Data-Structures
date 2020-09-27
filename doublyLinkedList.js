class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.previous = null;
      newNode.next = this.tail;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    let removedNode;
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.tail;
      removedNode.previous = null;
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.length -= 1;
    return removedNode;
  }
  shift() {
    let removedNode = this.head;
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.length -= 1;
    removedNode.next = null;
    return removedNode;
  }
  unshift(val) {
    if (this.length === 0) {
      return this.push(val);
    }
    const newNode = new Node(val);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }
  get(ind) {
    let currentNode;
    let counter;
    if (ind < 0 || ind >= this.length) {
      return null;
    } else if (ind === 0) {
      return this.head;
    } else if (ind === this.length - 1) {
      return this.tail;
    } else if (ind <= Math.floor(this.length / 2)) {
      currentNode = this.head;
      counter = 0;
      while (counter < ind) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    } else if (ind >= Math.floor(this.length / 2)) {
      currentNode = this.tail;
      counter = this.length - 1;
      while (counter > ind) {
        currentNode = currentNode.previous;
        counter--;
      }
      return currentNode;
    }
  }
  set(ind, val) {
    if (ind < 0 || ind >= this.length) {
      return false;
    }
    let foundNode = this.get(ind);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(ind, val) {
    if (ind < 0 || ind > this.length + 1) {
      return null;
    } else if (ind === 0) {
      return !!this.unshift(val);
    } else if (ind === this.length) {
      return !!this.push(val);
    }
    let oldNode = this.get(ind);
    const newNode = new Node(val);
    oldNode.previous.next = newNode;
    newNode.previous = oldNode.previous;
    newNode.next = oldNode;
    oldNode.previous = newNode;
    this.length += 1;
    return true;
  }
  print() {
    let counter = 0;
    let current = this.head;
    while (counter < this.length) {
      console.log(current);
      current = current.next;
      counter++;
    }
  }
}

const newList = new DoublyLinkedList();
newList.unshift(11);
newList.push(23);
newList.push(34);
newList.push(38);
newList.push(31);
newList.push(55);
newList.push(5);
newList.set(2, 30);

newList.print();
