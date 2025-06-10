const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    const arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

const arr = [2, 6, 7, 8, 3, 4]

console.log(mergeSort(arr))