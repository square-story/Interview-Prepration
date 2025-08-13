/**
0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 0 0 0 0 0
0 0 0 2 1 2 0 0 0 0
0 0 3 2 1 2 3 0 0 0
0 4 3 2 1 2 3 4 0 0
5 4 3 2 1 2 3 4 5 0
6 5 4 3 2 1 2 3 4 5 6
 */

let value = ''

for (let i = 0; i < 7; i++) {
    let demoValue = i + 1
    for (let j = 0; j < 11; j++) {
        let center = Math.floor(11 / 2)
        if (j >= center + i || j <= center - i) {
            value += '0 '
        } else {
            if (j <= center) {
                demoValue--
            } else {
                demoValue++
            }
            value += demoValue + ' '
        }
    }
    value += '\n'
}

console.log(value)