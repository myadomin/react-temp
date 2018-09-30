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
    window.websocket = new window.WebSocket('ws://echo.websocket.org')
    window.websocket.onopen = function (evt) {
      window.websocket.send('{ rpc1212ID: "userListReq", data: {}}')
    }
    window.websocket.onmessage = function (evt) {
      console.log(evt)
      console.log(evt.data)
    }
  }

  render () {
    return <App />
  }
}
