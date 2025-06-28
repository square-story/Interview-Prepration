function debounce(callback, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback.apply(this, args)
        }, delay);
    }
}


const something = debounce(console.log, 300)

something('something')
something('something new')
something('something new new')