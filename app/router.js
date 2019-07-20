var createError = require('http-errors');
var express = require('express');



var indexRouter = require('~/app/routes/index');
var usersRouter = require('~/app/routes/users');
// let router = express.Router()
// const db = require('~/app/config/db')
// db.connect()
var app = express();
let log = require('~/app/config/logger')
// const TAG = path.basename(__filename)

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('v1', router)

app.use((req, res, next) => {
  // log.info('인증 작업.......')
  next()
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  // log.info('로깅 작업.....')
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
