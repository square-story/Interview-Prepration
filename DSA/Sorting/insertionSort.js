const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i - 1
        while (j >= 0 && current < array[j]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current
    }
    return array
}

console.log(insertionSort([1, 5, 7, 3, 2, 4]))