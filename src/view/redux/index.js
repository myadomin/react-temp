import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { incrementCount } from '@src/store/action'

class Redux extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  incrementCount = () => {
    this.props.incrementCount(1)
  }

  render () {
    const { count } = this.props
    return (
      <div className="home-wrap">
        <div>redux测试</div>
        <Button type="primary" onClick={this.incrementCount}>incrementCount</Button>
        <span>{ count }</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: (num) => {
      dispatch(incrementCount(num))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux)
