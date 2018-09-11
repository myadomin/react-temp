// babel转换es6方法
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@src/view/app/index.js'
import '@src/style/base.css'
import { Provider } from 'react-redux'
import store from '@src/store/store'
// 打开 mockjs拦截请求，返回mock数据
// 关闭 请求服务器数据
import mock from '@src/mock'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
