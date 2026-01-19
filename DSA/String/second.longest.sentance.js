//find the second longest word in sentence 


const str = "find the second longest word in sentence"

function findSecondLongest(str) {
    let longest = ""
    let secondLongest = ""
    let word = ""
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === " " || i === str.length) {
            if (word.length > longest.length) {
                secondLongest = longest
                longest = word
            } else if (secondLongest.length < word.length && secondLongest.length !== longest.length) {
                secondLongest = word
            }
            word = ""
        } else {
            word += str[i]
        }
    }
    return secondLongest
}

console.log(findSecondLongest(str))