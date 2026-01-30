class MinHeap {
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

    hasParent(i) {
        return this.getParentIndex(i) >= 0
    }

    hasLeft(i) {
        return this.getLeftIndex(i) < this.heap.length
    }

    hasRight(i) {
        return this.getRightIndex(i) < this.heap.length
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

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    heapifyUp(i) {
        if (this.hasParent(i) && this.getParent(i) > this.heap[i]) {
            this.swap(this.getParentIndex(i), i)
            this.heapifyUp(this.getParentIndex(i))
        }
    }

    heapifyDown(i) {
        let smallest = i
        let leftIndex = this.getLeftIndex(i)
        let rightIndex = this.getLeftIndex(i)
        if (this.hasLeft(i) && this.getLeft(i) > this.heap[smallest]) {
            smallest = leftIndex
        }

        if (this.hasRight(i) && this.getRight(i) > this.heap[smallest]) {
            smallest = rightIndex
        }

        if (smallest !== i) {
            this.swap(i, smallest)
            this.heapifyDown(smallest)
        }
    }

    extractMin() {
        let removeValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return removeValue
    }
}

const arr = [24, 2, 5, 42, 63, 5]
const minHeap = new MinHeap()
arr.forEach(item => minHeap.insert(item))
console.log(minHeap.extractMin())
console.log(minHeap.extractMin())
console.log(minHeap.extractMin())
console.log(minHeap.heap)