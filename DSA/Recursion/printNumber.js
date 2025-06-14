//Print numbers from N to 1 and vice versa

const printNumber = (num) => {
    if (num < 1) return num
    console.log(num)
    return printNumber(num - 1)
}

const reversePrint = (num, current = 1) => {
    if (num < current) return num
    console.log(current)
    return reversePrint(num, current + 1)
}

printNumber(5)
reversePrint(5)

