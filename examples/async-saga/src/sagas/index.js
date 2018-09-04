import { call, put, all, fork, take, select } from 'redux-saga/effects'
import * as actions from '../actions'
import api from '../actions/posts'
import * as types from '../actions/constance'

function* getPosts (selectedType) {
  yield put(actions.requestPosts(selectedType))
  try {
    const res = yield call(api.getMockDataByType, selectedType)
    yield put(actions.receviePosts(selectedType, res))
  } catch (error) {

  }
}

function* refreshForce () {
  while (true) {
    yield take(types.REFRESH_FORCE)
    const selectedType = yield select(state => state.selectedType)
    yield fork(getPosts, selectedType)
  }
} 

function* changeSelectedType () {
  while (true) {
    const prevType = yield select(state => state.selectedType)
    yield take(types.CHANGE_SELECTED_TYPE)

    const nextType = yield select(state => state.selectedType)
    const postsWithType = yield select(state => state.postsWithType)
    if (prevType !== nextType && !postsWithType[nextType]) {
      yield fork(getPosts, nextType)
    }
  }
}

function* startup () {
  const selectedType = yield select(state => state.selectedType)
  yield fork(getPosts, selectedType)
}

export default function* rootSaga () {
  yield all([fork(startup), fork(changeSelectedType), fork(refreshForce)])
}