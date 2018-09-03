import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_FAILURE, CHECKOUT_SUCCESS } from '../constants/ActionTypes'

// ---product---
const productInventoryDesc = (product) => {
  return {
    ...product,
    inventory: product.inventory - 1
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
        // ...formatData(action.products)
      }
    case ADD_TO_CART:
      const { productId } = action
      return {
        ...state,
        [productId]: productInventoryDesc(state[productId])
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

const products = combineReducers({
  byId,
  visibleIds
})

// ---cart---
const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return state
    case CHECKOUT_SUCCESS:
      window.alert('购买成功')
      return initialState
    case CHECKOUT_FAILURE:
      window.alert(action.error)
      return state
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default combineReducers({products, cart})
