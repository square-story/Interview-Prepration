Array.prototype.MyReduce = function (callback, intialValue) {
    if (typeof callback !== 'function') throw new TypeError(callback + " is not a function")
    let acc = intialValue;
    let arr = this
    let length = this.length
    let startIndex = 0
    if (acc === undefined) {
        if (length == 0) throw new TypeError('Reduce of empty array with no initial value')
        acc = arr[0]
        startIndex = 1
    }

    for (let i = startIndex; i < length; i++) {
        //the order is accoumilater, current value, index, orginal Array
        if (i in arr) acc = callback(acc, arr[i], i, arr)
    }
    return acc
}

const sum = (...values) => {
    return values.MyReduce((acc, curr) => {
        return acc += curr
    }, 0)
}


console.log(sum(2, 5, 3, 5, 2))




