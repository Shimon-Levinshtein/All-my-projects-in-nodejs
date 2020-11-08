var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/home_page');
var usersRouter = require('./routes/users');
var usersFs = require('./routes/1_Browse_files/fs');  
var timer = require('./routes/2_Timer/timer');  
var foodMenu = require('./routes/3_Food_menu/3_Food_menu');  
var tasks = require('./routes/4_tasks/4_tasks');  
var triviaQuestions = require('./routes/5_trivia_questions/5_trivia_questions');  
var calculator = require('./routes/6_calculator/6_calculator');  
var memoryGame = require('./routes/7_memory_Game/7_memory_Game');  
var bulletCartridge = require('./routes/8_bullet_cartridge/8_bullet_cartridge');  
var keyboardDrums = require('./routes/9_keyboard_drums/9_keyboard_drums');  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fs', usersFs);
app.use('/timer', timer);
app.use('/food-menu', foodMenu);
app.use('/tasks', tasks);
app.use('/trivia-questions', triviaQuestions);
app.use('/calculator', calculator);
app.use('/memory-Game', memoryGame);
app.use('/bullet-cartridge', bulletCartridge);
app.use('/keyboard-drums', keyboardDrums);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

