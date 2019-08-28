var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var mongoose = require("mongoose");

// var db = mongoose();

var pageRouter = require('./router/index');
// var api = require('./api/index');

var app = express();

// 视图引擎设定
app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'pug');

// app.use() 调用将中间件库添加进请求处理链
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// express.static 中间件将项目根目录下所有静态文件托管至 /public 目录
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRouter);
// app.use('/api', api);

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
