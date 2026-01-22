const Stack = require('./index')

const stack = new Stack()
const arr = [3, 63, 56, 6, 2]

arr.forEach(item => stack.push(item))

/**
 * 
 * @param {Stack} stack 
 * @param {number} index 
 */
function removeMiddle(stack, size = stack.getSize()) {
    let temp = new Stack()
    let mid = Math.floor(size / 2)
    for (let i = 0; i < mid; i++) {
        temp.push(stack.pop())
    }
    let middle_element = stack.pop()
    while (!temp.isEmpty()) {
        stack.push(temp.pop())
    }

    return { stack, middle_element }
}

console.log(removeMiddle(stack))