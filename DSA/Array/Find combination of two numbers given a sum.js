//Find combination of two numbers given a sum


/**
 * @param {number[]} arr
 * @param {number} sum
 * @returns {number}
 */

function combination(arr, sum) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(sum - arr[i])) {
            return [i, map.get(sum - arr[i])]
        } else {
            map.set(arr[i], i)
        }
    }
}

const arr = [2, 3, 54, 4, 6]

const sum = 6;

console.log(combination(arr, sum))

