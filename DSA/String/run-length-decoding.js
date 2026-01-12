//input : a1b2c3 , output : abbccc
//example 2 : input : z1v10k3 output : zvvvvvvvvvvkkk

function turnString(str) {
    let result = ""
    let number = ""
    let letter = ""
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            if (number.length) {
                let count = Number(number)
                while (count > 0) {
                    result += letter
                    count--
                }
                number = ''
            }
            letter = str[i]
        } else {
            number += str[i]
        }
    }

    let count = Number(number)
    while (count > 0) {
        result += letter
        count--
    }

    return result
}

console.log(turnString("z1v10k3"))