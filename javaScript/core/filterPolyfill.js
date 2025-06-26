let arr = require('../problems/randomArray')

console.log('the Orginal Array:', arr)

Array.prototype.myFilter = function (callback, intialValue) {
    if (typeof callback !== 'function') throw new TypeError(callback + "is not function")
    const arr = this
    const length = arr.length
    const result = []
    for (let i = 0; i < length; i++) {
        if (i in arr) {
            const value = arr[i]
            if (callback.call(intialValue, value, i, arr)) {
                result.push(value)
            }
        }
    }

    return result
}


console.log("The Modified Array:", arr.myFilter(item => item % 2 == 0))

const something = { some: 2 }

console.log("The modified with odd number", arr.myFilter(function (item) {
    return item % this.some === 1
}, something))