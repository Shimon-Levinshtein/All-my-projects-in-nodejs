var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('3_Food_menu/3_Food_menu', { title: 'Food menu'});
});





module.exports = router;