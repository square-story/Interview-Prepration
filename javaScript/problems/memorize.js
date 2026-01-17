function memo(fun) {
    const cache = new Map()
    return function (...arg) {
        const key = JSON.stringify(arg);
        if (cache.has(key)) {
            return cache.get(key)
        }

        const value = fun.apply(this, arg)
        cache.set(key, value)
        return value
    }
}

function fibnachi(value) {
    if (value <= 1) return value
    return fibnachi(value - 1) + fibnachi(value - 2)
}

const memorizeFib = memo(fibnachi)

console.log(memorizeFib(8))
console.log(memorizeFib(8))