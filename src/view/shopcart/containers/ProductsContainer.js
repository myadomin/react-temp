import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '@src/store/shopcart/actions'
import ProductItem from '../components/ProductItem'

const ProductsContainer = ({ products, addToCart }) => {
  return (
    <div>
      <h3 style={{marginBottom: '20px'}}>Products</h3>
      {products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)} />
      )}
    </div>
  )
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    products: state.shopcart.products.visibleIds.map(id => {
      return state.shopcart.products.byId[id]
    })
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart: productId => {
      dispatch(addToCart(productId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
