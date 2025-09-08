const click = document.getElementById('clickMe')
const checkbox = document.getElementById('check')


click.addEventListener('click', e => {
    checkbox.checked = !checkbox.checked;
    console.log(e)
})

function logClick() {
    console.log("Throttled click at", Date.now());
}

function logInput() {
    console.log('Debounce is triggered', Date.now().toLocaleString())
}

const searchBox = debounce(logInput, 3000)
document.getElementById('search').addEventListener('input', searchBox)
const throttledClick = throttle(logClick, 2000);
document.getElementById("btn").addEventListener("click", throttledClick);

function debounce(callback, delay) {
    let timerId;
    return function (...arg) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback.apply(this, arg)
        }, delay);
    }
}

function throttle(callback, delay) {
    let timerId;
    return function (...arg) {
        if (!timerId) {
            callback.apply(this, arg)
            timerId = setTimeout(() => {
                timerId = null
            }, delay);
        }
    }
}
