const removeValue = (arr, value) => {
    if (!arr.length) return []
    let [first, ...rest] = arr
    if (first === value) {
        return removeValue(rest, value)
    } else {
        return [first, ...removeValue(rest, value)]
    }
}

console.log(removeValue([1, 4, 2, 4, 32, 4, 3, 2, 6], 4))