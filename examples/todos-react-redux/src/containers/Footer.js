import React from "react";
import { connect } from 'react-redux'
import { setVisibleFilter } from '../actions'
import { getCompletedTodoCount } from '../selectors'

const Footer = ({ filterClick, active, completedTodoCount }) => {
  const arr = ['SHOWALL', 'SHOWACTIVE', 'SHOWCOMPLETED']
  return (
    <div>
      {arr.map(item => {
        return <button key={item} style={{marginLeft: '4px'}} disabled={active === item}
        onClick={() => filterClick(item)}>{item}</button>
      })}
      <span> completed: {completedTodoCount}</span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    active: state.visibleFilter,
    completedTodoCount: getCompletedTodoCount(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    filterClick: (filterType) => {
      dispatch(setVisibleFilter(filterType))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)