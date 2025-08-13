class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.size = 0
        this.front = 0
        this.rear = 0
    }

    //helper
    isFull() {
        return this.size === this.capacity
    }

    /**
     * 
     * @param {number | string} value 
     */
    enqueue(value) {
        if (this.isFull()) return
        this.items[this.rear] = value
        this.rear = (this.rear + 1) % this.capacity
        this.size++
    }

    dequeue() {
        let removeValue = this.items[this.front]
        this.front = (this.front + 1) % this.capacity
        this.size--
        return removeValue
    }

    print() {
        let frontIndex = this.front
        let arr = []
        let k = 0;
        while (k < this.size) {
            arr.push(this.items[frontIndex])
            frontIndex = (frontIndex + 1) % this.capacity
            k++;
        }
        return arr
    }
}


const queue = new CircularQueue(5)

const arr = [4, 2, 5, 2, 3]

arr.forEach(item => queue.enqueue(item))

console.log(queue.print())