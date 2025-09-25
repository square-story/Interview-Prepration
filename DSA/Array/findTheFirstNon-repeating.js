let arr = [2, 432, 63, 2, 4, 563, 2, 52]

function findTheFirstNonRepeating(arr) {
    let map = {}
    for (let el of arr) {
        map[el] = (map[el] | 0) + 1
    }

    for (let el of arr) {
        if (map[el] == 1) {
            return el
        }
    }
    return -1
}

console.log(findTheFirstNonRepeating(arr))