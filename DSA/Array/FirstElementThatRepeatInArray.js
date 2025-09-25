// You’re given an array of integers. Return the first element that repeats in the array.

// If no element repeats, return -1.

// Your solution should be better than O(n²).

// Example:

// Input: [2, 5, 1, 2, 3, 5, 1, 2, 4]

// Output: 2   // because 2 is the first repeating element


const input = [10, 2, 5, 1, 2, 3, 5, 1, 2, 4]

function getFirstElement(arr) {
    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return arr[i]
        } else {
            set.add(arr[i])
        }
    }
    return -1
}

console.log(getFirstElement(input))