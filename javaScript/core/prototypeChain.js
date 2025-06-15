const person = {
    status: true
}

const details = {
    __proto__: person,
    name: "sadik"
}

console.log(details.status)
console.log(details.__proto__)


//Constructor Functions & .prototype

function User(name) {
    this.name = name
}

User.prototype.age = 24
User.prototype.sayHello = function () {
    console.log(`Hey I'm ${this.name} and my age is ${this.age}`)
}

const person1 = new User('Sadik')

person1.sayHello()

/**
 * | Term         | Used On              | Purpose                                               |
| ------------ | -------------------- | ----------------------------------------------------- |
| `__proto__`  | Instance object      | Refers to the object's internal prototype             |
| `.prototype` | Constructor function | Used to define methods/properties shared by instances |

 */

function Animal() { }
Animal.prototype.canMove = true;

const cat = new Animal();
console.log(cat.__proto__ === Animal.prototype); // true
