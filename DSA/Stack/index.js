class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Stack Underflow');
            return undefined;
        }
        return this.items.pop();
    }

    display() {
        if (this.isEmpty()) {
            console.log('Stack Empty');
        } else {
            console.log(this.items.toString());
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log('Stack Empty');
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;