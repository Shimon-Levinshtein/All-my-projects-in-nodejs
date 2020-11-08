var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
  res.render('9_keyboard_drums/9_keyboard_drums', { title: 'Keyboard drums'});
});




module.exports = router;
