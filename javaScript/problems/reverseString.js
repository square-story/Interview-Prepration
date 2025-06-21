const str = "Hello, World!";

function reverseString(s) {
    if (!s.length) return ''
    return reverseString(s.slice(1)) + s[0]
}


function reverseEven(str) {
    str = str.split(' ')
    const result = []
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (i % 2 == 0) {
            result.unshift(reverseString(element))
        } else {
            result.unshift(element)
        }
    }
    return result.join(' ')
}



console.log(reverseEven(str))