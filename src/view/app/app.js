import React, { Component } from 'react'
import './app.styl'
import { HashRouter, Route } from "react-router-dom";
import Sidebar from '@src/comp/sideBar/sideBar'
import Home from '@src/view/home/home'
import Welcome from '@src/view/welcome/welcome'
import TodoDemo from '@src/view/todos/todos'
import { Provider } from 'react-redux'
import store from '@src/store/store';

export default class App extends Component {
  constructor(props, context) {
    super(props)
    this.state = {}
  }

  render() {
    // <BrowserRouter>需要后端支持，<HashRouter>不需要
    return (
      <Provider store={store}>
      <HashRouter>
        <div className="app-wrap">
          <div className="header">header</div>
          <div className="section">
            <div className="side pull-left">
              <Sidebar/>
            </div>
            <div className="content pull-right">
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/todoDemo" component={TodoDemo} />
            </div>
          </div>
        </div>
      </HashRouter>
      </Provider>
    )
  }
}
