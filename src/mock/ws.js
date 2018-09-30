var ws = require('nodejs-websocket')

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
  conn.on('text', function (str) {
    const json = JSON.parse(str)
    switch (json.rpcID) {
      case 'checkIsConnection':
        conn.sendText('ws is connection')
    }
  })
  conn.on('close', function (code, reason) {
    console.log('Connection closed')
  })
}).listen(3001)
