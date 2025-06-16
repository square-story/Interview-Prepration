const arr = [4, 6, 2, 3, 63, 43, 546, 323, 34, 2, 563, 4]


const findSecondLargest = arr => {
    return arr.reduce((acc, curr) => {
        if (acc.largest < curr) {
            acc.secondLargest = acc.largest
            acc.largest = curr
        } else if (acc.secondLargest < curr && curr !== acc.largest) {
            acc.secondLargest = curr
        }
        return acc
    }, { largest: -Infinity, secondLargest: -Infinity })
}

const { secondLargest } = findSecondLargest(arr)

console.log(secondLargest)