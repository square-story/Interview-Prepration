const arr = ['blue', 'green', 'yellow', 'white', 'black', 'yellow', 'green', 'black', 'orange', 'blue'];

/**
 * 
 * @param {string[]} arr 
 * @returns {string[]}
 */

function findUnique(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                flag = false
                break;
            }
        }

        if (flag) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(findUnique(arr))