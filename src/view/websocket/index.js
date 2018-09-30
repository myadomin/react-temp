import React, { Component } from 'react'
import { Button } from 'antd'

export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  sendWebsocket () {
    window.websocket.send('abc')
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
