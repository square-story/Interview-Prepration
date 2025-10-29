class MaxHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    getLeftIndex(i) {
        return 2 * i + 1
    }
    getRightIndex(i) {
        return 2 * i + 2
    }
    getParent(i) {
        return this.heap[this.getParentIndex(i)]
    }
    getLeft(i) {
        return this.heap[this.getLeftIndex(i)]
    }
    getRight(i) {
        return this.heap[this.getRightIndex(i)]
    }
    hasParent(i) {
        return this.getParentIndex(i) >= 0
    }
    hasLeft(i) {
        return this.getLeftIndex(i) < this.heap.length
    }
    hasRight(i) {
        return this.getRightIndex(i) < this.heap.length
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    heapifyUp(i = this.heap.length - 1) {
        if (this.hasParent(i) && this.getParent(i) < this.heap[i]) {
            this.swap(this.getParentIndex(i), i)
            this.heapifyUp(this.getParentIndex(i))
        }
    }

    heapifyDown(i = 0) {
        let largestIndex = i
        if (this.hasLeft(i) && this.getLeft(i) > this.heap[largestIndex]) {
            largestIndex = this.getLeftIndex(i)
        }
        if (this.hasRight(i) && this.getRight(i) > this.heap[largestIndex]) {
            largestIndex = this.getRightIndex(i)
        }

        if (largestIndex !== i) {
            this.swap(largestIndex, i)
            this.heapifyDown(largestIndex)
        }
    }

    extractMax() {
        if (!this.heap.length) return null
        if (this.heap.length === 1) return this.heap.pop()
        let Max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return Max
    }

    getPeek() {
        if (!this.heap.length) return null
        return this.heap[0]
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
}

const heap = new MaxHeap()
const arr = [3, 5, 2, 4, 34, 346, 2323, 4, 53].forEach(item => heap.insert(item))
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.getPeek())