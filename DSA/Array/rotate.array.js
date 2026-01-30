const arr = [1, 2, 3, 4, 5]
const k = 2
//[4, 5, 1, 2, 3]
function rotateArray(arr, k) {
    k = k % arr.length
    const reverse = (left, right) => {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    reverse(0, arr.length - 1)
    reverse(0, k - 1)
    reverse(k, arr.length - 1)
    return arr
}

console.log(rotateArray(arr, k))
