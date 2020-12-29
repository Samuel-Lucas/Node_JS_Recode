module.exports = function (app) {

    app.get('/backend', function(req,res) {

        var connection = app.app.config.database()

        var query = app.app.models.conteudoModel

        query.getConteudoBack(connection,
        function(error, results) {
            console.log(error, results)
            res.render('backend', {dados:results})
        })
    })
} 