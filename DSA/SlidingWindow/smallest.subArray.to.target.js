//Smallest subarray sum ≥ target

const arr = [2, 3, 1, 2, 4, 3]
const target = 7

function findSmallest(arr, target) {
    let subSum = 0
    let window = []
    for (let i = 0; i < arr.length; i++) {
        if (subSum <= target) {
            window.push(arr[i])
            subSum += arr[i]
        } else {

        }
    }
}

console.log(findSmallest(arr, target))