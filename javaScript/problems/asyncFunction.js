const fn1 = new Promise((res) => setTimeout(() => {
    res(5)
}, 1000))
const fn2 = new Promise((res) => setTimeout(() => {
    res(7)
}, 2000))
const fn3 = new Promise((res) => setTimeout(() => {
    res(8)
}, 2000))

const fallout = (a) => a.reject


const result = async () => {
    try {
        const sum = await Promise.all([fn1, fn2, fn3])
        return sum.reduce((acc, curr) => acc += curr, 0)
    } catch (error) {
        console.error(error)
    }
}

result().then(console.log)


