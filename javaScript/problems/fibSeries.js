function fib(limit) {
    if (limit === 0) return []
    if (limit === 1) return [0]
    let result = [0, 1]
    for (let i = 2; i < limit; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}

console.log(fib(8))