Array.prototype.myReduce = function name(callback, intialValue) {
    if (typeof callback !== 'function') {
        throw new Error('callback need to be function')
    }
    let arr = this
    let n = this.length
    let acc = intialValue !== undefined ? intialValue : arr[0]
    for (let i = intialValue !== undefined ? 0 : 1; i < n; i++) {
        if (i in arr) {
            acc = callback(acc, arr[i], i, arr)
        }
    }
    return acc
}

console.log([1, 2, 4, 5].myReduce((acc, curr) => acc + curr, 0))