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

    removeKthElement(k) {
        if (this.isEmpty() || k < 0 || k >= this.size || !Number.isInteger(k)) return;
        let removeValue;
        if (k === 0) {
            removeValue = this.head.value;
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < k - 1; i++) {
                curr = curr.next;
            }
            removeValue = curr.next.value;
            curr.next = curr.next.next;
        }
        this.size--;
        return removeValue;
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

    secondSmallest() {
        if (this.isEmpty()) return null
        let small = Infinity;
        let secSmall = Infinity;
        let curr = this.head
        while (curr) {
            if (curr.value < small) {
                secSmall = small
                small = curr.value
            } else if (secSmall > curr.value && curr.value !== small) {
                secSmall = curr.value
            }
            curr = curr.next
        }

        return secSmall
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

    removekthElementFromLast(k) {
        if (this.isEmpty() || this.size < k || !Number.isInteger(k)) {
            return -1
        }

        let fast = this.head
        let slow = this.head
        for (let index = 0; index <= k; index++) {
            fast = fast.next
        }

        while (fast) {
            fast = fast.next
            slow = slow.next
        }
        let removeValue = slow.next.value
        slow.next = slow.next.next
        this.size--
        return removeValue

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

    leastOccurance() {
        let map = new Map()
        let curr = this.head
        while (curr) {
            map.set(curr.value, (map.get(curr.value) || 0) + 1)
            curr = curr.next
        }

        let least = Math.min(...map.values())

        for (let [key, value] of map.entries()) {
            if (least === value) {
                return key
            }
        }
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

    listToArray() {
        if (this.isEmpty()) return
        let result = []
        let curr = this.head
        while (curr) {
            result.push(curr.value)
            curr = curr.next
        }
        return result
    }

    _getMiddle(head) {
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    sort() {
        this.head = this._mergeSort(this.head)
    }

    _mergeSort(head) {
        if (!head || !head.next) return head;

        let mid = this._getMiddle(head);
        let right = mid.next;
        mid.next = null; // split the list into two

        const leftSorted = this._mergeSort(head);
        const rightSorted = this._mergeSort(right);

        return this._merge(leftSorted, rightSorted);
    }

    _merge(l1, l2) {
        let dummy = new Node(0);
        let current = dummy;

        while (l1 && l2) {
            if (l1.value < l2.value) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;
        return dummy.next;
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

    hasCycle() {
        let fast = this.head
        let slow = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }
        return false
    }
}

let arr = [2, 4, 2, 3, 873, 534, 2, 4, 3, 4, 4, 7, 3, 24, 7, 35, 4]
let list = new LinkedList()

arr.forEach(item => list.append(item))
list.display()

console.log(list.searchByIndex(5))
console.log(list.search(54))
list.removeMiddle()
list.display()
list.reverse()
list.display()
console.log('Is this linkedlist has cycle:', list.hasCycle())
console.log(list.removekthElementFromLast(3))
list.display()

console.log(list.secondSmallest())
console.log(list.leastOccurance())

