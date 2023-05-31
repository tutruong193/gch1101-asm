var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//4A. khai báo router tùy biến
var studentRouter = require('./routes/student');
var lecturerRouter = require('./routes/lecturer');
var subjectRouter = require('./routes/subject');

//khai báo thư viện hbs
var hbs = require('hbs');
//sử dụng helper "equal" để so sánh
hbs.registerHelper('equal', require('handlebars-helper-equal'));


var app = express();

//1. mongoose : làm việc với database 
var mongoose = require('mongoose');
//console.log("Mongoose version: " + mongoose.version);
//Note: cần khai báo DB name trong database uri
var uri = "mongodb+srv://tutagch210167:tu19032003@cluster0.foirayj.mongodb.net/demo"; 
mongoose.connect(uri)
.then(() => {console.log("Connect to DB succeed !")})
.catch((err) => {console.log (err)});

//2. body-parser: lấy dữ liệu từ form
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//4B. sử dụng router tùy biến
app.use('/student', studentRouter);
app.use('/lecturer', lecturerRouter);
app.use('/subject', subjectRouter);

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

//3. set port để chạy được trên hosting
var port = process.env.PORT || 3003;
app.listen(port);

module.exports = app;