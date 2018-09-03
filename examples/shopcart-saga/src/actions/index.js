import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

export const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const addToCart = productId => {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export const checkout = () => {
  return {
    type: types.CHECKOUT_REQUEST
  }
}

export const checkoutSuccess = (cart) => {
  return {
    type: types.CHECKOUT_SUCCESS,
    cart,
  }
}

export const checkoutFailure = (error) => {
  return {
    type: types.CHECKOUT_FAILURE,
    error,
  }
}
