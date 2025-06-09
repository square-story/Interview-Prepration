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

    prepend(value) {
        let node = this.createNode(value)

        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
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

    removeMiddle() {
        if (this.size < 2) {
            return
        }

        let fast = this.head
        let slow = this.head
        let prev = null

        while (fast.next && fast) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }

        prev.next = slow.next
        this.size--

    }

    search(value) {
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        while (curr) {
            if (curr.value == value) {
                return true
            }
            curr = curr.next
        }
        return false
    }

    searchByIndex(index) {
        if (this.isEmpty() || index < 0 || index >= this.size) {
            return null
        }

        let prev = this.head
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }
        return prev.value
    }

    removeEvenNumbers() {
        if (this.isEmpty()) return null
        while (this.head && this.head.value % 2 == 0) {
            this.head = this.head.next
            this.size--
        }
        if (this.isEmpty()) return null
        let prev = this.head
        while (prev.next) {
            if (prev.next.value % 2 == 0) {
                prev.next = prev.next.next
                this.size--
            } else {
                prev = prev.next
            }
        }
        this.display()
    }

    removeDuplicateFromUnsorted() {
        let curr = this.head
        let prev = null
        let seen = new Set()
        while (curr && curr.next) {
            if (seen.has(curr.value)) {
                prev.next = curr.next
                this.size--
            } else {
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}

let arr = [2, 4, 2, 3, 87]
let list = new LinkedList()

arr.forEach(item => list.append(item))
list.display()

console.log(list.searchByIndex(5))
console.log(list.search(54))
list.removeMiddle()
list.display()
list.removeDuplicateFromUnsorted()
list.display()
list.reverse()
list.display()
list.removeEvenNumbers()