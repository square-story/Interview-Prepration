const arr = [2, 5, 7, 4, 7, 4, 3]
let value = 0
for (let el of arr) {
    if (el % 2 == 0) {
        value += el
    }
}

console.log(Math.floor(value / 2))