import { ADD_TODO, TOGGLE_TODO, SET_VISIBLE_FILTER } from '../types'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const setVisibleFilter = (filterType) => {
  return {
    type: SET_VISIBLE_FILTER,
    filterType
  }
}
