var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')

var app = express()
app.set('view engine', 'ejs')
app.set('views', '././app/views')

app.use(bodyParser.urlencoded({extended: true}))

consign()   /* Inclui a conexão do db para todas as rotas */
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app)

module.exports = app