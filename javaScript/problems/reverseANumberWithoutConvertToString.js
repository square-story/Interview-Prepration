const reverseNumber = (num) => {
    let reverse = 0
    while (num > 0) {
        let lastD = num % 10
        reverse = reverse * 10 + lastD
        num = Math.floor(num / 10)
    }
    return reverse
}

console.log(reverseNumber(3215))