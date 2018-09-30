const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3001 })

const switchJson = (json, ws) => {
  switch (json.rpcId) {
    case 'checkIsConnection':
      const checkIsConnection = {
        rpcId: 'checkIsConnection',
        data: 'ws is connection'
      }
      return ws.send(JSON.stringify(checkIsConnection))
    case 'addMessage':
      const addMessage = {
        rpcId: 'addMessage',
        data: 'this is message' + json.data
      }
      return ws.send(JSON.stringify(addMessage))
    default:
      ws.send('没有找到此消息对应的rpcId')
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
