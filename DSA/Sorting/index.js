const arr = [2, 56, 6, 8, 7, 3, 5, 73]
const bubbleSort = (arr) => {
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


console.log(bubbleSort(arr))

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

console.log(selectionSort(arr))


const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i - 1
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current
    }

    return array
}

console.log(insertionSort(arr))


const quickSort = (arr) => {
    if (arr.length < 2) return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr))


const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right]
}

console.log(mergeSort(arr))