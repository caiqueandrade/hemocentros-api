var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');

var app = express();

app.use(bodyParser.json());

app.use(expressMongoDb('mongodb://localhost/hemocentros-api'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000, function(){
    console.log('Acesse o servidor http://174.138.68.160:3000');
});


var hemocentrosController = require('./controllers/hemocentros.js');

app.get('/hemocentros', hemocentrosController.listar);
app.get('/hemocentros/coordenadas/:id', hemocentrosController.listarCoords);
app.post('/hemocentros', hemocentrosController.criar);
app.delete('/hemocentros/:id', hemocentrosController.remover);
