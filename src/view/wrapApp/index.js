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
    this.initWebsocket()
  }

  initWebsocket () {
    window.websocket = new window.WebSocket('ws://localhost:3001')
    window.websocket.onopen = (evt) => {
      sendWsMsg('checkIsConnection', null)
    }
    window.websocket.onmessage = (evt) => {
      // 接收websocket服务端数据 分发到wsStore里
      receiveDataToStore(JSON.parse(evt.data), this.props.wsStore)
    }
  }
  render () {
    return <App />
  }
}
