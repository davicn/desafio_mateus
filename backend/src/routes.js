const express = require('express')
const routes = express.Router()

const mysqlConnection = require('../database/conn.js');

//select de parcerias
routes.get('/parceirias', (req, res) => {
    query = 'SELECT * FROM parceirias'
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows)
            console.log(rows)
        } else {
            console.log(err)
        }
    })
})

// select de avisos
routes.get('/avisos', (req, res) => {
    query = 'SELECT * FROM avisos'
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows)
            console.log(rows)
        } else {
            console.log(err)
        }
    })
})


// select de posts
routes.get('/posts', (req, res) => {
    query = 'select nome,local,idPost,texto,imagem from users,posts where posts.idUser=users.idUser;'
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows)
            console.log(rows)
        } else {
            console.log(err)
        }
    })
})

// insert post
routes.post('/post_post', (req, res) => {
    let post_ = req.body
    let texto = post_.texto
    let imagem = post_.imagem
    let idUser = '(select idUser from users)'

    query = "insert into posts (texto,imagem,idUser) values ('" +
        texto + "','" + imagem + "'," + idUser + ")"

    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows)
            console.log(rows)
        } else {
            console.log(err)
        }
    })

    console.log(query)
    return res.json({ Testando: "tranquilo" })

})





module.exports = routes 