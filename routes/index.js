var express = require('express');
var router = express.Router();
var path = require('path');
let logger = require('../src/main/logger')
let db = require('../src/main/db')

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

router.post('/insert', (req, res, next)=>{
  const user = req.body
  db.query(`insert into board(id, lob_string) values(${user.id}, '${user.name}')`, (req, results) => {
    logger.info(`삽입: ${JSON.stringify(results)}`)
    logger.info(`삽입: ${JSON.stringify(req)}`)
  })
  res.setHeader('Location', `${user.name}`)
  res.sendStatus(201)
    // .send(user.id)
})

router.get('/select', (req, res, next)=>{
  db.query('select * from board', (req, results) => {
    res.send(JSON.stringify(results))
  })
})

module.exports = router;
