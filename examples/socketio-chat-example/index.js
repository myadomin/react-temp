var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  // 接收客户端emit的getData1事件
  socket.on('getData1', function(msg){
    // emit回客户端
    io.emit('getData1', 'getData1:' + {a: 1, b: 111});
  });
  socket.on('getData2', function(msg){
    io.emit('getData2', 'getData2:' + msg);
  });
  socket.on('getData3', function(msg){
    io.emit('getData3', 'getData3:' + msg);
  });
});

// 每隔5秒钟 emit一个intervalData事件
setInterval(() => {
  io.emit('intervalData', 'this is intervalData, update once by 5 secondes');
}, 5000)

http.listen(port, function(){
  console.log('listening on *:' + port);
});
