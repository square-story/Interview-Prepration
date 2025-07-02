function sumOfOddNumber(arr) {
    let sum = 0
    for (let el of arr) {
        if (Array.isArray(el)) {
            sum += sumOfOddNumber(el)
        } else if (el % 2 == 1) {
            sum += el
        }
    }

    return sum
}

const arr = [1, 2, [6, 4, [8, 9], 5], 3]


console.log(sumOfOddNumber(arr))

console.log(arr.flat(Infinity).filter(item => item % 2 == 1).reduce((acc, curr) => acc += curr, 0))


