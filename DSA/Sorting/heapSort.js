function heapSort(arr) {
    let n = arr.length
    let leaf = Math.floor(n / 2) - 1
    for (let i = leaf; i >= 0; i--) {
        heapify(arr, i, n)
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]
        heapify(arr, 0, i)
    }

    return arr
}

function heapify(arr, index, n) {
    let minIndex = index
    let left = 2 * index + 1
    let right = 2 * index + 2
    if (n > left && arr[left] > arr[minIndex]) {
        minIndex = left
    }
    if (n > right && arr[right] > arr[minIndex]) {
        minIndex = right
    }
    if (minIndex !== index) {
        [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]]
        heapify(arr, minIndex, n)
    }
}

console.log(heapSort([3, 52, 3, 62, 3234, 62, 3]))