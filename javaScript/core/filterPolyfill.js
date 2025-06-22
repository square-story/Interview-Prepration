let arr = require('../problems/randomArray')

console.log('the Orginal Array:', arr)

Array.prototype.myFilter = function (callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) result.push(this[i])
    }
    return result
}


console.log("The Modified Array:", arr.myFilter(item => item % 2 == 0))