import React, {Component} from 'react'
import _ from 'lodash';

// class VisibleTodoList extends Component {
//   constructor (props, context) {
//     super (props)
//   }

//   shouldComponentUpdate(nextProps, nextState){
//     if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)) {
//       return true
//     } else {
//       return false
//     }
//   }

//   render () {
//     const { todos } = this.props
//     // console.log('VisibleTodoList重新render')
//     return (
//       <ul>
//         {todos.map((obj, index) => {
//           return <li key={index}>{obj.text}</li>
//         })}
//       </ul>
//     )
//   }
// }

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

const VisibleTodoList = ({ todos, visibleType, ToggleTodos }) => {
  // console.log('VisibleTodoList重新render')
  let visibleTodos = getVisibleTodos(todos, visibleType)
  return (
    <ul>
      {visibleTodos.map((obj, index) => {
        return <li 
        key={index} onClick={(e) => ToggleTodos(e, index)}
        style={{textDecoration: obj.isCompeleted ? 'line-through' : 'none'}}
        >{obj.text}</li>
      })}
    </ul>
  )
}

export default VisibleTodoList
