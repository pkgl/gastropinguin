var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// const db = require('./connect.js');

const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig[process.env.NODE_ENV || 'development']);

// Database Migration
db.migrate.latest()
  .then(() => {
    console.log('Migrationen erfolgreich ausgeführt');
  })
  .catch(err => {
    console.error('Fehler beim Ausführen der Migrationen:', err);
  });


var indexRouter = require('./routes/index');
var apiCategoriesRouter = require('./routes/api/categories');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// API Categories
app.use('/api/categories', apiCategoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
