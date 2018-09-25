import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('todosStore')
@observer
class AddTodo extends Component {
  constructor (props, context) {
    super (props)
    this.state = {
    }
  }

  render () {
    const { todosStore } = this.props
    // 如果const { handleAddClick } = this.props.todosStore
    // 然后 button onClick={() => handleAddClick(value)}，在todosStore.js里找不到this
    return (
      <div>
        <input type="text" onChange={(e) => todosStore.changeAddInputValue(e.target.value)} value={todosStore.addInputValue} />
        <button onClick={() => todosStore.addTodo(todosStore.addInputValue)}>Add todo</button>
      </div>
    )
  }
}

export default AddTodo
