/**
 * First Non-Repeating Character in a String
 * Input:  "abaccdeff"
Output: "b"
 */

function nonRepeating(str) {
    let map = new Map()
    for (let el of str) {
        map.set(el, (map.get(el) || 0) + 1)
    }

    for (let [key, value] of map.entries()) {
        if (value === 1) {
            return key
        }
    }
    return "none"
}

console.log(nonRepeating("abaccdeff"))