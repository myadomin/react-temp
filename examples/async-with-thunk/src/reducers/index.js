import { combineReducers } from 'redux'
import {
  REQUEST_POSTS, RECEVIE_POSTS,
  CHANGE_SELECTED_TYPE, REFRESH_FORCE
} from '../actions/constance'

const selectedType = (state = 'react', action) => {
  switch (action.type) {
    case CHANGE_SELECTED_TYPE:
      return action.selectedType
    default:
      return state
  }
}

const posts = (state = { isFetching: false, refreshForce: false, items:[] }, action) => {
  switch (action.type) {
    // 发起请求 isFetching变为true
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        refreshForce: false
      }
    // 请求成功 isFetching变回false
    case RECEVIE_POSTS:
      return {
        ...state,
        isFetching: false,
        refreshForce: false,
        items: action.res,
        lastUpdated: action.receivedAt
      }
    // 强制刷新 refreshForce为true
    case REFRESH_FORCE:
      return {
        ...state,
        refreshForce: true
      }
    default:
      return state
  }
}

const postsWithType = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
    case RECEVIE_POSTS:
    case REFRESH_FORCE:
      return {
        ...state,
        [action.selectedType]: posts(state[action.selectedType], action)
      }
    default:
      return state
  }
}

export default combineReducers({
  selectedType,
  postsWithType
})