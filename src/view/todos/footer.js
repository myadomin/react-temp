import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '@src/store/todos/action'

class Footer extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  render () {
    const { active, onClick } = this.props
    const filterArr = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED']
    return (
      <p className="item">
        Show:
        {filterArr.map((v) => {
          return (
            <a href="" key={v} className={active === v ? 'active' : ''}
              onClick={e => {
                e.preventDefault()
                onClick(v)
              }}>{v}, </a>
          )
        })}
      </p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.todos.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
