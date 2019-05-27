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

    function getAll(req, res) { 
        Client.find({}, {firstName: 1, lastName: 1},function(err, arr){
            if(err){
                return res.status(500).send({err: err});
            }else {
                return res.status(200).send(arr);
            }
        }).limit(100);
    }

    function login(req, res){
        if(! req.body.username || ! req.body.password){
            return res.status(400).send({});
        }
        Client.findOneAndUpdate(req.body, 
            {$set: {lastLogin: Date.now()}, $inc:{visitCount:1}},
            {fields: {username: 1, firstName: 1, lastName: 1, lastLogin: 1, visitCount: 1},
            'new': true},
              function(err, client){
                  if(err){
                      return res.status(500).send({err: err});
                  }else {
                      if(client){
                          // create token for this client
                          return res.status(200).send({token: '', client: client});
                      }
                      return res.status(401).send({});
                  }
        })
    }

    return {
        addClient: addNewClient,
        getAll: getAll,
        login: login
    }
}

module.exports = clientController();