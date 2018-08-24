import React from "react";
import { connect } from "react-redux";
import { addTodo } from '../actions'

const AddTodo = ({ addTodoClick }) => {
  let inputEl = null
  return (
    <div>
      <input type="text" ref={node => inputEl = node}></input>
      <button onClick={() => addTodoClick(inputEl)}>Add todo</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (inputEl) => {
      dispatch(addTodo(inputEl.value))
      inputEl.value = ''
    }
  }
}

// props有dispatch
export default connect(
  null,
  mapDispatchToProps
)(AddTodo)