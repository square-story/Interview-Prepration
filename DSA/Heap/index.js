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
        if (this.heap.length === 1) return this.heap[0]
        let value = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return value
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (this.hasParent(currentIndex) && this.getParent(currentIndex) < this.heap[currentIndex]) {
            this.swap(this.getParentIndex(currentIndex), currentIndex)
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (this.hasLeftChild(currentIndex)) {
            let largeChildIndex = this.getLeftChildIndex(currentIndex)
            if (this.hasRightChild(currentIndex) && this.getRightChild(currentIndex) > this.getLeftChild(currentIndex)) {
                largeChildIndex = this.getRightChildIndex(currentIndex)
            }
            if (this.heap[currentIndex] >= this.heap[largeChildIndex]) {
                break;
            } else {
                this.swap(currentIndex, largeChildIndex)
            }
            currentIndex = largeChildIndex
        }
    }
}


const arr = [2, 43, 53, 567, 32, 5423, 64, 45]
const heap = new MaxHeap()

arr.forEach(element => {
    heap.insert(element)
});

console.log(heap.extractMax())