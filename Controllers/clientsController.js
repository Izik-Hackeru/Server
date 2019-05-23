const Client = require('../Models/client.js');

var clientController = function(){

    function addNewClient(req, res){
        if(req.body.firstName){
            var newClient = new Client(req.body);
            newClient.save(function(err){
                console.log(err);
                res.status(201).send({});
            })
        }else {
            res.status(400).send({err: 'Missing parameters'});
        }
    }
    
    function generateToken(){

    }

    return {
        addClient: addNewClient
    }
}

module.exports = clientController();