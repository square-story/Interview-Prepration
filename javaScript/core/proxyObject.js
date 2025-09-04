/**
 * A Proxy object in JavaScript allows you to create a custom behavior for fundamental operations on objects.
 * That means you can intercept and redefine how properties are accessed, set, deleted, enumerated, etc.
 */


const target = {
    name: 'Sadik',
    age: 25,
    ageGroup: 'adult'
};

const handler = {
    get(target, prop) {
        console.log(`Property "${prop}" has been accessed`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Property "${prop}" set to "${value}"`);
        if (prop === 'age' && (typeof value !== 'number' || value <= 0)) {
            throw new Error(`The ${prop} only contain Positive Number type`)
        }

        if (prop === 'age') {
            if (value >= 18) {
                target['ageGroup'] = 'adult'
            } else {
                target['ageGroup'] = 'minor'
            }
        }

        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);     // logs the get trap
proxy.age = 14;
// proxy.age = 0;      
console.log(proxy.age);      // logs the get trap again

console.log(proxy.ageGroup)


/**
| Trap               | Description                            | Example              |
| ------------------ | -------------------------------------- | -------------------- |
| `get()`            | Intercept property access              | `proxy.name`         |
| `set()`            | Intercept property assignment          | `proxy.age = 30`     |
| `has()`            | Intercept `in` operator                | `'name' in proxy`    |
| `deleteProperty()` | Intercept `delete` operation           | `delete proxy.name`  |
| `ownKeys()`        | Intercept `Object.keys()` / `for...in` | `Object.keys(proxy)` |
 */