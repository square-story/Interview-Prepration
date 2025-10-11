import { createWriteStream, stat } from 'fs'

const write = createWriteStream('./text.txt', 'utf8')

write.write('hello.js')
write.write('\nnee poda')

stat('./text.txt', (err, data) => {
    if (err) {
        console.log('something', err)
    }
    console.log("🚀 ~ data.isDirectory():", data.isDirectory())
})

write.on('finish', () => console.log('ended 💦'))

