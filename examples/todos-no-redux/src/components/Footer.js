import React from 'react'

const Footer = ({ getVisibleTodos }) => {
  const arr = ['All', 'Active', 'Completed']
  return (
    <div>
      show: 
      {arr.map(item => {
        return <button key={item} onClick={() => getVisibleTodos(item)}>{item}</button>
      })}
    </div>
  )
}

export default Footer
