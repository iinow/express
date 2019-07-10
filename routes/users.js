var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('', (req, res, next) => {
  // res.send('respond with a resource')
  // let json = {'name':'haha'}
  // res.send(JSON.stringify(json))
  res.send("Hello world!!")
});

module.exports = router;
