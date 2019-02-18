import { combineReducers } from 'redux'

const incrementCount = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'incrementCount':
      return {
        ...state,
        count: state.count + action.num
      }
    // case 'test':
    //   return Object.assign({}, oldObj, {changeProp: newValue})
    default:
      return state
  }
}

// export default incrementCount
export default combineReducers({
  incrementCount
})
