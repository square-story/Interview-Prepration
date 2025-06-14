const reverseString = (str) => {
    if (!str.length) return ""
    return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString("sadik"))
