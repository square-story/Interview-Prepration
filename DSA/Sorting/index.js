const arr = [2, 5, 2, 4, 5, 4, 575, 34, 643, 5, 3, 6353, 435, 44]

const bubbleSort = arr => {
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

const selectionSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [array[minIndex], array[i]] = [array[i], array[minIndex]]
        }
    }

    return array
}


console.log(selectionSort(arr))

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = value
    }

    return arr
}


console.log(insertionSort(arr))


const quickSort = arr => {
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


const mergeSort = arr => {
    if (arr.length < 2) return arr
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    const merge = (left, right) => {
        let result = []
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }
        return [...result, ...left, ...right]
    }
    return merge(mergeSort(left), mergeSort(right))
}



console.log(mergeSort(arr));