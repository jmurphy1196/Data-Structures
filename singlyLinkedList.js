class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    return this;
  }
  shift() {
    const head = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return head;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.head.next = this.tail;
      this.length += 1;
      return this;
    }
    const oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.length += 1;

    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let tail = this.tail;
    while (current) {
      if (current.next === this.tail) {
        current.next = null;
        this.tail = current;
      }
      current = current.next;
    }
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return tail;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === this.length - 1) {
      return this.tail;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter += 1;
    }

    return current;
  }
  set(index, val) {
    const newNode = new Node(val);
    let current = this.head;
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      newNode.next = current.next;
      this.head = newNode;
      return this;
    }
    let count = 1;
    while (count <= index - 1) {
      current = current.next;
      count += 1;
    }

    let newNodeNext = current.next.next;
    current.next = newNode;
    if (index === this.length - 1) {
      this.tail = newNode;
      return this;
    }

    current.next = newNode;
    newNode.next = newNodeNext;
    return this;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    } else if (index === this.length) {
      return !!this.push(val);
    }
    const newNode = new Node(val);
    let prevNode = this.get(index - 1);
    const newNext = prevNode.next;
    prevNode.next = newNode;
    newNode.next = newNext;
    this.length += 1;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return !!this.shift();
    } else if (index === this.length - 1) {
      return !!this.pop();
    }
    let prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    const newNext = removedNode.next;
    prevNode.next = newNext;
    this.length -= 1;
    return removedNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
  logList() {
    console.log(this.head);
    let isNotTail = true;
    let next = this.head.next;
    while (isNotTail) {
      if (next !== this.tail) {
        console.log(next);
        next = next.next;
      } else {
        console.log(this.tail);
        isNotTail = false;
      }
    }
    console.log(`Length: ${this.length}`);
  }
}

let myList = new SinglyLinkedList();

myList.unshift("yo,  ");
myList.push("my guy");
myList.push("hows it goin");
myList.push("good my dude");
myList.reverse();
myList.logList();
