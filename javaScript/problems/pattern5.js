let value = ''
let alph = 'a'.charCodeAt(0)
let count = 1
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < i + 1; j++) {
        if (i <= 0) {
            value += '* '
        } else if (j >= 1) {
            value += String.fromCharCode(alph)
            alph = alph + 1
        } else {
            value += count++
        }

    }
    value += '\n'
}

console.log(value)
