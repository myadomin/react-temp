import React, { Component } from 'react'
import style from './index.css'
import { HashRouter, Route } from 'react-router-dom'
import Sidebar from '@src/comp/sideBar/sideBar'
import Home from '@src/view/home'
import Todos from '@src/view/todos/todos'
import Shopcart from '@src/view/shopcart/shopcart'

export default class App extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  render () {
    // <BrowserRouter>需要后端支持，<HashRouter>不需要
    return (
      <HashRouter>
        <div className="app-wrap">
          <div className={style.header}>he12ader</div>
          <div className="section">
            <div className={style.side}>
              <Sidebar/>
            </div>
            <div className={style.content}>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/todos" component={Todos} />
              <Route path="/shopcart" component={Shopcart} />
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }
}
