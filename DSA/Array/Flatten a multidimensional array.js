let arr = [2, 45, [3, 5, 3, [6, 3], 3, [6, 43, 6, 3, [5]], 3], 4]

function flattern(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flattern(curr))
        } else {
            return acc.concat(curr)
        }
    }, [])
}

console.log(flattern(arr))

/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function flatternWithInbuild(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let nestedArr = flatternWithInbuild(arr[i])
            for (let j = 0; j < nestedArr.length; j++) {
                result[result.length] = nestedArr[j]
            }
        } else {
            result[result.length] = arr[i]
        }
    }
    return result
}
console.log(flatternWithInbuild(arr))
