module.exports = function (app) {

    app.get('/cadastro', function(req,res) {
        res.render('cadastro')
    })

    app.post('/cadastro/salvar', function(req,res) {
        var conteudo = req.body
        var connection = app.app.config.database()
        var conteudoModel = app.app.models.conteudoModel

        conteudoModel.salvarConteudo(categoria, conteudo, connection, function(error, results) {

        })

        conteudoModel.getConteudoBanco(connection,
            function(error, results) {
                console.log(error,results)
                res.render('index', {dados:results})
            })
    })
}