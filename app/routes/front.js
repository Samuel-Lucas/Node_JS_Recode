module.exports = function (app) {

    app.get('/frontend', function(req,res) {

        var connection = app.app.config.database()

        var query = app.app.models.conteudoModel

        query.getConteudo(connection,
        function(error, results) {
            console.log(error, results)
            res.render('frontend', {dados:results})
        })
    })
} 