import React, { Component } from 'react'
import App from '@src/view/app'
import { inject, observer } from 'mobx-react'

// 封装websocket
// websocket获得的数据都集中在这里 全部放到store里
@inject('wsStore')
@observer
export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
    this.initWebsocket()
  }

  initWebsocket () {
    window.websocket = new window.WebSocket('ws://localhost:3001')
    window.websocket.onopen = function (evt) {
      const json = {
        rpcId: 'checkIsConnection',
        data: null
      }
      window.websocket.send(JSON.stringify(json))
    }
    const switchJson = (json, ws) => {
      switch (json.rpcId) {
        case 'checkIsConnection':
          return console.log(json.data)
        case 'addMessage':
          this.props.wsStore.messageList.push(json.data)
          return
        default:
          console.log('客户端：没有找到此消息对应的rpcId')
      }
    }
    window.websocket.onmessage = function (evt) {
      const message = evt.data
      new Promise((resolve, reject) => {
        resolve(JSON.parse(message))
      }).then((json) => {
        switchJson(json)
      }).catch(() => {
        console.log(message)
      })
    }
  }
  render () {
    return <App />
  }
}
