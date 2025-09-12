//⁠PascalCase to snake_case

/**
 * 
 * @param {String} str 
 */
function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => "_" + letter.toLowerCase().replace(/^_/, ''))
}

console.log(toSnakeCase('somethingIsOff'))

