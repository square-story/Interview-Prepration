/**
 * 
 * @param {string} str 
 * @param {string} char 
 * @returns {string}
 */

function removeChar(str, char) {
    if (!str.length) return ''
    if (str[0] == char) {
        return removeChar(str.slice(1), char)
    } else {
        return str[0] + removeChar(str.slice(1), char)
    }
}

console.log(removeChar('sadkkkik', 'k'))