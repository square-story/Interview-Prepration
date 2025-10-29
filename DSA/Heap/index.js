class MaxHeap {
    constructor() {
        this.heap = []
    }

    //helpers
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1
    }

    getRightChildIndex(i) {
        return 2 * i + 2
    }

    // Helper methods to check for parent/child existence
    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }

    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length
    }

    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length
    }

    //helper to get values from parent/child
    getParent(i) {
        return this.heap[this.getParentIndex(i)]
    }
    getLeftChild(i) {
        return this.heap[this.getLeftChildIndex(i)]
    }
    getRightChild(i) {
        return this.heap[this.getRightChildIndex(i)]
    }

    //swap elements
    swap(i, j) {
        return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    getPeek() {
        if (!this.heap.length) return null
        return this.heap[0]
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp()
    }

    extractMax() {
        if (!this.heap.length) return null
        if (this.heap.length === 1) return this.heap.pop()
        let value = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return value
    }

    heapifyUp(i = this.heap.length - 1) {
        if (this.hasParent(i) && this.getParent(i) < this.heap[i]) {
            this.swap(this.getParentIndex(i), i)
            this.heapifyUp(this.getParentIndex(i))
        }
    }

    heapifyDown(i = 0) {
        let largestIndex = i
        let right = this.getRightChildIndex(i)
        let left = this.getLeftChildIndex(i)
        if (this.hasLeftChild(i) && this.getLeftChild(i) > this.heap[largestIndex]) {
            largestIndex = left
        }
        if (this.hasRightChild(i) && this.getRightChild(i) > this.heap[largestIndex]) {
            largestIndex = right
        }
        if (i !== largestIndex) {
            this.swap(i, largestIndex)
            this.heapifyDown(largestIndex)
        }
    }
}


const arr = [2, 43, 53, 567, 32, 5423, 64, 45]
const heap = new MaxHeap()

arr.forEach(element => {
    heap.insert(element)
});

console.log(heap.extractMax())
console.log(heap.getPeek())