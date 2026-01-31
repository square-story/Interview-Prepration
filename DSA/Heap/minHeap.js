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

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
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

    insert(value) {
        this.heap[this.heap.length] = value
        this.heapifyUP()
    }

    extractMin() {
        if (!this.heap.length) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let removeValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return removeValue
    }

    heapifyDown(i = 0) {
        let smallest = i;
        if (this.hasLeft(i) && this.getLeft(i) < this.heap[smallest]) {
            smallest = this.getLeftIndex(i)
        }
        if (this.hasRight(i) && this.getRight(i) < this.heap[smallest]) {
            smallest = this.getRightIndex(i)
        }
        if (smallest !== i) {
            this.swap(i, smallest)
            this.heapifyDown(smallest)
        }
    }

    heapifyUP(i = this.heap.length - 1) {
        if (this.hasParent(i) && this.getParent(i) > this.heap[i]) {
            this.swap(this.getParentIndex(i), i)
            this.heapifyUP(this.getParentIndex(i))
        }
    }
}

const arr = [29, 4, 5, 67, 3, 36]
const min = new MinHeap()
arr.forEach(item => min.insert(item))
console.log(min.heap)
console.log(min.extractMin())
console.log(min.extractMin())
console.log(min.extractMin())
console.log(min.extractMin())
console.log(min.heap)

const arr2 = [12, 4, 6, 43, 6, 3]
function kthLargest(arr, k) {
    const heap = new MinHeap()
    for (let el of arr) {
        heap.insert(el)
        if (heap.heap.length > k) {
            heap.extractMin()
        }
    }
    return heap.heap[0]
}

console.log('---The Kth Largest---')
console.log(kthLargest(arr2, 1)) // 43
console.log(kthLargest(arr2, 2)) // 12
console.log(kthLargest(arr2, 3)) // 6