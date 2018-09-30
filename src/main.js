// babel转换es6方法
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import WrapApp from '@src/wrapApp'
import '@src/style/base.css'
import { Provider } from 'mobx-react'
import { HashRouter } from 'react-router-dom'
// 打开 mock数据，关闭 请求服务器数据
import mock from '@src/mock'
import counterStore from './stores/counterStore.js'

const stores = {
  counterStore
}

ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <WrapApp />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
