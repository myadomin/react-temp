import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '@src/store/shopcart/actions'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})
const getCartProducts = state => {
  return state.shopcart.cart.addedIds.map(id => ({
    ...state.shopcart.products.byId[id],
    quantity: state.shopcart.cart.quantityById[id] || 0
  })).sort((a, b) => {
    return a.id - b.id
  })
}
const getTotal = state => {
  return state.shopcart.cart.addedIds
  .reduce((total, id) =>
    total + state.shopcart.products.byId[id].price * (state.shopcart.cart.quantityById[id] || 0),
    0
  )
  .toFixed(2)
}

const mapDispatchToProps = dispatch => {
  return {
    checkout: products => {
      dispatch(checkout(products))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
