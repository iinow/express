var express = require('express');
var router = express.Router();
let logger = require('../src/main/logger')

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info('들어왔당.')
  res.render('index', { title: 'Express' });
  logger.info('끝')
});

module.exports = router;
