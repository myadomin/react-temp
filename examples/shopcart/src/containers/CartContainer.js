import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
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
  return state.cart.addedIds.map(id => ({
    ...state.products.byId[id],
    quantity: state.cart.quantityById[id] || 0
  })).sort((a, b) => {
    return a.id - b.id
  })
}
const getTotal = state => {
  return state.cart.addedIds
    .reduce((total, id) =>
      total + state.products.byId[id].price * (state.cart.quantityById[id] || 0),
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
