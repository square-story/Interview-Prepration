//remove a char from string using recursion

function removeChar(str, removeValue) {
    if (!str.length) return ''
    if (str[0] === removeValue) {
        return removeChar(str.slice(1), removeValue)
    } else {
        return str[0] + removeChar(str.slice(1), removeValue)
    }
}


console.log(
    removeChar("sadiiiiiiiiiik", "i"))