
console.log(longestNonRepeatingSubstring("abcabcbb"));
// "abc"

console.log(longestNonRepeatingSubstring("pwwkew"));
// "wke"

console.log(longestNonRepeatingSubstring("bbbbb"))
// "b"

/**
 * 
 * @param {string} str 
 * @returns {string} longestStr
 */
function longestNonRepeatingSubstring(str) {
    let set = new Set()
    let left = 0
    let maxLen = 0
    let start = 0
    for (let right = 0; right < str.length; right++) {

        while (set.has(str[right])) {
            set.delete(str[left])
            left++
        }

        set.add(str[right])

        if (right - left + 1 > maxLen) {
            maxLen = right - left + 1
            start = left
        }
    }

    return str.slice(start, maxLen + start)
}