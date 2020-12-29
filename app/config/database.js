var mysql = require('mysql')

var connMySql = function() {
    console.log('Conexão com o db estabelecida !')
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'projeto_node'
    })
}

module.exports = function () {
    return connMySql
}