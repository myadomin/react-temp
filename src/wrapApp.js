import React, { Component } from 'react'
import App from '@src/view/app'

// 封装websocket
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
        rpcID: 'checkIsConnection',
        data: null
      }
      window.websocket.send(JSON.stringify(json))
    }
    window.websocket.onmessage = function (evt) {
      console.log(evt.data)
    }
  }

  render () {
    return <App />
  }
}
