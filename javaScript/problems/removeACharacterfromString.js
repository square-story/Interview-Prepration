function removeChar(str, removeIndex) {
    return str.slice(0, removeIndex) + str.slice(removeIndex + 1)
}


console.log(removeChar('sadik', 2))