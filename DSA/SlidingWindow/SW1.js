/**
 * Given an array of integers nums and an integer k,
 * find the maximum sum of any contiguous subarray of size k.
 */

/**
 * Input: nums = [2, 1, 5, 1, 3, 2], k = 3
 * Output: 9
 * Explanation: Subarray [5,1,3] has the maximum sum = 9.
 */

//brute force solution

const input = [2, 1, 5, 1, 3, 2]
const k = 3

function MaximumSubArray(arr, k) {
    let max = -Infinity
    for (let i = 0; i < arr.length - k; i++) {
        let value = 0
        for (let j = i; j < i + k; j++) {
            value += arr[j]
        }
        max = Math.max(value, max)
    }
    return max
}

console.log(MaximumSubArray(input, k))


// sliding window solution

/**
 * 
 * @param {number[]} arr 
 * @param {number} k 
 */
function MaximumSubArraySW(arr, k) {
    let windowSum = 0
    let max = -Infinity
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }

    max = windowSum

    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i]
        max = Math.max(windowSum, max)
    }
    return max
}

console.log(MaximumSubArraySW(input, k))