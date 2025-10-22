const arr = [0, 1, 0, 3, 12];

function moveZeros(arr) {
    let result = []
    let count = 0
    for (let el of arr) {
        if (el === 0) {
            count++
        } else {
            result.push(el)
        }
    }
    while (count--) {
        result.push(0)
    }

    return result
}

/**
 * 
 * @param {number[]} arr 
 */
function moveZerosInplace(arr) {
    let inCount = 0
    for (let el of arr) {
        if (el !== 0) {
            arr[inCount++] = el
        }
    }
    while (inCount < arr.length) {
        arr[inCount++] = 0
    }
    return arr
}

console.log(moveZeros(arr)); // [1, 3, 12, 0, 0]
console.log(moveZerosInplace(arr)); // [1, 3, 12, 0, 0]