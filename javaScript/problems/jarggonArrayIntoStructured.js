const arr = [[1, 2], [4, 5], [7, 6], [6, 3]]
//expected out [1,4,2,5,7,6,6,3]

let result = []

for (let i = 0; i < arr.length - 1; i += 2) {
    result.push(arr[i][0], arr[i + 1][0])
    result.push(arr[i][1], arr[i + 1][1])
}


console.log(result)