import websocket from '@src/utils/WebSocket'

const initWebsocket = () => {
  websocket.onopen = function (evt) {
    websocket.send('{ rpc1212ID: "userListReq", data: {}}')
  }
  websocket.onmessage = function (evt) {
    console.log(evt)
  }
}
export default initWebsocket
