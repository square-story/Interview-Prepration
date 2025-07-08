function print1(n) {
    let value = ""
    let count = 0
    for (i = 0; i <= n; i++) {
        for (let j = n; j > count; j--) {
            value += ' 0 '
        }
        for (let k = 0; k < count; k++) {
            value += ' 1 '
        }
        value += '\n'
        count++
    }
    return value
}

console.log(print1(5))