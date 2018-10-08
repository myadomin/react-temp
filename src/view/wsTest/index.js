import React, { Component } from 'react'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'
import { sendWsMsg } from '@src/utils/index'

@inject('wsStore')
@observer
export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  addMessage () {
    sendWsMsg('addMessage', this.props.wsStore.index)
  }

  render () {
    const { wsStore } = this.props
    return (
      <div className="home-wrap">
        <div>测试websocket</div>
        <Button type="primary" onClick={this.addMessage.bind(this)}>websocket添加一条信息</Button>
        <ul>
          {wsStore.messageList.map((item) => {
            return <li key={item}>this is message: {item}</li>
          })}
        </ul>
      </div>
    )
  }
}
