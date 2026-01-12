/**
 * a series of numbers where 
 * each number is the sum of the two preceding numbers,
 *  starting with 0 and 1
 */

//Write a recursive function to find the nth Fibonacci number.

// const Fibonacci = (n) => {
//     return n <= 1 ? n : Fibonacci(n - 1) + Fibonacci(n - 2)
// }

// console.log(Fibonacci(6))

//print Fibonacci series under a limit using recursion



const printFib = (limit) => {
    let result = []
    while (limit > 1) {
        result.unshift(getFib(limit))
        limit--
    }
    return result.join(',')
}

const getFib = (n) => {
    return n < 2 ? n : getFib(n - 1) + getFib(n - 2)
}

console.log(printFib(20))

const FibSequence = (num) => {
    let fact = [0, 1]
    for (let i = 2; i <= num; i++) {
        fact[fact.length] = fact[i - 2] + fact[i + -1]
    }
    return fact
}

console.log(FibSequence(5))