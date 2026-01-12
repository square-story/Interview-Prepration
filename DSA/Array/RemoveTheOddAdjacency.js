//Remove the adjacent odd values in an array ? 

//eg: input: [1,2,3,4,5,6,7,3,5,8,9,10] 
//output:  [1,2,3,4,5,6,8,9,10]



function removeAdjacent(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            if (arr[i - 1] !== undefined && arr[i - 1] % 2 == 1) {
                continue;
            } else if (arr[i + 1] !== undefined && arr[i + 1] % 2 == 1) {
                continue;
            }
        }
        result.push(arr[i])
    }
    return result

}

console.log(removeAdjacent([1, 2, 3, 4, 5, 6, 7, 3, 5, 8, 9, 10]))