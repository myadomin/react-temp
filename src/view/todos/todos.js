import React, { Component } from 'react'
import Footer from './footer'
import AddTodo from './addTodo'
import TodoList from './todoList'
import './todos.styl'

export default class TodoDemo extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="todos-wrap">
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    )
  }
}
