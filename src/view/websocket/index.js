import React, { Component } from 'react'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'

@inject('wsStore')
@observer
export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
    this.index = 0
  }

  sendWebsocket () {
    this.index++
    const addMessage = {
      rpcId: 'addMessage',
      data: this.index
    }
    window.websocket.send(JSON.stringify(addMessage))
  }

  render () {
    const { wsStore } = this.props
    return (
      <div className="home-wrap">
        <div>websocket</div>
        <Button type="primary" onClick={this.sendWebsocket.bind(this)}>websocket添加一条信息</Button>
        <ul>
          {wsStore.messageList.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
