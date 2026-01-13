import express from 'express'
import { rateLimiting } from './rateLimiting.js'
const app = express()

app.use(rateLimiting)

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.get('/', (req, res) => res.json('hello world'))

app.listen(3000, () => console.log('Started into 3000'))
