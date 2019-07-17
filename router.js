var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
let logger = require('morgan');

var indexRouter = require('./app/routes/index');
var usersRouter = require('./app/routes/users');
// let router = express.Router()
const db = require('./app/config/db')
// db.connect()
var app = express();
require('main')
let log = require('./app/config/logger')
// const TAG = path.basename(__filename)

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
// app.use('v1', router)

app.use((req, res, next) => {
  log.info('인증 작업.......')
  next()
})


// catch 404 and forward to error handler
app.use((req, res, next) => {
  log.info('로깅 작업.....')
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
