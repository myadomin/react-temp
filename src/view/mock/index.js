import React, { Component } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import urls from '@src/config/urls.js'

export default class Home extends Component {
  // 初始化页面常量 绑定事件方法
  constructor (props, context) {
    super(props)
    this.state = {
      productAll: []
    }
  }

  // mock数据
  getProductAll () {
    axios.get(urls.product_all).then(res => {
      console.log(res.data)
      this.setState({productAll: res.data})
    })
  }

  render () {
    const { productAll } = this.state
    return (
      <div className="home-wrap">
        <div>mock数据</div>
        <Button type="primary" onClick={this.getProductAll.bind(this)}>getProductAll - mock</Button>
        <ul>
          {productAll.map(obj => {
            return <li key={obj.id}>{obj.title}</li>
          })}
        </ul>
      </div>
    )
  }
}
