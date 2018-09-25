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
    // 下面这样写 直接onClick={() => handleAddClick(value)} 在todosStore.js里找不到this
    // const { handleAddClick } = this.props.todosStore
    return (
      <div>
        <input type="text" onChange={(e) => todosStore.changeAddInputValue(e.target.value)} value={todosStore.addInputValue} />
        <button onClick={() => todosStore.addTodo(todosStore.addInputValue)}>Add todo</button>
      </div>
    )
  }
}

export default AddTodo
