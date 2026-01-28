console.log(reverseEachWord("hello world"));
// olleh dlrow

console.log(reverseEachWord("i love javascript"));
// i evol tpircsavaj


function reverseEachWord(str) {
    let result = ''
    let stack = []
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == " " || i == str.length) {
            while (stack.length) {
                result += stack.pop()
            }
            result += ' '
        } else {
            stack.push(str[i])
        }
    }
    return result
}