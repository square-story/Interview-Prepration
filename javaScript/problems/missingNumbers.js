const arr = [2, 4, 6, 7, 8, 9, 11]

const set = new Set(arr)

let result = []


const maxValue = Math.max(...arr)

for (let i = 0; i < maxValue; i++) {
    if (!set.has(i)) {
        result.push(i)
    }
}

console.log(result)