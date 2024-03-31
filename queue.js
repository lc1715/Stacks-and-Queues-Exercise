/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }


  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    const newNode = new Node(val)

    if (this.first == null) {
      this.first = newNode
      this.last = newNode
    }
    this.last.next = newNode
    this.last = newNode
    this.size += 1
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let currentNode = this.first
    let removedNodeValue = currentNode.val

    if (!currentNode) {
      throw new Error('Queue is empty. Cannot dequeue from an empty queue')
    }

    currentNode = currentNode.next
    this.first = currentNode
    this.size -= 1

    if (this.first == null) {
      this.last = null
    }

    return removedNodeValue
  }


  /** peek(): return the value of the first node in the queue. */

  peek() {
    let firstNodeValue = this.first.val
    return firstNodeValue
  }



  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.first) {
      return true
    } else {
      return false
    }
  }
}

// let q = new Queue


module.exports = Queue;
