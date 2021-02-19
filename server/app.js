const express = require('express');
const router = require('./router');
const cors = require('cors');
const handlerError = require('./handlerError/handler');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));

app.use('/api', router);

app.use(handlerError);

module.exports = app;
