/**
1
1 1
1 1 1
1 1 1 1
1 1 1 1 1
 */


function pattern3(i = 0, value = '') {
    if (i >= 5) return value
    for (let j = 0; j < i + 1; j++) {
        value += '1 '
    }
    value += '\n'
    return pattern3(++i, value)
}

console.log(pattern3())