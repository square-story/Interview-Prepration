const checkPalindrome = (str) => {
    if (!str.length) return true
    str = str.toLowerCase()
    if (str[0] !== str[str.length - 1]) return false
    return checkPalindrome(str.slice(1, -1))
}

console.log(checkPalindrome("oLlo"))


function checkPalindrom(str, i = 0) {
    if (i >= str.length / 2) return true
    if (str[i] !== str[str.length - 1 - i]) {
        return false
    }
    return checkPalindrom(str, i + 1)
}

console.log(checkPalindrom("oLlo"))
