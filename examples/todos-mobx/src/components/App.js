import React, { Component } from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'
import DevTools from 'mobx-react-devtools'

class App extends Component {
  constructor (props, context) {
    super (props)
    this.state = {
    }
  }
  
  render () {
    return (
      <div style={{fontSize: '20px'}}>
        <DevTools />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default App
