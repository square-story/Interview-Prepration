class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    removeFromEnd() {
        if (!this.tail) return null

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
    }

    removeFromStart() {
        if (!this.head) return null

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    displayForward() {
        let current = this.head
        let value = ""
        while (current) {
            value += current.value + '<-->'
            current = current.next
        }
        console.log(value)
    }

    displayBackward() {
        let current = this.tail
        let value = ""
        while (current) {
            value += current.value + '<-->'
            current = current.prev
        }
        console.log(value)
    }
}

let list = new DoubleLinkedList()

list.append(10)
list.append(20)
list.append(30)
list.prepend(5)

list.displayForward()
// 5 <-> 10 <-> 20 <-> 30

list.displayBackward()
// 30 <-> 20 <-> 10 <-> 5

list.removeFromEnd()
list.displayForward()
// 5 <-> 10 <-> 20

list.removeFromStart()
list.displayForward()
// 10 <-> 20