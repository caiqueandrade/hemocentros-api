var ObjectID = require('mongodb').ObjectID;

exports.listar = function(req, res){
    req.db.collection('hemocentros').find().toArray(function(err, result){
        if(err){
            return res.sendStatus(503);
        }

        res.send(result);
    });
};

exports.listarCoords = function(req, res){
    var id = req.params.id;
    var response = {};
    req.db.collection('hemocentros').findOne({_id: ObjectID(id)}, function(err, result){
        if(err){
            return res.sendStatus(503);
        }

        response.lat = result.lat;
        response.lng = result.lng;
        res.send(response);
    });
};

exports.criar = function(req, res){
    req.db.collection('hemocentros').save(req.body, function(err, result){
        if(err){
            return res.sendStatus(503);
        }

        res.sendStatus(201);
    });
};

exports.remover = function(req, res){
    var id = req.params.id;

    req.db.collection('hemocentros').remove({_id: ObjectID(id)}, {justOne: true}, function(err, result){
        if(err){
            return res.sendStatus(503);
        }

        res.sendStatus(200);
    });
};
