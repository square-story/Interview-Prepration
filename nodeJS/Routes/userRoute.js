import express from 'express'

const Router = express.Router()

Router.get('/', (req, res) => {
    res.json('something')
})

export default { userRoute: Router }