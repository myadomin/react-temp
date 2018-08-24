import React, { Component } from 'react'
import { Button } from 'antd';
import './home.styl'
import APISHOP from '@src/api/shop'
import APIBUY from '@src/api/buy'

// 介绍mock数据
export default class Home extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {}
  }

  // mock数据
  getProducts () {
    APISHOP.getProducts().then((res) => {
        console.log('getProducts ', res);
    });
  }
  getProductsBuySuccess () {
    APIBUY.getProductsBuySuccess().then((res) => {
        console.log('getProductsBuySuccess ', res);
    });
  }

  render() {
    return (
      <div className="home-wrap">
        <Button type="primary" onClick={this.getProducts.bind(this)}>getProducts - mock</Button> 
        <Button type="primary" onClick={this.getProductsBuySuccess.bind(this)}>getProductsBuySuccess - mock</Button>
      </div>
    )
  }
}
