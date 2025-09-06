class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    enqueue(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    dequeue() {
        if (this.isEmpty()) {
            return "This queue is empty"
        }
        let removeValue = this.head.value
        this.head = this.head.next
        this.size--
        if (this.isEmpty()) {
            this.tail = null
        }
        return removeValue
    }

    peek() {
        if (this.isEmpty()) {
            return "The queue is Empty"
        }

        return this.tail.value
    }
}






