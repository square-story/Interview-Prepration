const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
    return arr
}

console.log(selectionSort([3, 6, 2, 56, 7, 8, 12]))