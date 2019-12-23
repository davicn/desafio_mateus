const express = require('express')
const routes = express.Router()

const mysqlConnection = require('../database/conn.js');

//select de parcerias
routes.get('/parcerias', (req, res) => {
    query = 'SELECT * FROM parcerias'
    mysqlConnection.query(query, (err, rows, fields) => {
        if (err) throw err
    })
})

// select de avisos
routes.get('/avisos', (req, res) => {
    query = 'SELECT * FROM avisos'
    mysqlConnection.query(query, (err, rows, fields) => {
        if (err) throw err
    })
})

// select de posts
routes.get('/posts', (req, res) => {
    query = 'select nome,local,idPost,texto,imagem from users,posts where posts.idUser=users.idUser;'
    mysqlConnection.query(query, (err, rows, fields) => {
        if (err) throw err
    })
})

// insert post
routes.post('/post_post', (req, res) => {

    query = "insert into posts values(null,'"
        + req.body.texto + "','"
        + req.body.imagem + "',"
        + req.body.idUser + ")"
    //console.log(query)

    mysqlConnection.query(query, (err, rows, fields) => {
        if (err) throw err
    })
    //return res.json({ Testando: "tranquilo" })

})

module.exports = routes 