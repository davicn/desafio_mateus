const express = require('express')
const routes = require('./parceiriasRoute.js')

const server = express()
server.use(express.json())
server.use(routes)


server.listen(3000, () => {
    console.log("Server On!")
})