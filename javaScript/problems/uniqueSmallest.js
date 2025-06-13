const arr = [2, 6, 8, 5, 4, 3, 6, 3, 2, 4, 6, 6, 44, 4, 63, 23, 453, 4, 53, 435, 745, 3, 45345, 734, 234, 54]

const map = new Map()
for (let el of arr) {
    map.set(el, (map.get(el) || 0) + 1)
}

console.log([...map.entries()].filter(item => item[1] == 1).reduce((acc, curr) => {
    if (acc[0] > curr[0]) acc = curr
    return acc
}, [Infinity, Infinity])[0])