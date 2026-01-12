const ab = [{ af: 3, l: 3 }, { af: 3, l: 3 }, { af: 3, l: 33 }, { af: 3, l: 3 }]
let result = 0
for (let el of ab) {
    result += el.af
    result += el.l
}

console.log(result)

function sum(ab, length, result = 0, i = 0) {
    if (length <= i) {
        return result
    }

    result += ab[i].af
    result += ab[i].l
    return sum(ab, length, result, i + 1)
}

console.log(sum(ab, ab.length))