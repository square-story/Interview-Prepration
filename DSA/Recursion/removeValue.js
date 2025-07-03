/**
 *  ⁠remove the even duplicate number
 */

function removeEven(arr) {
    let seen = new Map()
    return arr.reduce((acc, curr) => {
        if (curr % 2 == 0) {
            if (!seen.has(curr)) {
                seen.set(curr, 0)
                acc.push(curr)
            }
        } else if (!seen.has(curr)) {
            acc.push(curr)
        }
        return acc
    }, [])
}

console.log(removeEven([2, 5, 2, 4, 2, 5, 3, 6, 56, 34]))