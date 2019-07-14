var express = require('express');
var router = express.Router();

router.get('/play/:num1/:num2', function(req, res, next) {
  //console.log(req.param)
  var num1 = req.param.num1;
  var num2 = req.param.num2;
  var sum = parseInt(num1) + parseInt(num2);
  res.send("ผลรวมของตัวเลข 2 จำนวนคือ " + sum);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});

router.get('/create', function(req, res, next) {
  res.render('create',);
});

router.get('/lonin', function(req, res, next) {
  res.render('lonin', );
});


module.exports = router;
