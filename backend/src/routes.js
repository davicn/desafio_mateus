const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send("Testando")
})

routes.post('/posts', (req, res) => {
    console.log(req.body)
    return res.json(req.body)
})

module.exports = routes 