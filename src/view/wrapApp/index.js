import React, { Component } from 'react'
import App from '@src/view/app'
import { inject, observer } from 'mobx-react'
import { receiveDataToStore } from './receiveDataToStore'
import { sendWsMsg } from '@src/utils/index'

// 封装websocket
@inject('wsStore')
@observer
export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
    this.heartbeatTimer = null
    this.createTimer = null
    this.initWebsocket()
  }

  initWebsocket () {
    window.websocket = new window.WebSocket('ws://localhost:3001')

    // 连接上后开始发送心跳
    window.websocket.onopen = (evt) => {
      console.log('WebSocket connected!')
      window.clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = window.setInterval(() => {
        sendWsMsg('heartbeat', new Date().getTime())
      }, 10000)
    }

    // 连接断开后重连
    window.websocket.onclose = (evt) => {
      window.clearInterval(this.createTimer)
      window.clearInterval(this.heartbeatTimer)
      this.createTimer = window.setInterval(() => {
        if (window.websocket && window.websocket.readyState === 1) {
          // 已与服务器建立连接 取消重连定时器
          window.clearInterval(this.createTimer)
        } else {
          // 重连
          console.log('websocket重连中........')
          this.initWebsocket()
        }
      }, 5000)
    }

    // 连接错误
    window.websocket.onerror = (evt) => {
      console.error('WebSocket 无法连接到服务器')
    }

    // 接收消息
    window.websocket.onmessage = (evt) => {
      // 接收websocket服务端数据 分发到wsStore里
      receiveDataToStore(JSON.parse(evt.data), this.props.wsStore)
    }
  }
  render () {
    return <App />
  }
}
