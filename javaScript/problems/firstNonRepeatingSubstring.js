/**
 * Find the first substring of length k that does not repeat anywhere else in the string.
 * Input: str = "abcab", k = 2
Substrings of length 2: "ab", "bc", "ca", "ab"
Output: "bc" ✅
 */


function firstNonRepeatingSubstring(str, k) {
    let map = new Map()
    for (let i = 0; i <= str.length - k; i++) {
        let sub = str.substring(i, i + k)
        map.set(sub, (map.get(sub) || 0) + 1)
    }
    return [...map.entries()].filter(item => item[1] == 1)[0][0]
}


console.log(firstNonRepeatingSubstring(str = "abcab", k = 2))