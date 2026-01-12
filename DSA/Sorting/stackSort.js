/**
 * 
 * @param {number[]} stack 
 */
function stackSort(stack) {
    let tempStack = []
    while (stack.length) {
        let current = stack.pop()
        while (tempStack.length && tempStack[tempStack.length - 1] < current) {
            stack.push(tempStack.pop())
        }
        tempStack.push(current)
    }

    while (tempStack.length) {
        stack.push(tempStack.pop())
    }
    return stack
}

const arr = [3, 63, 4, 62, 16, 7, 41, 7]

console.log(stackSort(arr))