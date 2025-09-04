/**
 * What is Throttling?
Throttling is a technique that limits how often a function can be called in a given period of time. 
It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations,
 such as animations, scrolling, resizing, fetching data, etc.
 */


/**
 * if you have a function that fetches some data from an API every time the user scrolls the page,
 *  you might want to throttle it so that it only makes one request every second,
 *  instead of making hundreds of requests as the user scrolls.
 */

function throttleFun(mainFunction, delay) {
    let timerFlag = null; //variable keep tracking to the timer
    return (...args) => {
        if (!timerFlag) {//if there timerflag is null it will enter to the mainfunction
            mainFunction(...args); // Execute the main function 
            timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
                timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
            }, delay);
        }
    }
}

const logMessage = () => {
    console.log('function called', new Date().toISOString())
}

const something = throttleFun(logMessage, 1000)

let count = 0

let intervalId = setInterval(() => {
    something()
    count++
    if (count > 10) {
        clearInterval(intervalId)
    }
}, 100);