//WeakSet and WeakMap are special collections in JavaScript that hold weak references to objects. 
// This means that if an object stored in a WeakSet or as a key in a WeakMap is no longer referenced anywhere else in your code,
//  it can be garbage collected. 

//WeakMap
//Purpose: Stores key-value pairs, where keys must be objects and values can be any data type. 

//WeakSet
//Purpose: Stores a collection of objects where each object can only appear once. 

/**
 * 
Key Differences from Set and Map:
    TODO
    Weak References: WeakSet and WeakMap do not prevent garbage collection of their keys.
    Limited Methods: They do not have methods like keys(), values(), or forEach(), because the contents can be garbage collected at any time.
    Keys: WeakMap keys must be objects.
    Iterable: WeakSet and WeakMap are not iterable.
 */


const weakmap = new WeakMap()
const normalMap = new Map()

normalMap.set('something', 'something more')

console.log(normalMap.get('something'))

let something = { name: "SADIK" }

weakmap.set(something, 'something new happen') //Keys must be objects (not primitives).

console.log(weakmap.get(something))

something = null // Now the object has no other reference

//it will garbage collected the weakmap ref

console.log('getting ref:', weakmap.get(something))

//A WeakSet is a collection of unique objects.

const normalSet = new Set()
const weakSet = new WeakSet()

let somethingNewSet = { name: "Ashique" }


normalSet.add("something")

console.log(normalSet)

normalSet.add(somethingNewSet)
console.log(normalSet)

weakSet.add(normalSet)

console.log(weakSet.has(normalSet))

somethingNewSet = null //object can now be garbage collected


/**
 * ❗ Why “Weak”?
Because they don’t prevent garbage collection. They do not keep strong references to their keys/values. This means:

You cannot iterate over WeakMap or WeakSet

No .size, .keys(), .values(), .entries() — only .get(), .set(), .has(), .delete() for WeakMap and .add(), .has(), .delete() for WeakSet
 */