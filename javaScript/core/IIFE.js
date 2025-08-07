const something = (function () {
    let count = 0
    function increment() {
        return count++
    }
    function decrement() {
        return count--
    }
    return {
        increment,
        decrement,
        reset() {
            return count = 0
        }
    }
})()

console.log(something.increment())
console.log(something.increment())
console.log(something.increment())
console.log(something.reset())
console.log(something.decrement())
console.log(something.decrement())
console.log(something.decrement())