const arr = [4, 6, 2, 3, 63, 43, 546, 323, 34, 2, 563, 4]


const findSecondLargest = arr => {
    return arr.reduce((acc, curr) => {
        if (acc.largest < curr) {
            acc.thirdLargest = acc.secondLargest
            acc.secondLargest = acc.largest
            acc.largest = curr
        } else if (acc.secondLargest < curr && curr !== acc.largest) {
            acc.thirdLargest = acc.secondLargest
            acc.secondLargest = curr
        } else if (acc.thirdLargest < curr && curr !== acc.secondLargest) {
            acc.thirdLargest = curr
        }
        return acc
    }, { largest: -Infinity, secondLargest: -Infinity, thirdLargest: -Infinity })
}

const { secondLargest, thirdLargest } = findSecondLargest(arr)

console.log(secondLargest, thirdLargest)