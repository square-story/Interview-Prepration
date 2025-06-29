let arr = [{ "a": [2, 5, 2, 6] }, { "b": [2, 47, 7, 5] }, { "c": [3, 6, 22, 6] }]


let totalSum = arr.reduce((acc, curr) => {
    let objSum = Object.values(curr)[0]
    return acc += objSum.reduce((acc, curr) => acc += curr, 0)
}, 0)


console.log(totalSum)