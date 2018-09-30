import React, { Component } from 'react'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'

@inject('counterStore')
@observer
export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  render () {
    const { counterStore } = this.props
    const incrementCounter = () => {
      this.props.counterStore.increment()
    }
    return (
      <div className="home-wrap">
        <div>mobx测试</div>
        <Button type="primary" onClick={incrementCounter}>mobx-incrementCounter</Button>
        <span>{ counterStore.num }</span>
      </div>
    )
  }
}
