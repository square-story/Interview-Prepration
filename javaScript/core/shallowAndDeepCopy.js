const orginalShall = {
    a: "some",
    b: "thing"
}

const copyCat = { ...orginalShall }

console.log(copyCat)
copyCat.a = 'something new'

console.log(orginalShall)
console.log(copyCat)

//Shallow means nested objects are still referenced:

//example

const user = { name: "Sadik", info: { age: 22 } };
const copy = { ...user };
copy.info.age = 99;
console.log(user.info.age); // ❗ 99



//Deep copy(Fix nested mutation)

/**
 * ✅ Handles objects, arrays, nested values, and dates
 * ❌ Not supported in older environments
 */
const deepCopyObj = structuredClone(user)

/**
 * ✅ Works in all environments
 * ❌ Loses functions, undefined, Date, Map, etc.
 */

const deepCopyJsonMethod = JSON.parse(JSON.stringify(user))


deepCopyJsonMethod.info.age = 99;
deepCopyObj.info.age = 78
console.log(user.info.age);

