// babel转换es6方法
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@src/view/app/app'
import '@src/style/base.styl'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
