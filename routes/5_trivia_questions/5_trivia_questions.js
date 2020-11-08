var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
  res.render('5_trivia_questions/5_trivia_questions', { title: 'Trivia questions'});
});

router.get('/trivia-questions-page', function (req, res, next) {
  res.render('5_trivia_questions/trivia_questions_page', { title: 'Trivia questions'});
});




module.exports = router;