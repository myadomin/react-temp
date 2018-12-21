var express = require('express')
var app = express()

app.all('*', function(req, res, next) {
  // 允许跨域 后面设置了Access-Control-Allow-Credentials那这里就不能为'*'
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  // 允许cookie跨域通用
  res.header('Access-Control-Allow-Credentials', true)
  next();
});

app.get('/login', function(req, res) {
  res.cookie('OMS_KEY', '2344242')
  res.send('登录成功，为你设置了cookie OMS_KEY')
})

app.get('/aa', function(req, res) {
  console.log(req.headers.cookie)
  if (req.headers.cookie) {
    res.send('你有cookie OMS_KEY, 可以访问这个接口了')
  } else {
    res.send('你没有cookie OMS_KEY, 不能访问这个接口')
  }
})

app.get('/clear', function(req, res) {
  res.clearCookie('OMS_KEY')
  res.send('已删除了cookie OMS_KEY')
})

app.listen(3000)
