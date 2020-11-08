var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('2_Timer/timer', { title: 'Timer'});
});





module.exports = router;