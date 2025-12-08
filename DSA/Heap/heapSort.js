/**
 * 
 * @param {number[]} arr 
 * @param {number} i 
 * @param {number} n 
 */
function heapify(arr, i, n) {
    let minIndex = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (n > left && arr[left] > arr[minIndex]) {
        minIndex = left
    }

    if (n > right && arr[right] > arr[minIndex]) {
        minIndex = right
    }

    if (minIndex !== i) {
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        heapify(arr, minIndex, n)
    }
}

/**
 * 
 * @param {number[]} arr 
 */
function heapSort(arr) {
    let n = arr.length
    let leaf = Math.floor(n / 2) - 1
    for (let i = leaf; i >= 0; i--) {
        heapify(arr, i, n)
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, 0, i)
    }

    return arr
}

console.log(heapSort([3, 7, 2, 4, 6, 3, 2, 7, 84, 3]))
