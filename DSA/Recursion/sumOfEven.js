function sumOfEvenNumber(arr, sum = 0) {
    if (!arr.length) return sum
    if (arr[0] % 2 == 0) {
        sum += arr[0]
    }
    return sumOfEvenNumber(arr.slice(1), sum)
}

console.log(sumOfEvenNumber([2, 4, 3, 6, 3, 6, 3, 53, 5, 3]))