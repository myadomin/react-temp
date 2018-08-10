import React, { Component } from 'react'
import { Button } from 'antd';
import './home.styl'

export default class Home extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="home-wrap">
        <Button type="primary">home</Button>
      </div>
    )
  }
}
