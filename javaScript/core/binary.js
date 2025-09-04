const arr = [32, 5, 2, 54, 4, 2]

const some = arr.map(item => item.toString(2))

console.log(some)

console.log(some.map(item => parseInt(item, 2)))