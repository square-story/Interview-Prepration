const Stack = require('./index')


const validParam = (word) => {
    const stack = new Stack()
    const check = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for (let el of word) {
        if (el === '{' || el === '(' || el === '[') {
            stack.push(el)
        } else if (el === '}' || el === ')' || el === ']') {
            if (stack.isEmpty() || stack.pop() !== check[el]) {
                return false
            }
        }
    }
    return stack.isEmpty()
}

console.log(validParam('{}[]{[]}'))

