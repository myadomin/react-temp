import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './components/Counter'
import reducers from './reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger({});
const store = createStore(reducers, applyMiddleware(logger))
const rootEl = document.getElementById('root')

// store = createStore(reducers)
// store.getState()
// store.dispatch(action)
// store.subscribe(listener)
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
