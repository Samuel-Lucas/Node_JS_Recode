module.exports = function() {

    this.getConteudo = function (connection, callback) {
        connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'", callback)
    }

    this.getConteudoBack = function (connection, callback) {
        connection.query("SELECT * FROM conteudo WHERE categoria = 'backend'", callback)
    }

    this.salvarConteudo = function (categoria, conteudo, connection, callback) {
        connection.query("INSERT INTO conteudo set ? ?", categoria, conteudo)
    }

    this.getConteudoBanco = function (connection, callback) {
        connection.query("SELECT * FROM conteudo", callback)
    }

    return this
}