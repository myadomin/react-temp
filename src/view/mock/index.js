import React, { Component } from 'react'
import { Button } from 'antd'
import axios from '@src/utils/axios'
import urls from '@src/config/urls.js'

export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      productAll: []
    }
  }

  // mock数据
  getProductAll = () => {
    axios.get(urls.product_all).then(res => {
      this.setState({productAll: res})
    })
  }

  render () {
    const { productAll } = this.state
    return (
      <div className="home-wrap mock">
        <div className="test">mock数据</div>
        <Button type="primary" onClick={this.getProductAll}>getProductAll - mock</Button>
        <ul>
          {productAll.map(obj => {
            return <li key={obj.id}>{obj.title}</li>
          })}
        </ul>
      </div>
    )
  }
}
