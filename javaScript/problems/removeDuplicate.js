const arr = [3, 4, 3, 4, 43, 65, 4, 3, 6]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length;) {
        if (arr[j] == arr[i]) {
            for (let k = j; k < arr.length - 1; k++) {
                arr[k] = arr[k + 1]
            }
            arr.length--
        } else {
            j++
        }
    }
}

console.log(arr)