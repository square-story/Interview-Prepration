//Write an generator function to print value multiplication in certiain trushold.

// function* generator(value) {
//     let count = 1
//     let diff = value
//     let stop = Number(diff + '0')
//     while (diff < stop) {
//         diff = value * count
//         yield diff
//         count++
//     }
// }


// const something = generator(3)

// let timerId = setInterval(() => {
//     let series = something.next()
//     if (series.done) {
//         clearInterval(timerId)
//     } else {
//         console.log(series.value);
//     }
// }, 1000);


//Write a generator that produces the Fibonacci sequence up to a given number.

function* seriesFib(n) {
    let fib1 = 0
    let fib2 = 1
    while (fib1 <= n) {
        yield fib1;
        [fib1, fib2] = [fib2, fib1 + fib2]
    }
}

const fibSeries = seriesFib(10)

let timerIdFeb = setInterval(() => {
    let series = fibSeries.next()
    if (series.done) {
        clearInterval(timerIdFeb)
    } else {
        console.log(series.value)
    }
}, 1000);