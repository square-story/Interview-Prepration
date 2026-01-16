// let arr = [2, 45, [3, 5, 3, [6, 3], 3, [6, 43, 6, 3, [5]], 3], 4]

// function flattern(arr) {
//     return arr.reduce((acc, curr) => {
//         if (Array.isArray(curr)) {
//             return acc.concat(flattern(curr))
//         } else {
//             return acc.concat(curr)
//         }
//     }, [])
// }

// console.log(flattern(arr))

const arr1 = [1, [2, 3], [4, [5, 6]], 7];

const flattern = function (arr, result = []) {
    for (let el of arr) {
        if (Array.isArray(el)) {
            let nestedArr = flattern(el)
            for (let el of nestedArr) {
                result[result.length] = el
            }
        } else {
            result[result.length] = el
        }
    }
    return result
}

const newArr = flattern(arr1)
console.log(newArr)