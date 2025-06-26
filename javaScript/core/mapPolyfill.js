const arr = require('../problems/randomArray')
Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') throw new TypeError(callback + "not an function")
    let arr = this
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (i in arr) {
            result.push(callback.call(thisArg, arr[i], i))
        }
    }

    return result

}

console.log('Orginal Array:', arr)

console.log('After String Convertion:', arr.myMap(String))


//Extending Built-In

String.prototype.sayHello = function () {
    return "hello " + this
}

console.log("sadik".sayHello())


//Summery

/**
 * | Concept             | Meaning                                                    |
| ------------------- | ---------------------------------------------------------- |
| `prototype`         | Object used for inheritance by constructor functions       |
| `__proto__`         | Actual link to an object's prototype                       |
| Inheritance         | One object using properties/methods of another             |
| `extends` / `super` | Class-based inheritance keywords in ES6                    |
| `new`               | Creates a new object linked to the constructor’s prototype |

 */


const context = { multiple: 10 }

const something = arr.myMap(function (item, index, orginalArray) {
    return item * this.multiple
}, context)

console.log(something)
