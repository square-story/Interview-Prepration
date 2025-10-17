let arr = [{ time: "3s" }, { time: NaN }, { time: "1h" }, { time: "2m" }]

arr.sort((a, b) => helper(a.time) - helper(b.time))

/**
 * 
 * @param {String} string 
 */
function helper(string) {
    if (!string) {
        return Infinity
    }
    if (string.includes('m')) {
        return parseInt(string, 10) * 60
    }
    if (string.includes("h")) {
        return parseInt(string, 10) * 24 * 60
    }
    if (string.includes("s")) {
        return parseInt(string, 10)
    }
    return -Infinity
}


console.log(arr)