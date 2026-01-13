function removeDuplicateFromUnsorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                for (let k = j; k < arr.length - 1; k++) {
                    arr[k] = arr[k + 1]
                }
                arr.length--
                j--
            }
        }
    }
    return arr
}

const arr = [1, 2, 4, 5, 1, 2, 3]

console.log(removeDuplicateFromUnsorted(arr))