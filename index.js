var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');

var app = express();

app.use(bodyParser.json());

app.use(expressMongoDb('mongodb://localhost:27017/doacao-api'));

app.listen(3000, function(){
    console.log('Acesse o servidor http://localhost:3000');
});

app.get('/hemocentros', hemocentrosController.listar);
app.post('/hemocentros', hemocentrosController.criar);
app.delete('/hemocentros/:id', hemocentrosController.remover);
