// babel转换es6方法
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@src/view/app'
import '@src/style/base.css'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { Provider } from 'mobx-react'
import { HashRouter } from 'react-router-dom'
// 打开 mock数据，关闭 请求服务器数据
import mock from '@src/mock'
import counterStore from './stores/counterStore'

const stores = {
  counterStore
}

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider {...stores}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
)
