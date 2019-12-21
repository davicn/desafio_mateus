const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'desafio',
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('Conectado com o banco!');
    }
});

module.exports = mysqlConnection;