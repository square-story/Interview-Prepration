import { EventEmitter } from 'events'
import { appendFile } from 'fs'
import path from 'path'

class Logger extends EventEmitter {
    constructor() {
        super()
        this.on('error', (err) => {
            const message = `error happend ${new Date().toString()}:Error:${err}`
            appendFile(path.join('.', 'LOG.txt'), message, (err) => {
                if (err) console.log('Error Happend When appending error log')
            })
        })
    }
}

export default Logger