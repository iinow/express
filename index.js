#!/usr/bin/env node
require('module-alias').addAlias('~', __dirname)
var express = require('express');
var app = require('~/app/router');
var cookieParser = require('cookie-parser');
var debug = require('debug')('express:server');
var http = require('http');
var path = require('path');
let logger = require('morgan');
let db = require('~/app/entity')

// let OAuth2Server = require('oauth2-server')

// new OAuth2Server({
//   model: "",
//   refreshTokenLifetime: ""
// })

var port = normalizePort(process.env.PORT || '80');
app.set('port', port);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));

/**
 *  @content body-parser 가 내장되어 이썽서 express.json(), express.urlencoded() 로 사용 가능
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

async function initDB(){
  // let user = new db.Admin()
  // user.fullName = "how can i do?"
  // user.desc = "wtf!!"
  // await user.save()
  
  let u = await db.Admin.findByPk(1)
  console.log(JSON.stringify(u))

  // db.Admin.findAll({
  //   where: {

  //   },
  //   include: [
  //       {model: db.memos, as: 'memoes'}
  //     ]
  // })

  // await db.Admin.sync()
  // let u = await db.Admin.findOne({
  //   where: {
  //     idx: 1
  //   }
  // })

  // u.fullName = "hao"
  // u.desc = "abcdedf"
  // await u.save()

  // let cnt = await db.Admin.update({
  //   name: "bishop",
  //   description: "jjangyoman"
  // }, {
  //   where:{
  //     idx: 1
  //   }
  // })
  // console.log(`업데이트 개수 : ${cnt}`)

  /*
  let user = new db.Admin()
  user.name = "시fdfdd바"
  user.description = "난가2222?dddd"
  console.log(user.getDataValue('idx'))
  console.log(user.getDataValue('name'))
  console.log(user.getDataValue('description'))
  let u = await db.Admin.create(user)
  console.log(JSON.stringify(u))
  console.log(u.idx)
  */
  // let admins = await db.Admin.findAll()/
  // console.log(JSON.stringify(admins[0].id))
  // console.log(JSON.stringify(admins[0].fullName))
  // console.log(JSON.stringify(admins[0].description))
}

initDB()

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
