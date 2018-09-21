import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '@src/store/todos/action'
import PropTypes from 'prop-types'

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div>
      <style jsx>{`
        .todoList {
          margin: 20px 0
        }
      `}
      </style>
      <ul className="todoList">
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => onTodoClick(todo.id)}
            style={ {
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos.todoList, state.todos.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
