
//Max sum of subarray of size k.
const arr = [2, 1, 5, 1, 3, 2]
const k = 3

let sum = 0
let max = 0
for (let i = 0; i < k; i++) {
    sum += arr[i]
}

max = sum

for (let i = k; i < arr.length; i++) {
    let left = arr[i - k]
    let right = arr[i]
    sum = sum - left + right
    max = Math.max(sum, max)
}

console.log(max)
