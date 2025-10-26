function perfectNumber(number) {
    let value = 0
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            value += i
        }
    }
    return value == number ? true : false
}

const metrix = [[1, 6, 10, 15],
[20, 12, 28, 33],
[45, 8, 14, 50],
[21, 18, 19, 22]]

function findPerfects(arr) {
    let resultArr = []
    for (let el of arr) {
        for (let value of el) {
            let result = perfectNumber(value)
            if (result) {
                resultArr.push(value)
            }
        }
    }
    return resultArr
}

console.log(findPerfects(metrix))