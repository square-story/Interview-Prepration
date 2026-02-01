//⁠PascalCase to snake_case

/**
 * 
 * @param {String} str 
 */
function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => "_" + letter.toLowerCase().replace(/^_/, ''))
}

console.log(toSnakeCase('somethingIsOff'))

console.log("myLabIsNotGettingOpen".replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase())

