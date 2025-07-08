function print2(n) {
    let value = ''
    let count = n
    for (let i = 0; i < n; i++) {
        for (let j = count; j >= 1; j--) {
            value += (j + i) + ' '
        }
        count--
        value += '\n'
    }

    return value
}


console.log(print2(10))