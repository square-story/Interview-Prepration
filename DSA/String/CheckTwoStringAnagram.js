let str1 = "gum"
let str2 = "mug"

function getHash(str) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += (str.charCodeAt(i) * str.charCodeAt(i) * str.charCodeAt(i) * str.charCodeAt(i))
    }
    return sum
}


/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
function checkAna(str1, str2) {
    if (str1.length !== str2.length) return false
    return getHash(str1) == getHash(str2)
}

console.log(checkAna(str1, str2));