const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({ origin: 'http://localhost:5555' }));

//app.use('/', employeeController);

app.use('/employees', employeeController);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));