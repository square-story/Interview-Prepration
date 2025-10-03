var maxSlidingWindow = function (arr, k) {
    let max = []          // result array of maximums
    let dequeue = []      // stores indices of useful elements (monotonic deque)

    for (let i = 0; i < arr.length; i++) {
        // Remove indices that are out of the window
        if (dequeue.length > 0 && dequeue[0] <= i - k) dequeue.shift()

        // Maintain decreasing order in deque
        while (arr[dequeue[dequeue.length - 1]] < arr[i]) dequeue.pop()

        // Push current index
        dequeue.push(i)

        // Starting from index k-1, add max (front of deque) to result
        if (i >= k - 1) max.push(arr[dequeue[0]])
    }
    return max
};
