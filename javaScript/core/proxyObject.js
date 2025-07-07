/**
 * A Proxy object in JavaScript allows you to create a custom behavior for fundamental operations on objects.
 * That means you can intercept and redefine how properties are accessed, set, deleted, enumerated, etc.
 */


const target = {
    name: 'Sadik',
    age: 25
};

const handler = {
    get(target, prop) {
        console.log(`Property "${prop}" has been accessed`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Property "${prop}" set to "${value}"`);
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);     // logs the get trap
proxy.age = 30;              // logs the set trap
console.log(proxy.age);      // logs the get trap again
