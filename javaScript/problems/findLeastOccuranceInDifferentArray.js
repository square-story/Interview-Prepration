//find non repeating elements from 2 different arrays


function randomArr() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
}

function leastOccurance(array1, array2) {
    console.log(array1, array2)
    let set1 = new Set(array1)
    let set2 = new Set(array2)

    let unique1 = array1.filter(item => !set2.has(item))
    let unique2 = array2.filter(item => !set1.has(item))

    return [...new Set([...unique1, ...unique2])]
}

let arr1 = randomArr()
let arr2 = randomArr()


console.log(leastOccurance(arr1, arr2))