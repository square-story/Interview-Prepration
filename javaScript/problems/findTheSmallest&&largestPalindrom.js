//Find the smallest palindrom in a string
let str = 'araarattaatt'

//answer will be "ara"

const findShortestPalindromSubstring = (s) => {
    let minPal = null
    for (let index = 0; index < s.length; index++) {
        expand(index, index)
        expand(index, index + 1)
    }

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const curr = s.slice(left, right + 1)
            if (curr.length >= 2 && (minPal == null || curr.length < minPal.length)) {
                minPal = curr
            }
            left++
            right--
        }
    }

    return minPal

}


console.log(findShortestPalindromSubstring(str))


const findLongestPalindromSubString = str => {
    let maxPal = null
    for (let index = 0; index < str.length; index++) {
        expand(index, index)
        expand(index, index + 1)
    }

    function expand(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            let curr = str.slice(left, right + 1)
            if (maxPal === null || maxPal.length < curr.length) {
                maxPal = curr
            }

            right++
            left--
        }
    }
    return maxPal
}


console.log(findLongestPalindromSubString(str)) //araarattaatt answer:ttaatt

