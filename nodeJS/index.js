import express from 'express'
import userRoute from './Routes/userRoute.js'
const app = express()

app.get('/', (req, res) => res.json('something'))

app.get('/user', (req, res) => res.status(200).json('getting user data'))

app.listen(3000, () => {
    console.log('hello')
})