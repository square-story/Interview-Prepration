/**
 * A subarray is a part of an array taken contiguously (no skipping elements).

Example:
Array: [1, 3, 2, 4, 5]
Possible subarrays: [1, 3], [3, 2, 4], [4, 5], etc.
[1, 2, 5] is not a subarray because the elements are not next to each other.

 */

let arr = [1, 2, 2, 3, 4, 5, 1, 2, 3]
//answer: [2, 3, 4, 5]

function MaxSub(arr) {
    const result = []
    let subArray = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < arr[i + 1]) {
            subArray.push(element)
        } else {
            result.push(subArray)
            subArray = []
        }
    }
    let max = -Infinity

    return result.reduce((acc, curr) => {
        if (curr.length > max) {
            max = curr.length
            acc = curr
        }
        return acc
    }, [])
}


console.log(MaxSub(arr))