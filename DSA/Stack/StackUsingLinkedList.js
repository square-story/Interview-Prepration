class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
        this.size = 0
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    push(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack underflow"
        }

        let removeValue = this.head.value
        this.head = this.head.next
        this.size--
        return removeValue
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack underflow"
        }

        return this.head.value
    }
}