function memorize (func){
    const memo = {}
    return function (...args){
        let key = JSON.stringify(args)
        if(memo[key]){
            return memo[key]
        }else{
            const result = func(...args)
            memo[key] = result
            return result
        }
    }
}

function expensiveFun (a,b){
    console.log('something expensive calculation')
    return a+b
}


const something = memorize(expensiveFun)

console.log(something(2,5))
console.log(something(2,5))
console.log(something(2,5))