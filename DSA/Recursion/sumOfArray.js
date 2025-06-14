const arr = [2, 6, 2, 5, 3, 56, 3]

function sumOfArray(arr) {
    if (!arr.length) return 0
    return arr[0] + sumOfArray(arr.splice(1))
}

console.log(sumOfArray(arr))