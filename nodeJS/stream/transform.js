import { Transform } from 'stream'


const toUpper = new Transform({
    transform(chunk, encoding, callback) {
        const data = chunk.toString().toUpperCase()
        callback(null, data)
    }
})


process.stdin.pipe(toUpper).pipe(process.stdout)