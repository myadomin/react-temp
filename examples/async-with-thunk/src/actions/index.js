import getMockDataByType from './posts'
import {
  REQUEST_POSTS, RECEVIE_POSTS,
  CHANGE_SELECTED_TYPE, REFRESH_FORCE
} from './constance'

export const changeSelectedType = (selectedType) => {
  return {
    type: CHANGE_SELECTED_TYPE,
    selectedType
  }
}

export const requestPosts = (selectedType) => {
  return {
    type: REQUEST_POSTS,
    selectedType
  }
}

export const receviePosts = (selectedType, res) => {
  return {
    type: RECEVIE_POSTS,
    selectedType,
    res,
    receivedAt: Date.now()
  }
}

export const refreshForce = (selectedType) => {
  return {
    type: REFRESH_FORCE,
    selectedType
  }
}

export const getPosts = (selectedType) => {
  // redux-thunk
  return (dispatch, getStore) => {
    // 发起请求 
    dispatch(requestPosts(selectedType))
    new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(getMockDataByType(selectedType))
      }, 1000);
    }).then((res) => {
      // 请求成功
      dispatch(receviePosts(selectedType, res))
    })
  }
}

export const shouldGetPosts = (selectedType, state) => {
  const posts = state.postsWithType[selectedType]
  // 某类文章没有 需要请求
  if (!posts) {
    return true 
  }
  // 请求中 不需要请求
  if (posts.isFetching) {
    return false
  }
  // 点击Refresh按钮 当前类文章refreshForce: true 强制刷新 需要请求
  return posts.refreshForce
}

export const getPostsIfNeed = (selectedType) => {
  // redux-thunk
  return (dispatch, getState) => {
    if (shouldGetPosts(selectedType, getState())) {
      dispatch(getPosts(selectedType))
    }
  }
}
