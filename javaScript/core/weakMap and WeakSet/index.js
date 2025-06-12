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