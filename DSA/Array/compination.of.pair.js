//find combination of pairs of number from an array give 4
const arr = [1, 2, 3, 4, 0, -1, 5]
let result = []
let set = new Set()
let target = 4
for (let el of arr) {
    let diff = target - el
    if (set.has(diff)) {
        result.push([diff, el])
    } else {
        set.add(el)
    }
}

console.log(result)
