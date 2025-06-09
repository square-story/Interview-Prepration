function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
    } while (swapped);

    return arr
}

console.log(bubbleSort([1, 4, 6, 3, 2, 7, 2]))