const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'gestao-de-tarefas'


})

module.exports = connection