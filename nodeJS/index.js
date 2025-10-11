import express from 'express'
import { EventEmitter } from 'events'
const app = express()

app.get('/', (req, res) => res.json('something'))


const event = new EventEmitter()

app.get('/user', (req, res) => res.status(200).json('getting user data'))

event.on('greet', (name) => {
    console.log('hello', name)
})

event.emit('greet', 'sadik')

app.listen(3000, () => {
    console.log('hello')
})