import React, { Component } from 'react'

// class AddTodo extends Component {
//   constructor (props, context) {
//     super (props)
//     this.state = {
//       value: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.setInputValueCallBack = this.setInputValueCallBack.bind(this)
//   }

//   handleChange (e) {
//     this.setState({ value: e.target.value })
//   }

//   setInputValueCallBack () {
//     this.setState({ value: '' })
//   }

//   render () {
//     const { value } = this.state
//     const { handleAddClick } = this.props
//     return (
//       <div>
//         <input type="text" onChange={(e) => this.handleChange(e)} value={value} />
//         <button onClick={(e) => handleAddClick(e, value, this.setInputValueCallBack)}>Add todo</button>
//       </div>
//     )
//   }
// }

const AddTodo = ({ handleChange, value, handleAddClick }) => {
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e.target.value)} value={value} />
      <button onClick={handleAddClick}>Add todo</button>
    </div>
  )
}

export default AddTodo
