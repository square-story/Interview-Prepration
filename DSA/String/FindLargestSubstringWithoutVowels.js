const str = 'helloworld'

function largeSubStringWithoutVowels(str) {
    let set = new Set(['a', 'e', 'i', 'o', 'u'])
    let largest = ''
    let value = ''
    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            if (value.length > largest.length) {
                largest = value
            }
            value = ''
        } else {
            value += str[i]
        }
    }

    if (value.length > largest.length) {
        largest = value
    }

    return largest
}

console.log(largeSubStringWithoutVowels(str))