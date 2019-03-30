import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '@src/view/login'
import Home from '@src/view/home'

class App extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {
    // 去掉进入index.html形成的pre-loading
    // document.getElementById('pre-loading').style.display = 'none'
  }

  render () {
    return (
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App
