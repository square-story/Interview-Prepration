//using the itration method

const arr = [2,3,7,3,4,7,3,674,3,74,2].sort((a,b)=>a-b)

const BSUsingIteration = (sortedArr, target) => {
    let left = 0
    let right = sortedArr.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (sortedArr[middle] == target) return middle
        if (sortedArr[middle] < target) left = middle + 1
        else right = middle - 1
    }
    return -1
}


console.log(BSUsingIteration(arr, 2))

const BSUsingRecursion = (array,target,left,right)=>{
    if(left>right) return -1
    let middle = Math.floor((left+right)/2)
    if(array[middle]==target) return middle
    if(array[middle]>target) return  BSUsingRecursion(array,target,left,middle-1)
    else return BSUsingRecursion(array,target,middle+1,right)
}

console.log(BSUsingRecursion(arr,23,0,arr.length-1))