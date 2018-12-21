var express = require('express')
var path = require('path')
var app = express()

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './test.html'))
})

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

app.listen(4000)
