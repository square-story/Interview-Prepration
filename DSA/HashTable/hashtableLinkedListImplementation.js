class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
    }
}

class HashTable {
    constructor() {
        this.head = null
    }

    insert(key, value) {
        let current = this.head
        while (current) {
            if (current.key === key) {
                current.value = value
            }
            current = current.next
        }
    }
}