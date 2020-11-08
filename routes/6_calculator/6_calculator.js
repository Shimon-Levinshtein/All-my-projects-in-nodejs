var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
  res.render('6_calculator/6_calculator', { title: 'Calculator'});
});




module.exports = router;