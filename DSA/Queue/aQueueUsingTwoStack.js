class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.size = 0
    }

    enqueue(value) {
        let node = new Node(value)
        let current = this.head
        if (!current) {
            this.head = node
        } else {
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    dequeue() {
        if (this.head) {
            let removeValue = this.head.value
            this.head = this.head.next
            this.size--
            return removeValue
        }
        return null
    }

    peek() {
        if (this.head) {
            return this.head.value
        }

        return null
    }

    display() {
        if (this.head) {
            let value = ""
            let current = this.head
            while (current) {
                value += current.value + '-->'
                current = current.next
            }
            console.log(value)
        }
    }
}

class StackUsingTwoQueue {
    constructor() {
        this.input = new Queue()
        this.output = new Queue()
    }

    push(value) {
        this.input.enqueue(value)
    }

    pop() {
        while (this.input.getSize() > 1) {
            this.output.enqueue(this.input.dequeue())
        }
        let removeValue = this.input.dequeue()
        let temp = this.input
        this.input = this.output
        this.output = temp
        return removeValue
    }

    peek() {
        while (!this.input.isEmpty()) {
            this.output.enqueue(this.input.dequeue())
        }
        let top = this.input.dequeue()
        this.output.enqueue(top)

        // swap queues
        let temp = this.input
        this.input = this.output
        this.output = temp

        return top
    }
}


const queue = new Queue()

const arr = [2, 43, 53, 2, 234, 3].forEach(items => queue.enqueue(items))

queue.display()
console.log("The Peek is:", queue.peek())
console.log("The Remove Value:", queue.dequeue())
console.log('after removing the value:')
queue.display()