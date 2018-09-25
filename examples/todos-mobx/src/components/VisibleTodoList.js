import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

const getVisibleTodos = (todos, visibleType) => {
  switch (visibleType) {
    case 'All':
      return todos
    case 'Active':
      return todos.filter((obj) => !obj.isCompeleted)
    case 'Completed':
      return todos.filter((obj) => obj.isCompeleted)
    default:
      return todos
  }
}

@inject('todosStore', 'visibleFilterStore')
@observer
class VisibleTodoList extends React.Component {
  constructor (props, context) {
    super(props)
  }

  render () {
    const { todosStore, visibleFilterStore } = this.props
    let visibleTodos = getVisibleTodos(todosStore.todoList, visibleFilterStore.visibleFilter)
    return (
      <ul>
        {visibleTodos.map((obj, index) => {
          return <li 
          key={index} onClick={(e) => todosStore.toggleTodos(e, index)}
          style={{textDecoration: obj.isCompeleted ? 'line-through' : 'none'}}
          >{obj.text}</li>
        })}
      </ul>
    )
  }
}

export default VisibleTodoList
