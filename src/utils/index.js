export const sendWsMsg = (rpcId, data) => {
  window.websocket.send(JSON.stringify({ rpcId: rpcId, data: data }))
}
