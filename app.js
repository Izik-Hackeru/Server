const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

const app = express();
app.use(cors());

// app.use('/', function (req, res, next) {
//     res.status(200).send({ text: 'Hi' })
// })


app.use(express.static(__dirname + '/../../Angular/SecondProject/dist/SecondProject'))

var userRoute = require('./Routes/usersRoutes.js');
app.use(bodyparser.json());
app.use('/api/users', userRoute);

const db_path = 'mongodb://localhost/insureapp';

mongoose.connect(db_path);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../Angular/SecondProject/dist/SecondProject/index.html'))
})

app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
})


