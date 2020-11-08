var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
  res.render('7_memory_Game/7_memory_Game', { title: 'Memory Game'});
});




module.exports = router;