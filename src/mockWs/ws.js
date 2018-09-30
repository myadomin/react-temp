const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3001 })

const switchJson = (json, ws) => {
  switch (json.rpcID) {
    case 'checkIsConnection':
      return ws.send('ws is connection')
    default:
      ws.send('没有找到此消息对应的rpcID')
  }
}
wss.on('connection', function connection (ws) {
  ws.on('message', function incoming (message) {
    new Promise((resolve, reject) => {
      resolve(JSON.parse(message))
    }).then((json) => {
      // window.websocket(JSON.stringify(json))后 JSON.parse正常 进入这里
      // window.websocket(JSON.stringify('1212'))也算正常 可以进入这里
      switchJson(json, ws)
    }).catch(() => {
      // window.websocket.send('abc') JSON.parse异常 进入这里
      ws.send(`error: you send message: ${message}, it can not be JSON.parse`)
    })
  })
})
