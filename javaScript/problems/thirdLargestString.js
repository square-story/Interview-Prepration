/**
 * find the third longest word in a sentance without using inbult split function
 */


function thirdLongest(str) {
    let arr = []
    let newStr = ''
    for (let el of str) {
        if (el === ' ') {
            arr.push(newStr)
            newStr = ''
        } else {
            newStr += el
        }
    }

    const { thirdLong } = arr.reduce((acc, curr) => {
        if (curr.length > acc.longest) {
            acc.thirdLong = acc.secondLongest;
            acc.secondLongest = acc.longest;
            acc.longest = curr.length
        } else if (curr.length > acc.secondLongest && curr.length !== acc.longest) {
            acc.thirdLong = acc.secondLongest
            acc.secondLongest = acc.thirdLong
        } else if (curr.length > acc.thirdLong && curr.length !== acc.secondLongest) {
            acc.thirdLong = curr.length
        }

        return acc
    }, { longest: -Infinity, secondLongest: -Infinity, thirdLong: -Infinity })


    return thirdLong

}


console.log(thirdLongest('my name is sadik and i\'m from malappuram'))