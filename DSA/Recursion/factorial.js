/**
 * 
 * @param {Number} num
 * the product of all positive integers less than or equal to n 
 * For example, 5! (5 factorial) is 5 * 4 * 3 * 2 * 1 = 120. 
 */

const factorial = (num) => {
    if (num <= 1) return num
    return num * factorial(num - 1)
}

console.log(factorial(5))
