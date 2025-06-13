class Stack {
    constructor(size) {
        this.items = []
        this.size = size
    }

    push(value) {
        if (this.getSize() <= this.items.length) console.log("Stack OverFlow")
        else {
            this.items.push(value)
            this.size++
        }
    }

    isEmpty() {
        return !this.size
    }

    getSize() {
        return this.size
    }

    pop() {
        if (this.isEmpty()) console.log('Stack Underflow')
        else {
            this.size--
            return this.items.pop()
        }
    }

    display() {
        if (this.isEmpty()) console.log('Stack Empty')
        else console.log(this.items.toString())
    }

    peek() {
        return this.items[this.getSize() - 1]
    }
}

const something = new Stack(6)

const arr = [2, 6, 3, 6]

arr.forEach(items => something.push(items))

console.log(arr)

something.display()



