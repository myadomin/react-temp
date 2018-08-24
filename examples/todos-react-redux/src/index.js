import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import App from './components/App'
import todos from './reducers/todos'
import visibleFilter from './reducers/visibleFilter'

const logger = createLogger({});
const store = createStore(combineReducers({
  todos,
  visibleFilter
}), applyMiddleware(logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
