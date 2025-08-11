/**
You’re given:

A sorted array (in ascending order).

It may contain duplicates.

A target element. 

*/



/**
 * 
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
Target: 4

Occurrences of 4: indices 1, 2, 3.

First occurrence → index 1

Last occurrence → index 3 ✅
 */

function findTheLastOccurence(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (arr[middle] === target) {
            while (arr[middle] === target) {
                middle++
            }
            return middle - 1;
        } else if (arr[middle] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
}

let arr = [2, 4, 4, 4, 5, 6, 6, 7]
console.log(findTheLastOccurence(arr, 6));