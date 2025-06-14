const array = require('../../javaScript/problems/randomArray')
const Stack = require('./index')

const stack = new Stack()
array.forEach(item => stack.push(item))

console.log('before sort')
stack.display()
console.log('after sorted array')
sortStack(stack)
stack.display()

function sortStack(stack) {
    let temp = new Stack()
    while (!stack.isEmpty()) {
        let curr = stack.pop()
        while (!temp.isEmpty() && curr > temp.peek()) {
            stack.push(temp.pop())
        }
        temp.push(curr)
    }

    while (!temp.isEmpty()) {
        stack.push(temp.pop())
    }
}