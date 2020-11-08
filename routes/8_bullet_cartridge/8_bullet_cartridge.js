var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
  res.render('8_bullet_cartridge/8_bullet_cartridge', { title: 'Bullet cartridge'});
});




module.exports = router;
