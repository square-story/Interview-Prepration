class Queue {
    constructor() {
        this.items = []
    }

    getSize() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        if (this.isEmpty()) return -1
        return this.items.shift()
    }

    peek() {
        return this.items[0]
    }

    display() {
        return [...this.items.slice()].join('-->')
    }
}


class Stack {
    constructor() {
        this.input = new Queue()
        this.output = new Queue()
    }

    push(value) {
        this.input.enqueue(value)
    }

    pop() {
        if (this.input.isEmpty()) return "Stack UnderFlow";
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
        if (this.input.isEmpty()) return "Stack is UnderFlow"
        while (this.input.getSize() > 1) {
            this.output.enqueue(this.input.dequeue())
        }
        let topValue = this.input.dequeue()
        this.output.enqueue(topValue)

        let temp = this.input
        this.input = this.output
        this.output = temp

        return topValue
    }

    print() {
        return this.input.display()
    }
}


const stack = new Stack()

let arr = [2, 5, 3, 4, 556, 4, 34, 634, 43].forEach(item => stack.push(item))
console.log("Stack:", stack.print());
console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Stack after pop:", stack.print());


