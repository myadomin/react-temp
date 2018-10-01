import React, { Component } from 'react'
import App from '@src/view/app'
import { inject, observer } from 'mobx-react'
import { switchData } from './switchData'

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
    window.websocket.onopen = (evt) => {
      const json = {
        rpcId: 'checkIsConnection',
        data: null
      }
      window.websocket.send(JSON.stringify(json))
    }
    window.websocket.onmessage = (evt) => {
      const message = evt.data
      new Promise((resolve, reject) => {
        resolve(JSON.parse(message))
      }).then((json) => {
        switchData(json, this.props.wsStore)
      })
      // .catch(() => {
      //   console.log(22, message)
      // })
    }
  }
  render () {
    return <App />
  }
}
