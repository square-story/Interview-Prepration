const arr = require('../problems/randomArray')
Array.prototype.myMap = function (callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result
}

console.log(arr)

console.log(arr.myMap(String))


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
