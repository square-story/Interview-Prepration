const insertionSort = (arr) => {
    let i = 1;
    while (i < arr.length) {
        let j = i - 1;
        let value = arr[i]
        while (j >= 0 && value < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = value
        i++
    }
    return arr
}

console.log(insertionSort([2, 5, 3, 6, 2, 4]))