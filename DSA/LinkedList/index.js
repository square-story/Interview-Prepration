class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    createNode(value) {
        return new Node(value)
    }

    append(value) {
        let node = this.createNode(value)

        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    prepend(value) {
        let node = this.createNode(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    removeFromIndex(index) {
        if (index >= this.getSize() || index < 0 || this.isEmpty()) {
            return null
        }

        let removeNode;
        if (index === 0) {
            removeNode = this.head
            this.head = removeNode.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    display() {
        if (this.isEmpty()) {
            return null
        } else {
            let prev = this.head;
            let value = "";
            while (prev) {
                value += prev.value + "-->"
                prev = prev.next
            }
            console.log(value)
        }
    }
}

let arr = [2, 4, 2, 54, 6]
let list = new LinkedList()

arr.forEach(item => list.append(item))
list.display()