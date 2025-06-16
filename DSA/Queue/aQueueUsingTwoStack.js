class Stack {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    getSize() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    print() {
        return [...this.items.slice()].join('-->')
    }
}


class Queue {
    constructor() {
        this.input = new Stack()
        this.output = new Stack()
    }

    enqueue(value) {
        this.input.push(value)
    }

    dequeue() {
        this.suffle()
        if (this.output.isEmpty()) return "Queue UnderFlow"
        return this.output.pop()
    }

    suffle() {
        if (this.output.isEmpty()) {
            while (!this.input.isEmpty()) {
                this.output.push(this.input.pop())
            }
        }
    }

    peek() {
        this.suffle()
        if (this.output.isEmpty()) return "Queue UnderFlow"
        return this.output.peek()
    }

    print() {
        let outputArr = [...this.output.items].reverse()
        let inputArr = [...this.input.items]
        return [...outputArr, ...inputArr].join('-->')
    }
}


const queue = new Queue()

const arr = [2, 43, 53, 2, 234, 3].forEach(items => queue.enqueue(items))

console.log(queue.print())
console.log("The Peek is:", queue.peek())
console.log("The Remove Value:", queue.dequeue())

console.log('After Removing the value queue:', queue.print())