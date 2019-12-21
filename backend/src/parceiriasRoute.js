const express = require('express')
const routes = express.Router()

const mysqlConnection = require('../database/conn.js');

routes.get('/parceirias', (req, res) => {
    //return res.send("Testando")
    mysqlConnection.query('SELECT * FROM parceirias', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
            console.log(rows)
        } else {
            console.log(err)
        }
    });
})
/*
routes.post('/posts', (req, res) => {
    console.log(req.body)
    return res.json(req.body)
})*/

module.exports = routes 