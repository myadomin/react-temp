import { ADD_TODO, TOGGLE_TODO } from '../types'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false,
        id: state.length
      }]
    case TOGGLE_TODO:
      return state.map(obj => {
        if (obj.id === action.id) {
          obj.completed = !obj.completed
        }
        return obj
      })
    default:
      return state
  }
}

export default todos