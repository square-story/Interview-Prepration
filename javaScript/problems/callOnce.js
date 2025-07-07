function once(fn) {
    let called = false
    let result;
    return function (...arg) {
        if (!called) {
            result = fn.apply(this, arg)
            called = true
        }
    }
}



const something = (value) => {
    console.log('hello', value)
}

const one = once(something)

one('something')
one('something new')