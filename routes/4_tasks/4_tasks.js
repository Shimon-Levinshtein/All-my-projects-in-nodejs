var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('4_tasks/4_tasks', { title: 'Tasks'});
});





module.exports = router;