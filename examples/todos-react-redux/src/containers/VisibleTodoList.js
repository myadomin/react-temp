import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../selectors'

const VisibleTodoList = ({ todos, toggleTodoClick }) => {
  return (
    <ul>
      {todos.map(item => {
        return <li key={item.id} 
        style={{textDecoration: item.completed ? 'line-through' : 'none'}}
        onClick={() => toggleTodoClick(item.id)}>{item.text}</li>
      })}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList)