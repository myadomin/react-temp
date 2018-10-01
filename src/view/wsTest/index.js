import React, { Component } from 'react'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'
import { wsSend } from '@src/websocket/index'

@inject('wsStore')
@observer
export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  sendWebsocket () {
    const { wsStore } = this.props
    wsSend({
      rpcId: 'addMessage',
      data: this.props.wsStore.index,
      success: (res) => {
        wsStore.index++
        wsStore.messageList.push(res.data)
      }
    })
  }

  render () {
    const { wsStore } = this.props
    return (
      <div className="home-wrap">
        <div>测试websocket</div>
        <Button type="primary" onClick={this.sendWebsocket.bind(this)}>websocket添加一条信息</Button>
        <ul>
          {wsStore.messageList.map((item) => {
            return <li key={item}>this is message: {item}</li>
          })}
        </ul>
      </div>
    )
  }
}
