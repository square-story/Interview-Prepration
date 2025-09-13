/**
 * 
Write a function called retry that can automatically retry an asynchronous operation (such as an API call) a certain number of times with a specified delay between attempts.

The function signature should accept:

A callback function that performs the async operation,

The number of retry attempts (retries),

The delay (in milliseconds) between retries (delay).

If the operation succeeds, resolve and return the result immediately.

If it fails, retry up to the given number of times with the given delay.

If all retries fail, reject with the final error.

This simulates a real-world case where an API call is critical and, if it fails, should be retried a number of times before ultimately failing.
 */


/**
 * 
 * @param {Promise<any>} callback 
 * @param {number} retryAmount 
 * @param {number} delay 
 * @returns {Promise<any>}
 */

const retryFunction = async (callback, retryAmount, delay) => {
    try {
        return await callback()
    } catch (error) {
        if (retryAmount <= 0) throw error
        console.log(`Retrying... attempts left: ${retryAmount}`)
        await new Promise(res => setTimeout(res, delay))
        return retryFunction(callback, retryAmount - 1, delay)
    }
}

const promise1 = () => new Promise((resolve, reject) => {
    const apiResponse = {
        fullName: 'mohammed sadik',
        profession: 'software developer'
    }

    const status = Math.floor(Math.random() * 10) > 5 ? 200 : 400
    if (status === 200) {
        resolve(apiResponse)
    } else {
        reject(new Error('API request failed'))
    }
})




retryFunction(promise1, 3, 1000)
    .then(result => console.log("✅ Success:", result))
    .catch(err => console.error("❌ Failed after retries:", err.message))