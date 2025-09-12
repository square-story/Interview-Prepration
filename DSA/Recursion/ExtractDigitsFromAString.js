const extractDigit = (str) => {
    if (!str.length) return ''
    if (str.charCodeAt(0) < 48 || str.charCodeAt(0) > 57) {
        return extractDigit(str.slice(1))
    } else {
        return str[0] + extractDigit(str.slice(1))
    }
}

console.log(extractDigit('23fsdi9o324d'))