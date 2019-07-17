var express = require('express');
var router = express.Router();
var path = require('path');
let logger = require('../config/logger')
let db = require('../config/db')
const OAuth2Server = require('oauth2-server')
const Request = OAuth2Server.Request
const Response = OAuth2Server.Response
const oauth = new OAuth2Server({model: require('~/app/config/oauth2/service-db/model')})

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

router.patch('/datas/:id', (req, res) => {
  const p = req.params
  const body = req.body
  console.log(JSON.stringify(p))
  console.log(JSON.stringify(body))
  res.sendStatus(301)
})

router.post('/oauth/token', async (req, res, next) => {
  const request = new Request(req)
  const response = new Response(res)

  try{
    res.json(await oauth.token(request, response))
  }catch(e){
    console.log(e)
    next(e)
  }
})

router.get('/oauth/authorize', async (req, res, next) => {
  const request = new Request(req);
  const response = new Response(res);
  const options = {
    authenticateHandler: {
      handle: (data) => {
        // Whatever you need to do to authorize / retrieve your user from post data here
        return {idx: '1', userName: 'wedul', scope: 'babo'};
      }
    }
  };

  try {
    res.json(await oauth.authorize(request, response, options));
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
