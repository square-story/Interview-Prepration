const Input1 = [4, 5, 2, 25]
// Output: [5, 25, 25, -1]

const Input2 = [13, 7, 6, 12]
// Output: [-1, 12, 12, -1]

function nextGreatElement(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let replaceAmount = -1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                replaceAmount = arr[j]
                break;
            }
        }
        result.push(replaceAmount)
    }
    return result
}

console.log(nextGreatElement(Input1))
console.log(nextGreatElement(Input2))