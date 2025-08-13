class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Utility
    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    createNode(value) {
        return new Node(value);
    }

    // Insert
    prepend(value) {
        const node = this.createNode(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(value) {
        const node = this.createNode(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    // Remove by index
    removeFromIndex(index) {
        if (index < 0 || index >= this.size || this.isEmpty()) return null;

        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this._getNodeAt(index - 1);
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    // Remove middle node
    removeMiddle() {
        if (this.size < 2) return;

        let fast = this.head;
        let slow = this.head;
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        if (prev) {
            prev.next = slow.next;
            this.size--;
        }
    }

    // Remove kth node from start
    removeKthElement(k) {
        if (k < 0 || k >= this.size || !Number.isInteger(k)) return null;
        return this.removeFromIndex(k);
    }

    // Remove kth node from end
    removeKthElementFromLast(k) {
        if (k <= 0 || k > this.size || !Number.isInteger(k)) return null;
        return this.removeFromIndex(this.size - k);
    }

    // Remove even numbers
    removeEvenNumbers() {
        while (this.head && this.head.value % 2 === 0) {
            this.head = this.head.next;
            this.size--;
        }
        if (this.isEmpty()) return;
        let curr = this.head;
        while (curr.next) {
            if (curr.next.value % 2 === 0) {
                curr.next = curr.next.next;
                this.size--;
            } else {
                curr = curr.next;
            }
        }
    }

    // Remove element by value (first occurrence)
    removeElement(value) {
        let curr = this.head;
        let prev = null;
        while (curr) {
            if (curr.value === value) {
                if (prev) {
                    prev.next = curr.next;
                } else {
                    this.head = curr.next;
                }
                this.size--;
                return;
            }
            prev = curr;
            curr = curr.next;
        }
    }

    // Remove duplicates from unsorted list
    removeDuplicateFromUnsorted() {
        let seen = new Set();
        let curr = this.head;
        let prev = null;
        while (curr) {
            if (seen.has(curr.value)) {
                prev.next = curr.next;
                this.size--;
            } else {
                seen.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    // Remove all elements that have duplicates
    removeDuplicatesWithAllElement() {
        let map = new Map();
        let curr = this.head;
        while (curr) {
            map.set(curr.value, (map.get(curr.value) || 0) + 1);
            curr = curr.next;
        }
        let dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;
        curr = this.head;
        while (curr) {
            if (map.get(curr.value) > 1) {
                prev.next = curr.next;
                this.size--;
            } else {
                prev = curr;
            }
            curr = curr.next;
        }
        this.head = dummy.next;
    }

    // Search
    search(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) return true;
            curr = curr.next;
        }
        return false;
    }

    searchByIndex(index) {
        const node = this._getNodeAt(index);
        return node ? node.value : null;
    }

    // Helpers
    _getNodeAt(index) {
        if (index < 0 || index >= this.size) return null;
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr;
    }

    // Display
    display() {
        let values = [];
        let curr = this.head;
        while (curr) {
            values.push(curr.value);
            curr = curr.next;
        }
        console.log(values.join(" --> "));
    }

    // Reverse
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // Second smallest element
    secondSmallest() {
        if (this.size < 2) return null;
        let small = Infinity, secSmall = Infinity;
        let curr = this.head;
        while (curr) {
            if (curr.value < small) {
                secSmall = small;
                small = curr.value;
            } else if (curr.value < secSmall && curr.value !== small) {
                secSmall = curr.value;
            }
            curr = curr.next;
        }
        return secSmall === Infinity ? null : secSmall;
    }

    // Least occurrence value
    leastOccurrence() {
        if (this.isEmpty()) return null;
        let map = new Map();
        let curr = this.head;
        while (curr) {
            map.set(curr.value, (map.get(curr.value) || 0) + 1);
            curr = curr.next;
        }
        let least = Math.min(...map.values());
        return [...map.entries()].filter(([_, v]) => v === least).map(([k]) => k);
    }

    // Sum of first two and last two values
    sumOfTwoSideValues() {
        if (this.size < 4) return null;
        let arr = this.listToArray();
        return (arr[0] + arr[1]) + (arr[arr.length - 1] + arr[arr.length - 2]);
    }

    // Convert list to array
    listToArray() {
        let result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        return result;
    }

    // Sorting (Merge Sort)
    sort() {
        this.head = this._mergeSort(this.head);
    }

    _mergeSort(head) {
        if (!head || !head.next) return head;
        let mid = this._getMiddle(head);
        let right = mid.next;
        mid.next = null;
        let leftSorted = this._mergeSort(head);
        let rightSorted = this._mergeSort(right);
        return this._merge(leftSorted, rightSorted);
    }

    _merge(l1, l2) {
        let dummy = new Node(0);
        let curr = dummy;
        while (l1 && l2) {
            if (l1.value < l2.value) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        curr.next = l1 || l2;
        return dummy.next;
    }

    _getMiddle(head) {
        let slow = head, fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // Palindrome check
    isPalindrome() {
        if (!this.head || !this.head.next) return true;
        let mid = this._getMiddle(this.head);
        let secondHalf = this._reverseList(mid.next);
        mid.next = null;
        let p1 = this.head, p2 = secondHalf;
        while (p2) {
            if (p1.value !== p2.value) return false;
            p1 = p1.next;
            p2 = p2.next;
        }
        return true;
    }

    _reverseList(head) {
        let prev = null, curr = head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    removeDuplicateFromLastPosition(dupElement) {
        let current = this.head
        let prev = this.head
        while (current && current.next) {
            if (current.next.value == dupElement) {
                prev = current
            }
            current = current.next
        }
        prev.next = prev.next.next
        this.size--
        this.display()
    }

    sumOnlyMiddle10Elements() {
        if (this.isEmpty() || this.size < 10) {
            return 'not enough element in this linkedlist to perform the operation'
        }

        let skip = (this.size - 10) / 2
        let current = this.head
        let sum = 0

        for (let i = 0; i < skip; i++) {
            current = current.next
        }

        for (let i = 0; i < 10; i++) {
            sum += current.value
            current = current.next
        }

        return sum

    }

    // Cycle detection
    hasCycle() {
        let fast = this.head, slow = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) return true;
        }
        return false;
    }
}

// Example usage
let list = new LinkedList();
[2, 4, 2, 3, 873, 534, 2, 4, 3, 4, 4, 7, 3, 24, 7, 35, 4].forEach(v => list.append(v));
list.display();
// console.log("Second smallest:", list.secondSmallest());
// console.log("Least occurrence:", list.leastOccurrence());
// list.removeMiddle();
// list.display();
// list.reverse();
// list.display();
// console.log("Is palindrome:", list.isPalindrome());
// console.log("Sum of first 2 + last 2:", list.sumOfTwoSideValues());
list.removeDuplicateFromLastPosition(3)
console.log(list.sumOnlyMiddle10Elements());
