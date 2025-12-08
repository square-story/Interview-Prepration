const arr = [...new Set(Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)))]
const n = 10
/**
 * 
 * @param {number[]} arr 
 * @param {number} n 
 */
function findMissingNumbers(arr, n) {
    let set = new Set(arr)
    let result = []
    for (let i = 0; i < n; i++) {
        if (!set.has(i)) {
            result.push(i)
        }
    }
    return { result, arr }
}

console.log(findMissingNumbers(arr, n))