var express = require('express');
const clientController = require('../Controllers/clientsController.js');

var userRoutes = function () {

    var route = express.Router();

    route.post('/addClient', clientController.addClient)

    route.delete('/removeUser', function(req, res){

    })

    route.get('/allUsers', function(req, res){

    })





    return route;

};

module.exports = userRoutes();