var express = require('express');
var router = express.Router();
var path = require('path');
const TAG = path.basename(__filename)
let logger = require('../src/main/logger')

/* GET users listing. */
router.get('', (req, res, next) => {
  // res.send('respond with a resource')
  // let json = {'name':'haha'}
  // res.send(JSON.stringify(json))

  //문자열 전송
  res.send("Hello world!!")

  //JSON 객체 전송
  // res.json()

  //제이드(템플릿 엔진을 사용하여 웹 페이지를 생성 대표적임, 여기서는 pug 를 사용함) 템플릿을 랜더링
  // res.render()

  //다운로드 파일 제공
  // res.sendFile()

  //메소드 이름 _언더바는 무슨 규칙이지?  
  // res._writev
  logger.info(`${TAG} 전송 완료됨`)
})

router.get('/test', (req, res, next) => {
  res.send(`__dirname: ${__dirname}, filename:  ${__filename}`)
})


module.exports = router;
