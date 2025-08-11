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