function deepCopy(value) {
    if (value === null || typeof value !== 'object') return value; //handle null or primitive values
    if (Array.isArray(value)) return value.map(deepCopy); //handle arrays
    //handle plain object
    const copiedObject = {}
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            copiedObject[key] = deepCopy(value[key])
        }
    }

    return copiedObject
}


const original = {
    name: "Sadik",
    skills: ["JavaScript", "Node.js"],
    address: {
        city: "Tirur",
        pincode: 676101
    }
};

const copied = deepCopy(original);

copied.address.city = "Kozhikode";
copied.skills.push("MongoDB");

console.log(original.address.city); // Tirur
console.log(original.skills); // ["JavaScript", "Node.js"]
console.log(copied.skills); // ["JavaScript", "Node.js", "MongoDB"]
