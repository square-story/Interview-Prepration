//find the sum of even numbers from this array.
const arr = [1, 2, [6, 4, [8, 9], 5], 3]

function findEvenSum(arr, i = 0) {
    if (arr.length <= i) return 0
    let current = arr[i]
    let result = 0
    if (Array.isArray(current)) {
        result += findEvenSum(current, 0)
    } else if (current % 2 == 0) {
        result += current
    }
    return result + findEvenSum(arr, i + 1)
}

console.log(findEvenSum(arr))