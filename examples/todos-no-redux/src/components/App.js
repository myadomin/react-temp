import React, { Component } from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

class App extends Component {
  constructor (props, context) {
    super (props)
    this.state = {
      todos: [],
      visibleType: 'All',
      value: ''
    }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.ToggleTodos = this.ToggleTodos.bind(this)
    this.getVisibleTodos = this.getVisibleTodos.bind(this)
  }
  
  handleChange (inputValue) {
    this.setState({ value: inputValue })
  }

  handleAddClick () {
    const { todos, value } = this.state
    this.setState({
      todos: [...todos, {
        text: value,
        isCompeleted: false
      }]
    }, () => {
      this.setState({ value: '' })
    })
  }

  ToggleTodos (e, index) {
    const { todos } = this.state
    todos[index].isCompeleted = !todos[index].isCompeleted
    // 必须setState才能变化state
    this.setState({ todos })
  }

  getVisibleTodos (visibleType) {
    this.setState({ visibleType })
  }

  render () {
    // input value=xxx 受控组件 输入框不能输入 必须绑定onChange事件改变state value 
    const { todos, visibleType, value } = this.state
    return (
      <div style={{fontSize: '20px'}}>
        <AddTodo handleChange={this.handleChange} value={value} handleAddClick={this.handleAddClick} />
        <VisibleTodoList todos={todos} visibleType={visibleType} ToggleTodos={this.ToggleTodos} />
        <Footer getVisibleTodos={this.getVisibleTodos} />
      </div>
    )
  }
}

export default App
