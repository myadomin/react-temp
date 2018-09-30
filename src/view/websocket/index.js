import React, { Component } from 'react'
import { Button } from 'antd'
import websocket from '@src/utils/WebSocket'

export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  sendWebsocket () {
    websocket.send('12121')
  }

  render () {
    return (
      <div className="home-wrap">
        <div>websocket</div>
        <Button type="primary" onClick={this.sendWebsocket.bind(this)}>websocket</Button>
      </div>
    )
  }
}