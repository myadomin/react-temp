import { combineReducers } from 'redux'
import {
  REQUEST_POSTS, RECEVIE_POSTS,
  CHANGE_SELECTED_TYPE
} from '../actions/constance'

const selectedType = (state = 'react', action) => {
  switch (action.type) {
    case CHANGE_SELECTED_TYPE:
      return action.selectedType
    default:
      return state
  }
}

const posts = (state = { isFetching: false, items:[] }, action) => {
  switch (action.type) {
    // 发起请求 isFetching变为true
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }
    // 请求成功 isFetching变回false
    case RECEVIE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.res,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsWithType = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
    case RECEVIE_POSTS:
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