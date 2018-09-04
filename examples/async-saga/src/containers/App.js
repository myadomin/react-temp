import React, { Component } from 'react'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import { changeSelectedType, refreshForce } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  constructor (props, context) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // 切换select
  handleChange (selectedType) {
    this.props.dispatch(changeSelectedType(selectedType))
  }

  // 强制刷新当前类文章
  handleClick () {
    const { dispatch, selectedType } = this.props
    dispatch(refreshForce(selectedType))
  }

  render () {
    const { selectedType, posts, lastUpdated, isFetching } = this.props
    return (
      <div>
        <Picker onChange={this.handleChange} selectedType={selectedType} types={['react', 'frontend']} />
        <p style={{margin: '20px 0px'}}>
          {lastUpdated ? `Last updated at ${new Date(lastUpdated).toLocaleTimeString()}` : '---'} 
          {!isFetching && <button onClick={this.handleClick} style={{marginLeft: '10px'}}>Refresh</button>}
        </p>
        {isFetching ? <h3>isLoading ... </h3>: <Posts posts={posts}/>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { selectedType, postsWithType } = state
  const { isFetching, items, lastUpdated } = postsWithType[selectedType] || { isFetching: true, items: [] }
  return {
    isFetching,
    lastUpdated,
    posts: items,
    selectedType
  }
}

export default connect(
  mapStateToProps,
  null
)(App)