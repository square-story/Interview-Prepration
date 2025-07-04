function deepCopy(value) {
    if (value === null || typeof value !== 'object') return value
    if (Array.isArray(value)) return value.map(deepCopy)

    let copied = {}
    for (const el in value) {
        if (value.hasOwnProperty(el)) {
            copied[el] = deepCopy(value[el])
        }
    }
    return copied
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
