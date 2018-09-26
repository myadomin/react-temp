import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'mobx-react'
import todosStore from './stores/todosStore.js'
import visibleFilterStore from './stores/visibleFilterStore.js'

const stores = {
  todosStore,
  visibleFilterStore
}

render((
  // <Provider todosStore={todosStore} visibleFilterStore={visibleFilterStore}>
  <Provider {...stores}>
    <App />
  </Provider>
), document.getElementById('root'))
