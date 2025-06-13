class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        if (this.isEmpty()) return null
        return this.items.shift()
    }

    isEmpty() {
        return !this.items.length
    }
}

const queue = new Queue()

console.log(queue.isEmpty())