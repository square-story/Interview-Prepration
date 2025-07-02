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


console.log(sumOfOddNumber([1, 2, [6, 4, [8, 9], 5], 3]))


