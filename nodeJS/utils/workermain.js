import { Worker } from 'worker_threads'

function WorkerDataPromise(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./threads/worker.js', { workerData })
        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (exitCode) => {
            if (exitCode != 0) {
                throw new Error('unexpeceted Exit is triggered')
            }
        })
    })
}


(async function () {
    try {
        console.log('something')
        const data = await WorkerDataPromise({ value: 10 })
        console.log(data)
        console.log('ended')
    } catch (error) {
        console.log(error)
    }
})()