const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));

module.exports = app;
