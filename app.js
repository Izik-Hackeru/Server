const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(cors());

var userRoute = require('./Routes/usersRoutes.js');
app.use(bodyparser.json());
app.use('/api/users', userRoute);

const db_path = 'mongodb://localhost/insureapp';

mongoose.connect(db_path);

app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
})
  

