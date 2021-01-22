const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
const usersRouter = require('./routes/users');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

module.exports = app;

db.authenticate().then(() => {
  console.log('connected to the database');
});
