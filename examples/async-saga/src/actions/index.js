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
