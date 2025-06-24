//Find the smallest palindrom in a string
let str = 'araarattaatt'

//answer will be "ara"

const findShortestPalindromSubstring = (s) => {

    let minPalindrome = null;

    for (let i = 0; i < s.length; i++) {
        expand(i, i);       // odd
        expand(i, i + 1);   // even
    }

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const curr = s.slice(left, right + 1);
            if (curr.length >= 2 && (minPalindrome === null || curr.length < minPalindrome.length)) {
                minPalindrome = curr;
            }
            left--;
            right++;
        }
    }

    return minPalindrome;
}


console.log(findShortestPalindromSubstring(str))


