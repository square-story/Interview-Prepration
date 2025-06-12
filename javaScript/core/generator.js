function* generator(value) {
    let count = 1
    while (true) {
        yield value * count
        count++
    }
}


const something = generator(3)

console.log(something.next().value)
console.log(something.next().value)
console.log(something.next().value)
console.log(something.next().value)
console.log(something.next().value)