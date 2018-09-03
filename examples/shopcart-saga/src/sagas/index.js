import { call, put, all, fork, take, select, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
import shop from '../api/shop'
import { getCart } from '../reducers'
import * as types from '../constants/ActionTypes'

function* getAllProducts() {
  const products = yield call(shop.getProducts)
  yield put(actions.receiveProducts(products))
}

function* watchCheckout () {
  while (true) {
    yield take(types.CHECKOUT_REQUEST)
    yield call(checkout)
  }
}

function* checkout() {
  try {
    const cart = yield select(state => state.cart)
    yield call(shop.buyProducts, cart)
    yield put(actions.checkoutSuccess(cart))
  } catch (error) {
    yield put(actions.checkoutFailure(error))
  }
}

export default function* rootSaga() {
  yield all([fork(getAllProducts), fork(watchCheckout)])
}