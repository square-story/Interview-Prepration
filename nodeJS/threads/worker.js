import { workerData, parentPort } from 'worker_threads'

setTimeout(() => {
    parentPort.postMessage(workerData.value + 1)
}, 1000)
