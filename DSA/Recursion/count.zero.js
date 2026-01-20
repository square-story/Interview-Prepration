const arr = [3, 0, [0, 93, 5], [2, 0, 4], [3, [4, 6, 0]]]

function countZeros(arr, index = 0, count = 0) {
    if (arr.length < index) return count

    if (arr[index] == 0) {
        count++
    } else if (Array.isArray(arr[index])) {
        count = countZeros(arr[index], 0, count)
    }
    return countZeros(arr, index + 1, count)
}

console.log(countZeros(arr))