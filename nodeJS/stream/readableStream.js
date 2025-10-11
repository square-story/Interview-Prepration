import { createReadStream } from 'fs'

const data = createReadStream('../cluster.js', "utf-8")

data.on('data', (chunk) => {
    console.log(chunk)
})


data.on('end', () => console.log('ended 💦'))
