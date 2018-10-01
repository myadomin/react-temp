export const switchData = (json, wsStore) => {
  switch (json.rpcId) {
    case 'checkIsConnection':
      return console.log(json.data)
    case 'addMessage':
      wsStore.messageList.push(json.data)
      return
    default:
      console.log('客户端：没有找到此消息对应的rpcId')
  }
}
