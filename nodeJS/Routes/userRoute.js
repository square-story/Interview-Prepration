import express from 'express'

const Router = express.Router()


export default Router.get('/dashboard', (req, res) => {
    res.json('something')
})

