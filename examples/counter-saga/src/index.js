import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './components/Counter'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const logger = createLogger({});
const sagaMiddleware = createSagaMiddleware({})
const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)

const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onIncrementAsync={() => store.dispatch({ type: 'INCREMENT_ASYNC' })}
  />,
  rootEl
)

render()
store.subscribe(render)
