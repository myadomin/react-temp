import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk'
import * as todos from './todos/reducer'
import * as hash from './hash/reducer'

const store = createStore(
  combineReducers({ ...todos, ...hash }), 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;