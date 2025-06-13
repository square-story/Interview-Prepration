function primeCheck(num) {
    if (num <= 1 || typeof num !== "number") return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

console.log(primeCheck(2))
