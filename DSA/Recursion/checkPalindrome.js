const checkPalindrome = (str) => {
    if (!str.length) return true
    str = str.toLowerCase()
    if (str[0] !== str[str.length - 1]) return false
    return checkPalindrome(str.slice(1, -1))
}

console.log(checkPalindrome("oLlo"))
