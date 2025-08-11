/**
 * if you have [[1, 2, 3], [4, 9, 6], [7, 8, 5]], 9 is the largest.
 * If you remove the row, the result is [[1, 2, 3], [7, 8, 5]].
 */

let arr = [[1, 2, 3], [4, 9, 6], [7, 8, 5]]

function removeLargestSubArray(arr) {
    let largest = -Infinity
    let index;
    for (let i = 0; i < arr.length; i++) {
        let MAX = Math.max(...arr[i])
        if (MAX > largest) {
            index = i
            largest = MAX
        }
    }
    arr.splice(index, 1)
    return arr
}

console.log(removeLargestSubArray(arr))