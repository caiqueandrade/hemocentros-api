var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');

var app = express();

app.use(bodyParser.json());

app.use(expressMongoDb('mongodb://localhost:27017/hemocentros-api'));

app.listen(3000, function(){
    console.log('Acesse o servidor http://localhost:3000');
});

var hemocentrosController = require('./controllers/hemocentros.js');

app.get('/hemocentros', hemocentrosController.listar);
app.get('/hemocentros/coordenadas/:id', hemocentrosController.listarCoords);
app.post('/hemocentros', hemocentrosController.criar);
app.delete('/hemocentros/:id', hemocentrosController.remover);
