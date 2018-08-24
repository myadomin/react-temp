import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '@src/store/todos/action'

class AddTodo extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  render () {
    const { dispatch } = this.props
    let input
    return (
      <div className="item">
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}
// connect什么参数都不传 就只是把dispatch附加到了this.props上
export default connect()(AddTodo)
