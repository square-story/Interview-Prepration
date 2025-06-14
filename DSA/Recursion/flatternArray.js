const array = [3, 6, [6, 4, [4, 63], 3, 6, [4, [4, 6, 3], 6, 3]]]

const flatternArray = (array) => {
    return array.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flatternArray(curr))
        } else {
            return acc.concat(curr)
        }
    }, [])
}

console.log(flatternArray(array))