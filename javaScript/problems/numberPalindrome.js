const checkNumberPalindrom = (num) => {
    return num.toString() === num.toString().split('').reverse().join('')
}

const checkNumberPalindromWithoutAnyInbuildMethod = (num) => {
    let stringVersion = num.toString()
    let left = 0, right = stringVersion.length - 1
    while (left < right) {
        if (stringVersion[left] !== stringVersion[right]) return false
        left++
        right--
    }
    return true
}

console.log(checkNumberPalindrom(4563))
console.log(checkNumberPalindromWithoutAnyInbuildMethod(123321))
