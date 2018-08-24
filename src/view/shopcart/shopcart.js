import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsContainer from './containers/ProductsContainer'
import { getAllProducts } from '@src/store/shopcart/actions'
import CartContainer from './containers/CartContainer'

class Shopcart extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(getAllProducts())
  }

  render () {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <ProductsContainer />
        <hr/>
        <CartContainer />
      </div>
    )
  }
}

export default connect()(Shopcart)
