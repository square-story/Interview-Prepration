// function reverseOddElements(arr) {
//     let odd = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             odd.push(arr[i])
//         }
//     }
//     let reversedOdd = reverseArray(odd)
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             arr[i] = reversedOdd[count]
//             count++
//         }
//     }
//     return arr
// }

// function reverseArray(arr) {
//     let left = 0
//     let right = arr.length - 1
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++
//         right--
//     }
//     return arr
// }

const reverseOddElements = arr => {
    let left = 0, right = arr.length - 1
    while (left < right) {
        while (left < right && arr[left] % 2 == 0) left++
        while (left < right && arr[right] % 2 == 0) right--
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return arr
}

console.log(reverseOddElements([1, 2, 3, 4, 5, 6, 7]))

