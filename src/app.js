const express = require ('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(morgan('dev'));

app.use(bodyParser.json());

//CORS
app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,access-token");
    next();
});

//Live check
app.use('/live', express.Router().get('/', (req, res, next) => res.status(200).send()))

//Routes
app.use('/finance', require('./routes/finance.router'));

module.exports = app;
