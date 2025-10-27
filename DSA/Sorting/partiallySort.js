const arr = [1, 3, 56, 35, 2]
// output: [1,3,2,35,56]


/**
Elements at even indexes (0, 2, 4, ...) are sorted (ascending),

Elements at odd indexes stay in their original positions.

The sorting should be done via merge sort or quick sort.
 */


const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    function merge(left, right) {
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
    return merge(left, right)
}


const something = (arr) => {
    const odd = arr.filter((_, idx) => idx % 2 == 0)
    const sortedOdd = mergeSort(odd)
    let oddIndex = 0
    return arr.map((item, idx) => {
        if (idx % 2 == 0) {
            return sortedOdd[oddIndex++]
        } else {
            return item
        }
    })
}


console.log(mergeSort(arr))
console.log(something(arr))
