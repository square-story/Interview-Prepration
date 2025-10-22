const str = '343231512322349'

function NonRepeating(str) {
    let map = new Map()
    for (let el of str) {
        map.set(el, (map.get(el) || 0) + 1)
    }

    return [...map].filter((item) => item[1] == 1)[0][0]
}

/**
 * 
 * @param {string} str 
 */
function nonRepeatingEffecient(str) {
    let map = {}
    for (let el of str) {
        map[el] = (map[el] || 0) + 1
    }
    for (let el of str) {
        if (map[el] === 1) {
            return el
        }
    }
    return -1
}
/**
 * 
 * @param {string} str 
 */
function usingInbuildMap(str) {
    let map = new Map()
    for (let el of str) map.set(el, (map.get(el) || 0) + 1)
    for (let el of str) if (map.get(el) === 1) return el
    return -1
}

console.log(NonRepeating(str))
console.log(nonRepeatingEffecient(str))
console.log(usingInbuildMap(str))