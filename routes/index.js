var express = require('express');
var router = express.Router();
var path = require('path');
let logger = require('../src/main/logger')
const TAG = path.basename(__filename)

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info('들어왔당.')
  res.render('index', { title: 'Express' });
  logger.info('끝')
  logger.info(`${TAG}, get home page 부분`)
})

router.get('/test', (req, res, next) => {
  res.render('index', {title: 'Express ㅠㅠㅠ'})
  logger.info(`${TAG}, get test page 부분`)
})

module.exports = router;
