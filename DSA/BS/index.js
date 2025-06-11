//using the itration method

const BSUsingIteration = (sortedArr, target) => {
    let left = 0
    let right = sortedArr.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (sortedArr[middle] == target) return middle
        if (sortedArr[middle] < target) left = middle + 1
        else right = middle - 1
    }
    return -1
}

console.log(BSUsingIteration([2, 5, 6, 7, 8, 8], 2))