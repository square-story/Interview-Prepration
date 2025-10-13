import express from 'express'
import fs from 'fs'

const app = express()

app.use(express.json())

//example of sync file reading.
app.get('/', (req, res, next) => {
    try {
        const data = fs.readFileSync('./Routes/userRoute.js', 'utf-8')
        res.status(200).json({ success: true, data })
    } catch (error) {
        next(error)
    }
})
//app.all example
app.all('/all-route', (req, res, next) => {
    try {
        console.log(req.method, req.url, req.accepts)
        res.status(200).json('yes i got it', req.method)
    } catch (error) {
        next(error)
    }
})
//example of app.set for setting creation
app.set("port", 3000)

//example of router chaining.

app.route('/routerchain')
    .get((req, res) => res.status(200).json({ success: true, message: 'yess done' }))
    .post((req, res) => res.status(201).json({ success: true, message: "created the file" }))

//division API
app.get('/divide/:a', (req, res, next) => {
    try {
        const { a } = req.params
        const { b } = req.query

        if (!a || !b) return res.status(400).json({ success: false, message: "need path value and query value" })

        const numberA = Number(a)
        const numberB = Number(b)
        if (isNaN(numberA) || isNaN(numberB)) return res.status(400).json({ success: false, message: 'need an number types in the input value' })
        if (numberB <= 0) return res.status(400).json({ success: false, message: 'Cannot divide by zero' });
        res.status(200).json({ success: true, data: numberA / numberB })
    } catch (error) {
        next(error)
    }
})


//example of error handiling middleware.
app.use((err, req, res, next) => {
    console.log('The error from error handling middlware', err)
    res.status(500).json({ sucess: false, message: "internal server error" })
})

app.listen(app.get("port"), () => console.log(`server started at ${app.get("port")} port`))