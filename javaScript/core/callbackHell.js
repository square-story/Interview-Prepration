function sumOfTwo(value, callback) {
    setTimeout(() => {
        callback(value += 2)
    }, 1000);
}

function multipleOfTwo(value, callback) {
    setTimeout(() => {
        callback(value *= 2)
    }, 1000);
}

//Example of Callback Hell.
sumOfTwo(6, function (value) {
    multipleOfTwo(value, function (value) {
        console.log(value)
    })
})


//convert to promise

function sumOfTwoPromise(value) {
    return new Promise((res, rej) => setTimeout(() => {
        res(value += 2)
    }, 1000))
}

function multipleOfTwoPromise(value) {
    return new Promise((res, rej) => setTimeout(() => {
        res(value *= 2)
    }, 1000))
}

sumOfTwoPromise(6).then(item => multipleOfTwoPromise(item)).then(console.log).catch(console.error).finally(() => console.log('done'))


//convert to async/await

async function something() {
    try {
        const result1 = await sumOfTwoPromise(6)
        const result2 = await multipleOfTwoPromise(result1)
        console.log(result2);
    } catch (error) {
        console.error(error)
    } finally {
        console.log('done')
    }
}

something()