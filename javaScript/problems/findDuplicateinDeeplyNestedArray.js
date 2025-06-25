const input = [[4, 2], [5, 6], [[6, 1], [6, 1], 8]];

//Answer should be [[6,1]]

let seen = new Map()
let duplicates = []

function watchThis(arr) {
    for (let el of arr) {
        if (Array.isArray(el)) {
            let key = JSON.stringify(el)
            if (seen.has(key)) seen.set(key, seen.get(key) + 1)
            else seen.set(key, 1)
            watchThis(el)
        }
    }
}

watchThis(input)

for (let [key, value] of seen.entries()) {
    if (value > 1) duplicates.push(JSON.parse(key))
}

console.log(duplicates)