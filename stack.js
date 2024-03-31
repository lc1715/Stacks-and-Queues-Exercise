
/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}


class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  push(data) {
    const newNode = new Node(data)

    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  pop() {
    let firstHead = this.head
    let lengthBeforeLastNode = this.length - 2
    let count = 0

    while (count < lengthBeforeLastNode) {
      count += 1
      this.head = this.head.next
    }

    let previousNode = this.head
    let removedNodeValue = previousNode.next.val
    previousNode.next = null
    this.tail = previousNode
    this.head = firstHead

    return removedNodeValue
  }
}

const s = new Stack

